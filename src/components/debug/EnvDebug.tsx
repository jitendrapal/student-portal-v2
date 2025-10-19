import React from 'react';

const EnvDebug: React.FC = () => {
  // Only show in development or when explicitly enabled
  if (import.meta.env.PROD && !import.meta.env.VITE_SHOW_ENV_DEBUG) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-gray-800 text-white p-4 rounded-lg shadow-lg text-xs max-w-md z-50">
      <h3 className="font-bold mb-2">Environment Debug</h3>
      <div className="space-y-1">
        <div>
          <strong>Mode:</strong> {import.meta.env.MODE}
        </div>
        <div>
          <strong>Prod:</strong> {import.meta.env.PROD ? 'true' : 'false'}
        </div>
        <div>
          <strong>VITE_API_URL:</strong> {import.meta.env.VITE_API_URL || 'undefined'}
        </div>
        <div>
          <strong>VITE_API_BASE_URL:</strong> {import.meta.env.VITE_API_BASE_URL || 'undefined'}
        </div>
        <div>
          <strong>REACT_APP_API_URL:</strong> {process.env.REACT_APP_API_URL || 'undefined'}
        </div>
        <div>
          <strong>Computed API URL:</strong> {
            import.meta.env.VITE_API_BASE_URL || 
            process.env.REACT_APP_API_URL || 
            "http://localhost:5001"
          }
        </div>
      </div>
    </div>
  );
};

export default EnvDebug;
