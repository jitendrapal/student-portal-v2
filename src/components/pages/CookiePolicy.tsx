import React, { useState } from 'react';
import { ArrowLeft, Cookie, Settings, Eye, BarChart, Target, Shield, Check, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CookiePolicy: React.FC = () => {
  const navigate = useNavigate();
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true, // Always enabled
    functional: true,
    analytics: false,
    marketing: false,
  });

  const handlePreferenceChange = (type: string, value: boolean) => {
    if (type === 'essential') return; // Essential cookies cannot be disabled
    setCookiePreferences(prev => ({
      ...prev,
      [type]: value
    }));
  };

  const savePreferences = () => {
    // In a real app, this would save to localStorage and update cookie consent
    localStorage.setItem('cookiePreferences', JSON.stringify(cookiePreferences));
    alert('Cookie preferences saved successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-600 hover:text-gray-900 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </button>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
              <Cookie className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Cookie Policy</h1>
              <p className="text-gray-600">Last updated: October 19, 2024</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          
          {/* Introduction */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What Are Cookies?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Cookies are small text files that are placed on your device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences and 
              understanding how you use our services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This Cookie Policy explains what cookies we use, why we use them, and how you can 
              manage your cookie preferences.
            </p>
          </section>

          {/* Cookie Preferences Panel */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <Settings className="w-6 h-6 mr-2 text-orange-600" />
              Manage Your Cookie Preferences
            </h2>
            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
              
              {/* Essential Cookies */}
              <div className="flex items-center justify-between p-4 bg-white rounded-lg border">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <Shield className="w-5 h-5 mr-2 text-green-600" />
                    <h3 className="font-medium text-gray-900">Essential Cookies</h3>
                    <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Required</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Necessary for the website to function properly. Cannot be disabled.
                  </p>
                </div>
                <div className="ml-4">
                  <div className="w-12 h-6 bg-green-500 rounded-full flex items-center justify-end px-1">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Functional Cookies */}
              <div className="flex items-center justify-between p-4 bg-white rounded-lg border">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <Eye className="w-5 h-5 mr-2 text-blue-600" />
                    <h3 className="font-medium text-gray-900">Functional Cookies</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    Remember your preferences and provide enhanced features.
                  </p>
                </div>
                <div className="ml-4">
                  <button
                    onClick={() => handlePreferenceChange('functional', !cookiePreferences.functional)}
                    className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                      cookiePreferences.functional ? 'bg-blue-500 justify-end' : 'bg-gray-300 justify-start'
                    }`}
                  >
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </button>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-center justify-between p-4 bg-white rounded-lg border">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <BarChart className="w-5 h-5 mr-2 text-purple-600" />
                    <h3 className="font-medium text-gray-900">Analytics Cookies</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    Help us understand how visitors interact with our website.
                  </p>
                </div>
                <div className="ml-4">
                  <button
                    onClick={() => handlePreferenceChange('analytics', !cookiePreferences.analytics)}
                    className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                      cookiePreferences.analytics ? 'bg-purple-500 justify-end' : 'bg-gray-300 justify-start'
                    }`}
                  >
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </button>
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-center justify-between p-4 bg-white rounded-lg border">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <Target className="w-5 h-5 mr-2 text-red-600" />
                    <h3 className="font-medium text-gray-900">Marketing Cookies</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    Used to deliver personalized advertisements and track campaign effectiveness.
                  </p>
                </div>
                <div className="ml-4">
                  <button
                    onClick={() => handlePreferenceChange('marketing', !cookiePreferences.marketing)}
                    className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                      cookiePreferences.marketing ? 'bg-red-500 justify-end' : 'bg-gray-300 justify-start'
                    }`}
                  >
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </button>
                </div>
              </div>

              <div className="flex space-x-4 pt-4">
                <button
                  onClick={savePreferences}
                  className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Save Preferences
                </button>
                <button
                  onClick={() => setCookiePreferences({ essential: true, functional: true, analytics: true, marketing: true })}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Accept All
                </button>
              </div>
            </div>
          </section>

          {/* Types of Cookies */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Types of Cookies We Use</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2 flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-green-600" />
                  Essential Cookies
                </h3>
                <p className="text-gray-700 mb-3">
                  These cookies are necessary for our website to function properly and cannot be disabled.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Session management and user authentication</li>
                  <li>Security and fraud prevention</li>
                  <li>Load balancing and website performance</li>
                  <li>Cookie consent preferences</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2 flex items-center">
                  <Eye className="w-5 h-5 mr-2 text-blue-600" />
                  Functional Cookies
                </h3>
                <p className="text-gray-700 mb-3">
                  These cookies enable enhanced functionality and personalization.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Language and region preferences</li>
                  <li>Search filters and sorting preferences</li>
                  <li>Saved university and course favorites</li>
                  <li>Chat widget preferences</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2 flex items-center">
                  <BarChart className="w-5 h-5 mr-2 text-purple-600" />
                  Analytics Cookies
                </h3>
                <p className="text-gray-700 mb-3">
                  These cookies help us understand how visitors use our website.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Google Analytics for website usage statistics</li>
                  <li>Page views, session duration, and bounce rates</li>
                  <li>Popular content and user journey analysis</li>
                  <li>Performance monitoring and optimization</li>
                </ul>
              </div>

              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2 flex items-center">
                  <Target className="w-5 h-5 mr-2 text-red-600" />
                  Marketing Cookies
                </h3>
                <p className="text-gray-700 mb-3">
                  These cookies are used for advertising and marketing purposes.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Personalized advertisements on other websites</li>
                  <li>Social media integration and sharing</li>
                  <li>Campaign effectiveness tracking</li>
                  <li>Retargeting and remarketing campaigns</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Third-Party Cookies */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may use third-party services that set their own cookies. These include:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-2">Google Analytics</h4>
                <p className="text-sm text-gray-600">Website usage analytics and reporting</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-2">Google Ads</h4>
                <p className="text-sm text-gray-600">Advertising and conversion tracking</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-2">Facebook Pixel</h4>
                <p className="text-sm text-gray-600">Social media advertising and analytics</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-2">LinkedIn Insight</h4>
                <p className="text-sm text-gray-600">Professional network advertising</p>
              </div>
            </div>
          </section>

          {/* Managing Cookies */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Managing Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You can control cookies through:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Our Cookie Preferences:</strong> Use the settings above to customize your preferences</li>
              <li><strong>Browser Settings:</strong> Most browsers allow you to block or delete cookies</li>
              <li><strong>Opt-out Tools:</strong> Use industry opt-out tools for advertising cookies</li>
              <li><strong>Do Not Track:</strong> We respect browser Do Not Track signals</li>
            </ul>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Questions About Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions about our use of cookies, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700">
                <strong>Email:</strong> privacy@ejcgroup.eu<br />
                <strong>Phone:</strong> +31 620 371 533
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
