import mongoose from 'mongoose';

const universitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'University name is required'],
    trim: true,
    maxlength: [200, 'University name cannot exceed 200 characters']
  },
  slug: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true
  },
  logo: {
    type: String,
    default: null
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    maxlength: [2000, 'Description cannot exceed 2000 characters']
  },
  country: {
    type: String,
    required: [true, 'Country is required'],
    trim: true
  },
  city: {
    type: String,
    required: [true, 'City is required'],
    trim: true
  },
  establishedYear: {
    type: Number,
    required: [true, 'Established year is required'],
    min: [1000, 'Invalid established year'],
    max: [new Date().getFullYear(), 'Established year cannot be in the future']
  },
  type: {
    type: String,
    enum: ['public', 'private'],
    required: [true, 'University type is required']
  },
  ranking: {
    world: {
      type: Number,
      min: 1
    },
    national: {
      type: Number,
      min: 1
    },
    subject: {
      type: Map,
      of: Number
    }
  },
  tuitionRange: {
    min: {
      type: Number,
      required: [true, 'Minimum tuition is required'],
      min: [0, 'Tuition cannot be negative']
    },
    max: {
      type: Number,
      required: [true, 'Maximum tuition is required'],
      min: [0, 'Tuition cannot be negative']
    },
    currency: {
      type: String,
      required: [true, 'Currency is required'],
      default: 'USD'
    }
  },
  acceptanceRate: {
    type: Number,
    min: [0, 'Acceptance rate cannot be negative'],
    max: [100, 'Acceptance rate cannot exceed 100%']
  },
  studentPopulation: {
    type: Number,
    min: [0, 'Student population cannot be negative']
  },
  internationalStudents: {
    type: Number,
    min: [0, 'International students count cannot be negative']
  },
  campusSize: {
    type: String,
    trim: true
  },
  website: {
    type: String,
    trim: true,
    match: [/^https?:\/\/.+/, 'Please enter a valid website URL']
  },
  images: [{
    type: String,
    trim: true
  }],
  facilities: [{
    type: String,
    trim: true
  }],
  accreditations: [{
    type: String,
    trim: true
  }],
  partnerships: [{
    type: String,
    trim: true
  }],
  isActive: {
    type: Boolean,
    default: true
  },
  featured: {
    type: Boolean,
    default: false
  },
  applicationDeadlines: {
    fall: Date,
    spring: Date,
    summer: Date
  },
  contactInfo: {
    email: {
      type: String,
      trim: true,
      lowercase: true
    },
    phone: {
      type: String,
      trim: true
    },
    address: {
      type: String,
      trim: true
    }
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Create slug from name before saving
universitySchema.pre('save', function(next) {
  if (this.isModified('name')) {
    this.slug = this.name
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim('-');
  }
  next();
});

// Virtual for course count
universitySchema.virtual('courseCount', {
  ref: 'Course',
  localField: '_id',
  foreignField: 'university',
  count: true
});

// Virtual for application count
universitySchema.virtual('applicationCount', {
  ref: 'Application',
  localField: '_id',
  foreignField: 'university',
  count: true
});

// Indexes for better query performance
universitySchema.index({ country: 1, type: 1 });
universitySchema.index({ 'ranking.world': 1 });
universitySchema.index({ 'tuitionRange.min': 1, 'tuitionRange.max': 1 });
universitySchema.index({ featured: 1, isActive: 1 });
universitySchema.index({ slug: 1 });

export default mongoose.model('University', universitySchema);
