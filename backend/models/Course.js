import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Course name is required'],
    trim: true,
    maxlength: [200, 'Course name cannot exceed 200 characters']
  },
  slug: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true
  },
  university: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'University',
    required: [true, 'University is required']
  },
  degree: {
    type: String,
    enum: ['Bachelor', 'Master', 'PhD', 'Diploma', 'Certificate'],
    required: [true, 'Degree type is required']
  },
  field: {
    type: String,
    required: [true, 'Field of study is required'],
    trim: true
  },
  duration: {
    type: String,
    required: [true, 'Duration is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    maxlength: [3000, 'Description cannot exceed 3000 characters']
  },
  curriculum: [{
    type: String,
    trim: true
  }],
  prerequisites: [{
    type: String,
    trim: true
  }],
  tuitionFee: {
    amount: {
      type: Number,
      required: [true, 'Tuition amount is required'],
      min: [0, 'Tuition cannot be negative']
    },
    currency: {
      type: String,
      required: [true, 'Currency is required'],
      default: 'USD'
    },
    period: {
      type: String,
      enum: ['year', 'semester', 'total'],
      required: [true, 'Fee period is required']
    }
  },
  applicationDeadline: {
    type: Date
  },
  startDate: {
    type: Date
  },
  language: {
    type: String,
    required: [true, 'Language is required'],
    default: 'English'
  },
  credits: {
    type: Number,
    min: [0, 'Credits cannot be negative']
  },
  mode: {
    type: String,
    enum: ['on-campus', 'online', 'hybrid'],
    required: [true, 'Course mode is required']
  },
  eligibility: {
    minGPA: {
      type: Number,
      min: [0, 'GPA cannot be negative'],
      max: [4, 'GPA cannot exceed 4.0']
    },
    englishRequirement: {
      test: {
        type: String,
        enum: ['IELTS', 'TOEFL', 'PTE', 'Duolingo']
      },
      minScore: {
        type: Number,
        min: [0, 'Score cannot be negative']
      }
    },
    workExperience: {
      type: String,
      trim: true
    },
    otherRequirements: [{
      type: String,
      trim: true
    }]
  },
  careerProspects: [{
    type: String,
    trim: true
  }],
  scholarships: [{
    name: {
      type: String,
      trim: true
    },
    amount: {
      type: Number,
      min: [0, 'Scholarship amount cannot be negative']
    },
    currency: {
      type: String,
      default: 'USD'
    },
    criteria: {
      type: String,
      trim: true
    }
  }],
  isActive: {
    type: Boolean,
    default: true
  },
  featured: {
    type: Boolean,
    default: false
  },
  capacity: {
    type: Number,
    min: [1, 'Capacity must be at least 1']
  },
  currentEnrollment: {
    type: Number,
    default: 0,
    min: [0, 'Enrollment cannot be negative']
  },
  tags: [{
    type: String,
    trim: true,
    lowercase: true
  }],
  syllabus: {
    type: String, // URL to syllabus document
    trim: true
  },
  brochure: {
    type: String, // URL to course brochure
    trim: true
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Create slug from name and university before saving
courseSchema.pre('save', async function(next) {
  if (this.isModified('name') || this.isModified('university')) {
    const university = await mongoose.model('University').findById(this.university);
    const universityName = university ? university.name : 'unknown';
    
    this.slug = `${this.name}-${universityName}`
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim('-');
  }
  next();
});

// Virtual for application count
courseSchema.virtual('applicationCount', {
  ref: 'Application',
  localField: '_id',
  foreignField: 'course',
  count: true
});

// Virtual for availability
courseSchema.virtual('isAvailable').get(function() {
  return this.capacity ? this.currentEnrollment < this.capacity : true;
});

// Indexes for better query performance
courseSchema.index({ university: 1, degree: 1 });
courseSchema.index({ field: 1, degree: 1 });
courseSchema.index({ 'tuitionFee.amount': 1 });
courseSchema.index({ mode: 1, language: 1 });
courseSchema.index({ featured: 1, isActive: 1 });
courseSchema.index({ slug: 1 });
courseSchema.index({ tags: 1 });

export default mongoose.model('Course', courseSchema);
