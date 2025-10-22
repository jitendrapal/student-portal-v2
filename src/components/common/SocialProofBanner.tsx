import React, { useState, useEffect } from "react";
import { Users, Star, CheckCircle, TrendingUp } from "lucide-react";

interface SocialProofBannerProps {
  variant?: "floating" | "section" | "inline";
  showStats?: boolean;
  showRecentActivity?: boolean;
}

const SocialProofBanner: React.FC<SocialProofBannerProps> = ({
  variant = "floating",
  showStats = true,
  showRecentActivity = true
}) => {
  const [currentActivityIndex, setCurrentActivityIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Recent activity data (this would come from your backend in real implementation)
  const recentActivities = [
    { name: "Dr. Priya S.", action: "got a job offer in Berlin", time: "2 minutes ago", type: "doctor" },
    { name: "Nurse Rahul K.", action: "completed license recognition", time: "5 minutes ago", type: "nurse" },
    { name: "Anjali M.", action: "got admission to TU Munich", time: "8 minutes ago", type: "student" },
    { name: "Dr. Vikram P.", action: "started working in Hamburg", time: "12 minutes ago", type: "doctor" },
    { name: "Nurse Deepika R.", action: "received job offer", time: "15 minutes ago", type: "nurse" },
    { name: "Arjun S.", action: "got student visa approved", time: "18 minutes ago", type: "student" }
  ];

  const stats = [
    { number: "2,500+", label: "Doctors Placed", icon: "👨‍⚕️" },
    { number: "1,800+", label: "Nurses Hired", icon: "👩‍⚕️" },
    { number: "700+", label: "Students Enrolled", icon: "🎓" },
    { number: "98%", label: "Success Rate", icon: "✅" }
  ];

  // Rotate through recent activities
  useEffect(() => {
    if (!showRecentActivity) return;

    const timer = setInterval(() => {
      setCurrentActivityIndex((prev) => (prev + 1) % recentActivities.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [showRecentActivity, recentActivities.length]);

  // Show banner after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "doctor": return "👨‍⚕️";
      case "nurse": return "👩‍⚕️";
      case "student": return "🎓";
      default: return "✅";
    }
  };

  if (variant === "floating") {
    return (
      <div className={`fixed bottom-20 left-4 z-40 transition-all duration-500 ${
        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
      }`}>
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 max-w-sm">
          {showRecentActivity && (
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <span className="text-lg">
                    {getActivityIcon(recentActivities[currentActivityIndex].type)}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      {recentActivities[currentActivityIndex].name}
                    </p>
                    <p className="text-xs text-gray-600">
                      {recentActivities[currentActivityIndex].action}
                    </p>
                    <p className="text-xs text-gray-400">
                      {recentActivities[currentActivityIndex].time}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {showStats && (
            <div className="border-t pt-3">
              <div className="flex items-center justify-between text-xs text-gray-600">
                <span className="flex items-center">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  5,000+ Success Stories
                </span>
                <span className="flex items-center">
                  <Star className="w-3 h-3 mr-1 text-yellow-500" />
                  4.9/5 Rating
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (variant === "section") {
    return (
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Trusted by 5,000+ Professionals Worldwide
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands who have successfully built their careers in Europe
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Activity Feed */}
            {showRecentActivity && (
              <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
                  Live Success Updates
                </h3>
                
                <div className="space-y-3">
                  {recentActivities.slice(0, 3).map((activity, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <span className="text-2xl">{getActivityIcon(activity.type)}</span>
                      <div className="flex-1 text-left">
                        <p className="text-sm font-medium text-gray-800">
                          <strong>{activity.name}</strong> {activity.action}
                        </p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-600">
                    <strong>98% success rate</strong> • <strong>4.9/5 rating</strong> • <strong>24/7 support</strong>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }

  if (variant === "inline") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 my-6">
        <div className="flex items-center space-x-3">
          <Users className="w-6 h-6 text-green-600" />
          <div>
            <p className="text-sm font-medium text-green-800">
              <strong>5,000+ professionals</strong> have successfully used our services
            </p>
            <p className="text-xs text-green-600">
              ⭐ 4.9/5 rating • 98% success rate • Trusted since 2020
            </p>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default SocialProofBanner;
