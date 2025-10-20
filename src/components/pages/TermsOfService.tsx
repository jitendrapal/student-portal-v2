import React from "react";
import {
  ArrowLeft,
  FileText,
  Users,
  AlertTriangle,
  Scale,
  CreditCard,
  Shield,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const TermsOfService: React.FC = () => {
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
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Terms of Service
              </h1>
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
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Agreement to Terms
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms of Service ("Terms") govern your use of Europe Job
              Center's website and services. By accessing or using our services,
              you agree to be bound by these Terms.
            </p>
            <p className="text-gray-700 leading-relaxed">
              If you disagree with any part of these terms, you may not access
              our services.
            </p>
          </section>

          {/* Services Description */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <Users className="w-6 h-6 mr-2 text-green-600" />
              Our Services
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Europe Job Center provides:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>University application assistance and counseling services</li>
              <li>Healthcare job placement and career guidance</li>
              <li>Educational consultation and program matching</li>
              <li>Document preparation and application support</li>
              <li>Visa guidance and immigration support</li>
              <li>Career development and professional networking</li>
            </ul>
          </section>

          {/* User Responsibilities */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              User Responsibilities
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Account Information
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Provide accurate, current, and complete information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Notify us immediately of any unauthorized access</li>
                  <li>Update your information when it changes</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Prohibited Activities
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Providing false or misleading information</li>
                  <li>Using our services for illegal purposes</li>
                  <li>Attempting to gain unauthorized access to our systems</li>
                  <li>Interfering with other users' access to our services</li>
                  <li>Violating any applicable laws or regulations</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Payment Terms */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <CreditCard className="w-6 h-6 mr-2 text-green-600" />
              Payment Terms
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Service Fees
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Consultation fees are due upon booking</li>
                  <li>
                    Application processing fees are non-refundable once work
                    begins
                  </li>
                  <li>
                    Payment plans may be available for comprehensive packages
                  </li>
                  <li>All fees are in Euros unless otherwise specified</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Billing
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Invoices are sent electronically</li>
                  <li>Payment is due within 30 days of invoice date</li>
                  <li>Late payments may incur additional charges</li>
                  <li>Services may be suspended for non-payment</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Intellectual Property */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Intellectual Property
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              All content, features, and functionality of our services are owned
              by Europe Job Center and are protected by international copyright,
              trademark, and other intellectual property laws.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                You may not reproduce, distribute, or create derivative works
              </li>
              <li>
                Our trademarks and logos may not be used without permission
              </li>
              <li>
                User-generated content remains your property but grants us usage
                rights
              </li>
              <li>We respect third-party intellectual property rights</li>
            </ul>
          </section>

          {/* Disclaimers */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <AlertTriangle className="w-6 h-6 mr-2 text-yellow-600" />
              Disclaimers and Limitations
            </h2>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-4">
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>No Guarantee of Admission or Employment:</strong> While
                we provide professional guidance and support, we cannot
                guarantee university admission or job placement.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Third-Party Decisions:</strong> University admissions
                and employer hiring decisions are made independently and are
                beyond our control.
              </p>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Services are provided "as is" without warranties</li>
              <li>We are not liable for indirect or consequential damages</li>
              <li>Our liability is limited to the fees paid for services</li>
              <li>Force majeure events may affect service delivery</li>
            </ul>
          </section>

          {/* Privacy and Data */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <Shield className="w-6 h-6 mr-2 text-green-600" />
              Privacy and Data Protection
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Your privacy is important to us. Our collection and use of
              personal information is governed by our{" "}
              <button
                onClick={() => navigate("/privacy")}
                className="text-blue-600 hover:text-blue-700 underline"
              >
                Privacy Policy
              </button>
              , which is incorporated into these Terms by reference.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>We comply with GDPR and applicable data protection laws</li>
              <li>
                Your data may be shared with universities and employers as
                needed
              </li>
              <li>You have rights regarding your personal data</li>
              <li>We implement appropriate security measures</li>
            </ul>
          </section>

          {/* Termination */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Termination
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  By You
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  You may terminate your account at any time by contacting us.
                  Termination does not relieve you of payment obligations for
                  services already provided.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  By Us
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We may terminate or suspend your access for violations of
                  these Terms, non-payment, or other reasons at our discretion
                  with appropriate notice.
                </p>
              </div>
            </div>
          </section>

          {/* Governing Law */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <Scale className="w-6 h-6 mr-2 text-green-600" />
              Governing Law and Disputes
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>These Terms are governed by Dutch law</li>
              <li>Disputes will be resolved in Amsterdam, Netherlands</li>
              <li>We encourage resolution through mediation first</li>
              <li>
                Class action lawsuits are waived where legally permissible
              </li>
            </ul>
          </section>

          {/* Contact Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Contact Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Questions about these Terms should be directed to:
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700 mb-2">
                <strong>Europe Job Center</strong>
                <br />
                Email: legal@ejcgroup.eu
                <br />
                Phone: +31 620 371 533
                <br />
                Address: Amstelveen, Netherlands
              </p>
            </div>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Changes to Terms
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these Terms at any time. Changes
              will be effective immediately upon posting. Your continued use of
              our services constitutes acceptance of the modified Terms. We will
              notify users of significant changes via email or prominent website
              notice.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
