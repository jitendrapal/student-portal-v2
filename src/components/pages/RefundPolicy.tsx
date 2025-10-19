import React from 'react';
import { ArrowLeft, CreditCard, Clock, AlertCircle, CheckCircle, XCircle, Mail, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const RefundPolicy: React.FC = () => {
  const navigate = useNavigate();

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
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
              <CreditCard className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Refund Policy</h1>
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
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Commitment to You</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              At Europe Job Center, we are committed to providing high-quality services and ensuring 
              your satisfaction. This Refund Policy outlines the circumstances under which refunds 
              may be provided and the process for requesting them.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800">
                <strong>Important:</strong> Please read this policy carefully before purchasing our services. 
                By making a payment, you acknowledge that you have read and agree to this Refund Policy.
              </p>
            </div>
          </section>

          {/* Service Categories */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Service Categories & Refund Eligibility</h2>
            
            <div className="space-y-6">
              {/* Consultation Services */}
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Initial Consultation Services</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Refundable</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                      <li>Cancelled within 24 hours of booking</li>
                      <li>Counselor unavailable due to our scheduling error</li>
                      <li>Technical issues preventing consultation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Non-Refundable</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                      <li>Consultation completed as scheduled</li>
                      <li>No-show without 24-hour notice</li>
                      <li>Cancellation less than 24 hours before appointment</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Application Services */}
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <AlertCircle className="w-6 h-6 text-yellow-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Application Processing Services</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Partial Refund Available</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                      <li>Service cancelled before work begins (100% refund)</li>
                      <li>Service cancelled after initial review (50% refund)</li>
                      <li>University changes admission requirements significantly</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Non-Refundable</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                      <li>Application submitted to university</li>
                      <li>Documents prepared and reviewed</li>
                      <li>University rejection (not our fault)</li>
                      <li>Student changes mind after work completed</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Comprehensive Packages */}
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <XCircle className="w-6 h-6 text-red-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Comprehensive Service Packages</h3>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                  <p className="text-red-800 text-sm">
                    <strong>Limited Refund Policy:</strong> Due to the extensive nature of these services, 
                    refunds are only available under specific circumstances.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Refund Scenarios</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                      <li>Service failure due to our negligence</li>
                      <li>Cancellation within 7 days of purchase (before work begins)</li>
                      <li>Inability to provide promised services</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Refund Amount</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                      <li>Prorated based on services completed</li>
                      <li>Maximum 30% of total package cost</li>
                      <li>Subject to case-by-case evaluation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Refund Timeline */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <Clock className="w-6 h-6 mr-2 text-purple-600" />
              Refund Timeline & Process
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                <div>
                  <h3 className="font-medium text-gray-900">Request Submission</h3>
                  <p className="text-gray-700 text-sm">Submit refund request via email or phone within 30 days of service date</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                <div>
                  <h3 className="font-medium text-gray-900">Review Process</h3>
                  <p className="text-gray-700 text-sm">We review your request within 5-7 business days</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                <div>
                  <h3 className="font-medium text-gray-900">Decision Notification</h3>
                  <p className="text-gray-700 text-sm">You'll receive our decision via email with detailed explanation</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                <div>
                  <h3 className="font-medium text-gray-900">Refund Processing</h3>
                  <p className="text-gray-700 text-sm">If approved, refunds are processed within 10-14 business days</p>
                </div>
              </div>
            </div>
          </section>

          {/* Refund Methods */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Refund Methods</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-medium text-gray-900 mb-3">Original Payment Method</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                  <li>Credit/Debit Card: 5-10 business days</li>
                  <li>Bank Transfer: 3-7 business days</li>
                  <li>PayPal: 1-3 business days</li>
                  <li>Other methods: As per provider terms</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-medium text-gray-900 mb-3">Alternative Methods</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                  <li>Service credit for future use</li>
                  <li>Transfer to different service</li>
                  <li>Partial refund + service credit</li>
                  <li>Case-by-case arrangements</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Special Circumstances */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Special Circumstances</h2>
            
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="font-medium text-gray-900 mb-2">Force Majeure Events</h3>
                <p className="text-gray-700 text-sm">
                  In case of events beyond our control (natural disasters, government restrictions, etc.), 
                  we will work with you to reschedule services or provide appropriate compensation.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="font-medium text-gray-900 mb-2">Service Quality Issues</h3>
                <p className="text-gray-700 text-sm">
                  If you're unsatisfied with service quality, we'll first attempt to resolve the issue 
                  through additional support or service corrections before considering refunds.
                </p>
              </div>
              
              <div className="border-l-4 border-yellow-500 pl-6">
                <h3 className="font-medium text-gray-900 mb-2">University Policy Changes</h3>
                <p className="text-gray-700 text-sm">
                  If universities change their admission requirements or policies after we begin work, 
                  we'll adapt our services accordingly or discuss refund options.
                </p>
              </div>
            </div>
          </section>

          {/* How to Request */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Request a Refund</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To request a refund, please provide the following information:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Your full name and contact information</li>
              <li>Service(s) purchased and payment date</li>
              <li>Reason for refund request</li>
              <li>Supporting documentation (if applicable)</li>
              <li>Preferred refund method</li>
            </ul>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-medium text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-700">
                  <Mail className="w-5 h-5 mr-3 text-purple-600" />
                  <span><strong>Email:</strong> refunds@ejcgroup.eu</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Phone className="w-5 h-5 mr-3 text-purple-600" />
                  <span><strong>Phone:</strong> +31 620 371 533</span>
                </div>
                <div className="text-gray-700">
                  <strong>Subject Line:</strong> "Refund Request - [Your Name] - [Service Type]"
                </div>
              </div>
            </div>
          </section>

          {/* Disputes */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Dispute Resolution</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you disagree with our refund decision:
            </p>
            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              <li>Contact our customer service team to discuss your concerns</li>
              <li>Request escalation to our management team</li>
              <li>Consider mediation through a neutral third party</li>
              <li>Pursue resolution through appropriate legal channels if necessary</li>
            </ol>
          </section>

          {/* Policy Changes */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Policy Updates</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Refund Policy from time to time. Changes will be posted on our website 
              and will apply to services purchased after the effective date. For services purchased before 
              policy changes, the original policy terms will apply.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
