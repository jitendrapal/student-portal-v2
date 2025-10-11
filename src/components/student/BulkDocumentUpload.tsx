import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Upload, X, File, CheckCircle, AlertCircle, Plus } from "lucide-react";
import { useStore } from "../../store/useStore";

interface DocumentFile {
  file: File;
  type: string;
  id: string;
}

interface BulkDocumentUploadProps {
  onClose: () => void;
  applicationId?: string;
}

const BulkDocumentUpload: React.FC<BulkDocumentUploadProps> = ({
  onClose,
  applicationId,
}) => {
  const { addDocumentToApplication } = useStore();
  const [documentFiles, setDocumentFiles] = useState<DocumentFile[]>([]);
  const [isUploading, setIsUploading] = useState(false);

  const requiredDocumentTypes = [
    { value: "transcript", label: "Official Transcript", required: true },
    { value: "passport", label: "Passport Copy", required: true },
    {
      value: "english_test",
      label: "English Test Score (IELTS/TOEFL/PTE)",
      required: true,
    },
  ];

  const optionalDocumentTypes = [
    { value: "diploma", label: "Diploma/Degree Certificate", required: false },
    {
      value: "recommendation_letter",
      label: "Letter of Recommendation",
      required: false,
    },
    {
      value: "personal_statement",
      label: "Personal Statement",
      required: false,
    },
    { value: "cv", label: "CV/Resume", required: false },
    { value: "portfolio", label: "Portfolio", required: false },
    { value: "other", label: "Other Document", required: false },
  ];

  const allDocumentTypes = [...requiredDocumentTypes, ...optionalDocumentTypes];

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newFiles = acceptedFiles.map((file) => ({
      file,
      type: "", // Will be set by user
      id: Math.random().toString(36).substr(2, 9),
    }));
    setDocumentFiles((prev) => [...prev, ...newFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "image/*": [".png", ".jpg", ".jpeg"],
      "application/msword": [".doc"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [".docx"],
    },
    maxSize: 10 * 1024 * 1024, // 10MB
    multiple: true,
  });

  const removeFile = (id: string) => {
    setDocumentFiles((prev) => prev.filter((doc) => doc.id !== id));
  };

  const updateDocumentType = (id: string, type: string) => {
    setDocumentFiles((prev) =>
      prev.map((doc) => (doc.id === id ? { ...doc, type } : doc))
    );
  };

  const addRequiredDocuments = () => {
    const requiredDocs = requiredDocumentTypes.map((docType) => ({
      file: null as any, // Will be set when user uploads
      type: docType.value,
      id: Math.random().toString(36).substr(2, 9),
    }));
    setDocumentFiles(requiredDocs);
  };

  const handleFileUploadForType = (docId: string, files: FileList | null) => {
    if (!files || files.length === 0) return;

    const file = files[0];
    setDocumentFiles((prev) =>
      prev.map((doc) => (doc.id === docId ? { ...doc, file } : doc))
    );
  };

  const handleUpload = async () => {
    const filesToUpload = documentFiles.filter((doc) => doc.file && doc.type);

    if (filesToUpload.length === 0) {
      alert("Please upload at least one document");
      return;
    }

    // Check if all required documents are uploaded
    const missingRequired = requiredDocumentTypes.filter(
      (reqType) => !filesToUpload.some((doc) => doc.type === reqType.value)
    );

    if (missingRequired.length > 0) {
      const missingNames = missingRequired.map((doc) => doc.label).join(", ");
      alert(`Please upload all required documents: ${missingNames}`);
      return;
    }

    if (!applicationId) {
      alert("No application selected");
      return;
    }

    setIsUploading(true);

    try {
      // Mock upload - in real app, this would upload to cloud storage
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Add all documents to the application
      filesToUpload.forEach((docFile) => {
        addDocumentToApplication(applicationId, {
          type: docFile.type,
          name: docFile.file.name,
          fileName: docFile.file.name,
          fileSize: docFile.file.size,
          mimeType: docFile.file.type,
        });
      });

      alert(`Successfully uploaded ${filesToUpload.length} document(s)`);
      onClose();
    } catch (error) {
      alert("Upload failed. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const getUploadedCount = () => {
    return documentFiles.filter((doc) => doc.file && doc.type).length;
  };

  const getRequiredUploadedCount = () => {
    return requiredDocumentTypes.filter((reqType) =>
      documentFiles.some((doc) => doc.type === reqType.value && doc.file)
    ).length;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              Upload All Documents
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Upload all required documents in one go
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Progress Summary */}
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-blue-900">
                  Upload Progress
                </h3>
                <p className="text-sm text-blue-800">
                  Required: {getRequiredUploadedCount()}/
                  {requiredDocumentTypes.length} • Total: {getUploadedCount()}/
                  {documentFiles.length}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                {getRequiredUploadedCount() === requiredDocumentTypes.length ? (
                  <CheckCircle className="w-5 h-5 text-green-500" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-yellow-500" />
                )}
              </div>
            </div>
          </div>

          {/* Quick Setup Button */}
          {documentFiles.length === 0 && (
            <div className="text-center">
              <button
                onClick={addRequiredDocuments}
                className="btn-primary flex items-center mx-auto"
              >
                <Plus className="w-4 h-4 mr-2" />
                Set Up Required Documents
              </button>
              <p className="text-sm text-gray-600 mt-2">
                This will create upload slots for all required documents
              </p>
            </div>
          )}

          {/* Bulk File Upload Area */}
          {documentFiles.length === 0 && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Or Upload Files First (then assign types)
              </label>
              <div
                {...getRootProps()}
                className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                  isDragActive
                    ? "border-primary-400 bg-primary-50"
                    : "border-gray-300 hover:border-primary-400 hover:bg-gray-50"
                }`}
              >
                <input {...getInputProps()} />
                <Upload className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                {isDragActive ? (
                  <p className="text-primary-600">Drop the files here...</p>
                ) : (
                  <div>
                    <p className="text-gray-600 mb-2">
                      Drag & drop multiple files here, or{" "}
                      <span className="text-primary-600 font-medium">
                        browse
                      </span>
                    </p>
                    <p className="text-sm text-gray-500">
                      Supports: PDF, DOC, DOCX, JPG, PNG (Max 10MB each)
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Document Upload Slots */}
          {documentFiles.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-900">
                  Document Upload Slots
                </h3>
                <button
                  onClick={() => {
                    const newDoc = {
                      file: null as any,
                      type: "",
                      id: Math.random().toString(36).substr(2, 9),
                    };
                    setDocumentFiles((prev) => [...prev, newDoc]);
                  }}
                  className="btn-secondary text-sm"
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Add Slot
                </button>
              </div>

              {/* Required Documents */}
              <div>
                <h4 className="text-sm font-medium text-red-700 mb-3 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  Required Documents
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {documentFiles
                    .filter((doc) =>
                      requiredDocumentTypes.some(
                        (req) => req.value === doc.type
                      )
                    )
                    .map((docFile) => {
                      const docType = allDocumentTypes.find(
                        (type) => type.value === docFile.type
                      );
                      return (
                        <div
                          key={docFile.id}
                          className="border border-red-200 rounded-lg p-4 bg-red-50"
                        >
                          <div className="flex items-center justify-between mb-3">
                            <h5 className="font-medium text-gray-900">
                              {docType?.label}
                            </h5>
                            <button
                              onClick={() => removeFile(docFile.id)}
                              className="text-red-400 hover:text-red-600"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>

                          {docFile.file ? (
                            <div className="flex items-center space-x-3 p-3 bg-white rounded border">
                              <File className="w-5 h-5 text-green-500" />
                              <div className="flex-1">
                                <div className="text-sm font-medium text-gray-900">
                                  {docFile.file.name}
                                </div>
                                <div className="text-xs text-gray-500">
                                  {formatFileSize(docFile.file.size)}
                                </div>
                              </div>
                              <CheckCircle className="w-5 h-5 text-green-500" />
                            </div>
                          ) : (
                            <div>
                              <input
                                type="file"
                                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                                onChange={(e) =>
                                  handleFileUploadForType(
                                    docFile.id,
                                    e.target.files
                                  )
                                }
                                className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100"
                              />
                              <p className="text-xs text-gray-500 mt-1">
                                Max 10MB • PDF, DOC, DOCX, JPG, PNG
                              </p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                </div>
              </div>

              {/* Optional Documents */}
              {documentFiles.some(
                (doc) =>
                  optionalDocumentTypes.some((opt) => opt.value === doc.type) ||
                  !doc.type
              ) && (
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-3">
                    Optional Documents
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {documentFiles
                      .filter(
                        (doc) =>
                          !requiredDocumentTypes.some(
                            (req) => req.value === doc.type
                          )
                      )
                      .map((docFile) => (
                        <div
                          key={docFile.id}
                          className="border border-gray-200 rounded-lg p-4"
                        >
                          <div className="flex items-center justify-between mb-3">
                            <select
                              value={docFile.type}
                              onChange={(e) =>
                                updateDocumentType(docFile.id, e.target.value)
                              }
                              className="flex-1 text-sm border border-gray-300 rounded px-2 py-1 mr-2"
                            >
                              <option value="">Select document type</option>
                              {allDocumentTypes.map((type) => (
                                <option key={type.value} value={type.value}>
                                  {type.label}
                                </option>
                              ))}
                            </select>
                            <button
                              onClick={() => removeFile(docFile.id)}
                              className="text-gray-400 hover:text-gray-600"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>

                          {docFile.file ? (
                            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded border">
                              <File className="w-5 h-5 text-green-500" />
                              <div className="flex-1">
                                <div className="text-sm font-medium text-gray-900">
                                  {docFile.file.name}
                                </div>
                                <div className="text-xs text-gray-500">
                                  {formatFileSize(docFile.file.size)}
                                </div>
                              </div>
                              <CheckCircle className="w-5 h-5 text-green-500" />
                            </div>
                          ) : (
                            <div>
                              <input
                                type="file"
                                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                                onChange={(e) =>
                                  handleFileUploadForType(
                                    docFile.id,
                                    e.target.files
                                  )
                                }
                                className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100"
                              />
                              <p className="text-xs text-gray-500 mt-1">
                                Max 10MB • PDF, DOC, DOCX, JPG, PNG
                              </p>
                            </div>
                          )}
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Upload Guidelines */}
          <div className="bg-yellow-50 rounded-lg p-4">
            <h3 className="text-sm font-medium text-yellow-900 mb-2">
              Upload Guidelines
            </h3>
            <ul className="text-sm text-yellow-800 space-y-1">
              <li>• Ensure all documents are clear and legible</li>
              <li>• Official documents should be certified copies</li>
              <li>• English translations required for non-English documents</li>
              <li>• File size should not exceed 10MB per document</li>
              <li>
                • All required documents must be uploaded before submission
              </li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-gray-200">
          <div className="text-sm text-gray-500">
            {getUploadedCount() > 0 && (
              <span>
                {getUploadedCount()} document(s) ready •
                {getRequiredUploadedCount()}/{requiredDocumentTypes.length}{" "}
                required completed
              </span>
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
              disabled={getUploadedCount() === 0 || isUploading}
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isUploading ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Uploading...
                </div>
              ) : (
                `Upload ${getUploadedCount()} Document(s)`
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BulkDocumentUpload;
