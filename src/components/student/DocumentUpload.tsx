import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, X, File, CheckCircle, AlertCircle } from 'lucide-react';

interface DocumentUploadProps {
  onClose: () => void;
  applicationId?: string;
}

const DocumentUpload: React.FC<DocumentUploadProps> = ({ onClose, applicationId }) => {
  const [selectedType, setSelectedType] = useState<string>('');
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isUploading, setIsUploading] = useState(false);

  const documentTypes = [
    { value: 'transcript', label: 'Official Transcript' },
    { value: 'diploma', label: 'Diploma/Degree Certificate' },
    { value: 'passport', label: 'Passport Copy' },
    { value: 'english_test', label: 'English Test Score (IELTS/TOEFL/PTE)' },
    { value: 'recommendation_letter', label: 'Letter of Recommendation' },
    { value: 'personal_statement', label: 'Personal Statement' },
    { value: 'cv', label: 'CV/Resume' },
    { value: 'portfolio', label: 'Portfolio' },
    { value: 'other', label: 'Other Document' }
  ];

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setUploadedFiles(prev => [...prev, ...acceptedFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'image/*': ['.png', '.jpg', '.jpeg'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
    },
    maxSize: 10 * 1024 * 1024, // 10MB
    multiple: true
  });

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleUpload = async () => {
    if (!selectedType || uploadedFiles.length === 0) {
      alert('Please select document type and upload at least one file');
      return;
    }

    setIsUploading(true);
    
    try {
      // Mock upload - in real app, this would upload to cloud storage
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock success
      alert(`Successfully uploaded ${uploadedFiles.length} document(s)`);
      onClose();
    } catch (error) {
      alert('Upload failed. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Upload Documents</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Document Type Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Document Type *
            </label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="">Select document type</option>
              {documentTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          {/* File Upload Area */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Files *
            </label>
            <div
              {...getRootProps()}
              className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                isDragActive
                  ? 'border-primary-400 bg-primary-50'
                  : 'border-gray-300 hover:border-primary-400 hover:bg-gray-50'
              }`}
            >
              <input {...getInputProps()} />
              <Upload className="w-12 h-12 mx-auto text-gray-400 mb-4" />
              {isDragActive ? (
                <p className="text-primary-600">Drop the files here...</p>
              ) : (
                <div>
                  <p className="text-gray-600 mb-2">
                    Drag & drop files here, or <span className="text-primary-600 font-medium">browse</span>
                  </p>
                  <p className="text-sm text-gray-500">
                    Supports: PDF, DOC, DOCX, JPG, PNG (Max 10MB each)
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Uploaded Files List */}
          {uploadedFiles.length > 0 && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Selected Files ({uploadedFiles.length})
              </label>
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {uploadedFiles.map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <File className="w-5 h-5 text-gray-400" />
                      <div>
                        <div className="text-sm font-medium text-gray-900">{file.name}</div>
                        <div className="text-xs text-gray-500">{formatFileSize(file.size)}</div>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFile(index)}
                      className="text-red-400 hover:text-red-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Upload Guidelines */}
          <div className="bg-blue-50 rounded-lg p-4">
            <h3 className="text-sm font-medium text-blue-900 mb-2">Upload Guidelines</h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Ensure documents are clear and legible</li>
              <li>• Official documents should be certified copies</li>
              <li>• English translations required for non-English documents</li>
              <li>• File size should not exceed 10MB per document</li>
            </ul>
          </div>

          {/* Requirements by Document Type */}
          {selectedType && (
            <div className="bg-yellow-50 rounded-lg p-4">
              <h3 className="text-sm font-medium text-yellow-900 mb-2">
                Requirements for {documentTypes.find(t => t.value === selectedType)?.label}
              </h3>
              <div className="text-sm text-yellow-800">
                {selectedType === 'transcript' && (
                  <p>Official transcript with grades, GPA, and institution seal/signature required.</p>
                )}
                {selectedType === 'english_test' && (
                  <p>Official score report from test center. Screenshot or unofficial scores not accepted.</p>
                )}
                {selectedType === 'passport' && (
                  <p>Clear copy of passport bio-data page with photo and personal details.</p>
                )}
                {selectedType === 'recommendation_letter' && (
                  <p>Letter should be on official letterhead with recommender's contact information.</p>
                )}
                {selectedType === 'personal_statement' && (
                  <p>Statement of purpose explaining your academic goals and motivation.</p>
                )}
                {selectedType === 'cv' && (
                  <p>Updated CV/resume with education, work experience, and achievements.</p>
                )}
                {selectedType === 'diploma' && (
                  <p>Official degree certificate or diploma from your institution.</p>
                )}
                {selectedType === 'portfolio' && (
                  <p>Collection of your best work relevant to your field of study.</p>
                )}
                {selectedType === 'other' && (
                  <p>Any additional documents required by the university or program.</p>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-gray-200">
          <div className="text-sm text-gray-500">
            {uploadedFiles.length > 0 && (
              <span>{uploadedFiles.length} file(s) selected</span>
            )}
          </div>
          <div className="flex space-x-3">
            <button
              onClick={onClose}
              className="btn-secondary"
              disabled={isUploading}
            >
              Cancel
            </button>
            <button
              onClick={handleUpload}
              disabled={!selectedType || uploadedFiles.length === 0 || isUploading}
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isUploading ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Uploading...
                </div>
              ) : (
                'Upload Documents'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentUpload;
