import React, { useState } from 'react';
import { ArrowLeft, BookOpen, Calendar, User, Tag, Search, TrendingUp, Clock, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Blog: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', count: 24 },
    { id: 'university', name: 'University Guide', count: 8 },
    { id: 'healthcare', name: 'Healthcare Careers', count: 6 },
    { id: 'scholarships', name: 'Scholarships', count: 5 },
    { id: 'visa', name: 'Visa & Immigration', count: 3 },
    { id: 'lifestyle', name: 'European Lifestyle', count: 2 },
  ];

  const featuredPost = {
    id: 1,
    title: 'Complete Guide to Studying Medicine in Germany 2024',
    excerpt: 'Everything you need to know about medical education in Germany, from application requirements to career prospects.',
    author: 'Dr. Sarah Johnson',
    date: '2024-10-15',
    readTime: '12 min read',
    category: 'university',
    image: '/api/placeholder/600/300',
    tags: ['Medicine', 'Germany', 'University', 'Application'],
    featured: true,
  };

  const blogPosts = [
    {
      id: 2,
      title: 'Top 10 Scholarships for International Students in Europe',
      excerpt: 'Discover the most generous scholarship programs available for international students across European universities.',
      author: 'Emma Rodriguez',
      date: '2024-10-12',
      readTime: '8 min read',
      category: 'scholarships',
      image: '/api/placeholder/400/200',
      tags: ['Scholarships', 'Funding', 'Europe'],
    },
    {
      id: 3,
      title: 'Healthcare Job Market Trends in Netherlands 2024',
      excerpt: 'Analysis of current healthcare job opportunities and salary trends in the Netherlands for international professionals.',
      author: 'Dr. James Wilson',
      date: '2024-10-10',
      readTime: '6 min read',
      category: 'healthcare',
      image: '/api/placeholder/400/200',
      tags: ['Healthcare', 'Netherlands', 'Jobs'],
    },
    {
      id: 4,
      title: 'Student Visa Requirements: A Country-by-Country Guide',
      excerpt: 'Comprehensive breakdown of student visa requirements for major European destinations.',
      author: 'Michael Chen',
      date: '2024-10-08',
      readTime: '10 min read',
      category: 'visa',
      image: '/api/placeholder/400/200',
      tags: ['Visa', 'Immigration', 'Students'],
    },
    {
      id: 5,
      title: 'Best European Cities for International Students',
      excerpt: 'Explore the most student-friendly cities in Europe, considering cost of living, culture, and opportunities.',
      author: 'Anna Schmidt',
      date: '2024-10-05',
      readTime: '7 min read',
      category: 'lifestyle',
      image: '/api/placeholder/400/200',
      tags: ['Cities', 'Lifestyle', 'Students'],
    },
    {
      id: 6,
      title: 'How to Write a Winning Personal Statement',
      excerpt: 'Expert tips and examples for crafting compelling personal statements for European university applications.',
      author: 'Dr. Sarah Johnson',
      date: '2024-10-03',
      readTime: '9 min read',
      category: 'university',
      image: '/api/placeholder/400/200',
      tags: ['Application', 'Personal Statement', 'Tips'],
    },
    {
      id: 7,
      title: 'Nursing Opportunities in Scandinavia',
      excerpt: 'Comprehensive guide to nursing careers in Sweden, Norway, and Denmark for international professionals.',
      author: 'Dr. James Wilson',
      date: '2024-09-30',
      readTime: '8 min read',
      category: 'healthcare',
      image: '/api/placeholder/400/200',
      tags: ['Nursing', 'Scandinavia', 'Healthcare'],
    },
    {
      id: 8,
      title: 'IELTS vs TOEFL: Which Test Should You Take?',
      excerpt: 'Detailed comparison of IELTS and TOEFL tests to help you choose the right English proficiency exam.',
      author: 'Emma Rodriguez',
      date: '2024-09-28',
      readTime: '5 min read',
      category: 'university',
      image: '/api/placeholder/400/200',
      tags: ['IELTS', 'TOEFL', 'English', 'Tests'],
    },
    {
      id: 9,
      title: 'Erasmus+ Program: Everything You Need to Know',
      excerpt: 'Complete guide to the Erasmus+ exchange program, including application process and benefits.',
      author: 'Michael Chen',
      date: '2024-09-25',
      readTime: '11 min read',
      category: 'scholarships',
      image: '/api/placeholder/400/200',
      tags: ['Erasmus', 'Exchange', 'Europe'],
    },
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getCategoryColor = (category: string) => {
    const colors = {
      university: 'bg-blue-100 text-blue-800',
      healthcare: 'bg-green-100 text-green-800',
      scholarships: 'bg-purple-100 text-purple-800',
      visa: 'bg-orange-100 text-orange-800',
      lifestyle: 'bg-pink-100 text-pink-800',
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-600 hover:text-gray-900 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </button>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">EJC Blog</h1>
              <p className="text-gray-600">Insights, guides, and tips for your European journey</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Post */}
      <div className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <TrendingUp className="w-6 h-6 text-indigo-600 mr-2" />
            <h2 className="text-2xl font-bold text-gray-900">Featured Article</h2>
          </div>
          
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(featuredPost.category)}`}>
                    {categories.find(c => c.id === featuredPost.category)?.name}
                  </span>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{featuredPost.title}</h3>
                <p className="text-gray-700 mb-6">{featuredPost.excerpt}</p>
                
                <div className="flex items-center text-sm text-gray-600 mb-6">
                  <User className="w-4 h-4 mr-1" />
                  <span className="mr-4">{featuredPost.author}</span>
                  <Calendar className="w-4 h-4 mr-1" />
                  <span className="mr-4">{new Date(featuredPost.date).toLocaleDateString()}</span>
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{featuredPost.readTime}</span>
                </div>
                
                <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors flex items-center">
                  Read Article
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-400 to-blue-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-24 h-24 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest Articles</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <BookOpen className="w-12 h-12 text-gray-500" />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(post.category)}`}>
                      {categories.find(c => c.id === post.category)?.name}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <User className="w-4 h-4 mr-1" />
                    <span className="mr-4">{post.author}</span>
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        <Tag className="w-3 h-3 inline mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="text-indigo-600 hover:text-indigo-700 font-medium text-sm flex items-center">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="py-16 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Stay Updated</h2>
          <p className="text-xl text-indigo-100 mb-8">
            Get the latest insights, guides, and tips delivered to your inbox weekly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
