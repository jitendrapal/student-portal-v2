import React from "react";
import {
  Star,
  Users,
  MapPin,
  BookOpen,
  Award,
  Search,
  MessageCircle,
} from "lucide-react";

const ThemeDemo: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-hero py-12 relative overflow-hidden">
      {/* Ultra Modern Background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,rgba(14,165,233,0.1),rgba(139,92,246,0.1),rgba(217,70,239,0.1),rgba(236,72,153,0.1),rgba(14,165,233,0.1))] animate-spin"
          style={{ animationDuration: "30s" }}
        ></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(0,212,255,0.2),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(217,70,239,0.2),transparent_50%)]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Ultra Modern Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center glass-cyber text-white px-8 py-4 rounded-full text-sm font-bold mb-6 shadow-electric pulse-glow">
            🚀 Ultra Modern Theme Demo
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black gradient-text-electric mb-8">
            EJC
          </h1>
          <p className="text-xl text-white max-w-4xl mx-auto leading-relaxed font-semibold">
            Experience our cutting-edge, ultra-modern design with{" "}
            <span className="text-vibrant-cyan glow-text">electric colors</span>
            ,{" "}
            <span className="text-vibrant-pink glow-text">
              advanced animations
            </span>
            , and{" "}
            <span className="text-vibrant-purple glow-text">
              futuristic interactive elements
            </span>
            .
          </p>
        </div>

        {/* Ultra Modern Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Ultra Modern Feature Card 1 */}
          <div className="glass-cyber p-8 rounded-modern-xl shadow-cyber hover:shadow-electric transition-all duration-500 border border-neon-blue/20 group hover:-translate-y-4 hover:scale-105 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-neon opacity-5 group-hover:opacity-15 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-neon rounded-modern-lg mb-6 shadow-glow-neon group-hover:shadow-electric transition-all duration-500 pulse-glow">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black text-vibrant-cyan mb-4 glow-text">
                AI-Powered Search
              </h3>
              <p className="text-white leading-relaxed font-semibold">
                Find universities and courses that match your profile with our
                next-generation intelligent search system.
              </p>
            </div>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-white/95 backdrop-blur-sm rounded-modern-lg shadow-modern hover:shadow-modern-lg transition-all duration-300 border border-gray-100/50 group hover:-translate-y-1 p-6">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-secondary rounded-modern mb-6 shadow-glow-secondary group-hover:shadow-glow-secondary transition-all duration-300">
              <BookOpen className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Quality Education
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Access to 40+ prestigious European universities across 12
              countries.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-white/95 backdrop-blur-sm rounded-modern-lg shadow-modern hover:shadow-modern-lg transition-all duration-300 border border-gray-100/50 group hover:-translate-y-1 p-6">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-accent rounded-modern mb-6 shadow-glow group-hover:shadow-glow transition-all duration-300">
              <Award className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Expert Guidance
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Professional counseling and support throughout your application
              journey.
            </p>
          </div>
        </div>

        {/* Modern Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="bg-gradient-primary text-white px-8 py-4 rounded-modern-lg font-bold text-lg hover:shadow-glow transition-all duration-300 shadow-modern-lg hover:shadow-modern-xl transform hover:-translate-y-1 flex items-center gap-3 group">
            <MessageCircle className="w-5 h-5 group-hover:animate-bounce-gentle" />
            Get Free Counseling
          </button>

          <button className="bg-white/95 backdrop-blur-sm text-primary-600 px-8 py-4 rounded-modern-lg font-semibold text-lg hover:bg-white transition-all duration-300 shadow-modern-lg hover:shadow-modern-xl transform hover:-translate-y-1 border border-white/50">
            Explore Universities
          </button>

          <button className="bg-gradient-secondary text-white px-8 py-4 rounded-modern-lg font-semibold text-lg hover:shadow-glow-secondary transition-all duration-300 shadow-modern-lg hover:shadow-modern-xl transform hover:-translate-y-1">
            Browse Courses
          </button>
        </div>

        {/* Sample University Card */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Sample University Card
          </h2>
          <div className="bg-white/95 backdrop-blur-sm rounded-modern-lg shadow-modern hover:shadow-modern-lg transition-all duration-300 border border-gray-100/50 group hover:-translate-y-1">
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                {/* University Logo */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-primary rounded-modern flex items-center justify-center shadow-glow group-hover:shadow-glow transition-all duration-300">
                    <span className="text-white text-lg font-bold">TU</span>
                  </div>
                </div>

                {/* University Info */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        Technical University of Munich
                      </h3>
                      <div className="flex items-center text-gray-600 mb-2">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>Munich, Germany</span>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 mr-1 text-yellow-400" />
                          <span>#50 World</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          <span>15% acceptance</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    One of Europe's top technical universities, known for
                    excellence in engineering, technology, and natural sciences
                    with strong industry connections.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                      Engineering
                    </span>
                    <span className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium">
                      Computer Science
                    </span>
                    <span className="px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm font-medium">
                      Research
                    </span>
                  </div>

                  <button className="bg-gradient-primary text-white px-6 py-2 rounded-modern font-semibold hover:shadow-glow transition-all duration-300">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeDemo;
