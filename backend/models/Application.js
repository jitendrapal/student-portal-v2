import mongoose from 'mongoose';

const applicationDocumentSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: [
      'transcript', 'diploma', 'passport', 'english_test', 
      'recommendation_letter', 'personal_statement', 'cv', 
      'portfolio', 'other'
    ],
    required: [true, 'Document type is required']
  },
  name: {
    type: String,
    required: [true, 'Document name is required'],
    trim: true
  },
  fileName: {
    type: String,
    required: [true, 'File name is required'],
    trim: true
  },
  fileSize: {
    type: Number,
    required: [true, 'File size is required'],
    min: [0, 'File size cannot be negative']
  },
  mimeType: {
    type: String,
    required: [true, 'MIME type is required'],
    trim: true
  },
  url: {
    type: String,
    required: [true, 'File URL is required'],
    trim: true
  },
  cloudinaryId: {
    type: String,
    trim: true
  },
  status: {
    type: String,
    enum: ['pending', 'verified', 'rejected'],
    default: 'pending'
  },
  verifiedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  verifiedAt: {
    type: Date
  },
  rejectionReason: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});

const statusUpdateSchema = new mongoose.Schema({
  status: {
    type: String,
    enum: [
      'draft', 'submitted', 'under_review', 'interview_scheduled',
      'accepted', 'rejected', 'waitlisted', 'withdrawn'
    ],
    required: [true, 'Status is required']
  },
  updatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Updated by user is required']
  },
  notes: {
    type: String,
    trim: true,
    maxlength: [1000, 'Notes cannot exceed 1000 characters']
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const applicationSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Student is required']
  },
  university: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'University',
    required: [true, 'University is required']
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: [true, 'Course is required']
  },
  status: {
    type: String,
    enum: [
      'draft', 'submitted', 'under_review', 'interview_scheduled',
      'accepted', 'rejected', 'waitlisted', 'withdrawn'
    ],
    default: 'draft'
  },
  submittedAt: {
    type: Date
  },
  documents: [applicationDocumentSchema],
  personalStatement: {
    type: String,
    trim: true,
    maxlength: [5000, 'Personal statement cannot exceed 5000 characters']
  },
  additionalInfo: {
    type: String,
    trim: true,
    maxlength: [2000, 'Additional info cannot exceed 2000 characters']
  },
  counselorNotes: {
    type: String,
    trim: true,
    maxlength: [2000, 'Counselor notes cannot exceed 2000 characters']
  },
  statusHistory: [statusUpdateSchema],
  interviewDate: {
    type: Date
  },
  interviewType: {
    type: String,
    enum: ['online', 'in-person', 'phone'],
    trim: true
  },
  interviewNotes: {
    type: String,
    trim: true,
    maxlength: [1000, 'Interview notes cannot exceed 1000 characters']
  },
  decisionDate: {
    type: Date
  },
  scholarshipOffered: {
    amount: {
      type: Number,
      min: [0, 'Scholarship amount cannot be negative']
    },
    currency: {
      type: String,
      default: 'USD'
    },
    type: {
      type: String,
      trim: true
    },
    conditions: {
      type: String,
      trim: true
    }
  },
  assignedCounselor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high', 'urgent'],
    default: 'medium'
  },
  applicationFee: {
    amount: {
      type: Number,
      min: [0, 'Application fee cannot be negative']
    },
    currency: {
      type: String,
      default: 'USD'
    },
    paid: {
      type: Boolean,
      default: false
    },
    paidAt: {
      type: Date
    },
    transactionId: {
      type: String,
      trim: true
    }
  },
  deadlines: {
    application: {
      type: Date
    },
    documents: {
      type: Date
    },
    interview: {
      type: Date
    }
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Add status update to history before saving
applicationSchema.pre('save', function(next) {
  if (this.isModified('status') && !this.isNew) {
    this.statusHistory.push({
      status: this.status,
      updatedBy: this.assignedCounselor || this.student,
      timestamp: new Date()
    });
  }
  next();
});

// Set submitted date when status changes to submitted
applicationSchema.pre('save', function(next) {
  if (this.isModified('status') && this.status === 'submitted' && !this.submittedAt) {
    this.submittedAt = new Date();
  }
  next();
});

// Indexes for better query performance
applicationSchema.index({ student: 1, status: 1 });
applicationSchema.index({ university: 1, course: 1 });
applicationSchema.index({ assignedCounselor: 1, status: 1 });
applicationSchema.index({ status: 1, submittedAt: 1 });
applicationSchema.index({ createdAt: 1 });

export default mongoose.model('Application', applicationSchema);
