'use client';

import { useState } from 'react';
import AnimatedSection from '@/components/AnimatedSection';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">Shubham Kumar</h1>
            </div>
            <div className="flex items-center space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
              <a href="#experience" className="text-gray-700 hover:text-blue-600">Experience</a>
              <a href="#skills" className="text-gray-700 hover:text-blue-600">Skills</a>
              <a href="/blog" className="text-gray-700 hover:text-blue-600">Blog</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-5xl font-bold mb-6">Hi, I'm Shubham Kumar</h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-xl mb-8">Senior Software Engineer with 5+ years of experience</p>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <p className="text-lg mb-8">IIT Delhi Graduate | Full-Stack Developer | Tech Enthusiast</p>
          </AnimatedSection>
          <AnimatedSection delay={0.6}>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              View My Work
            </button>
          </AnimatedSection>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                I'm a passionate software engineer with over 5 years of experience building scalable web applications. 
                I graduated from IIT Delhi with a strong foundation in computer science and engineering.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                I specialize in modern web technologies including React, Node.js, and cloud platforms. 
                I love solving complex problems and creating user-friendly applications that make a difference.
              </p>
              <p className="text-lg text-gray-700">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or mentoring junior developers.
              </p>
            </div>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Profile Photo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Senior Software Engineer</h3>
              <p className="text-blue-600 mb-2">Tech Company • 2022 - Present</p>
              <ul className="text-gray-700 space-y-2">
                <li>• Led development of microservices architecture serving 1M+ users</li>
                <li>• Mentored 5 junior developers and conducted code reviews</li>
                <li>• Improved application performance by 40% through optimization</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Software Engineer</h3>
              <p className="text-blue-600 mb-2">Startup • 2020 - 2022</p>
              <ul className="text-gray-700 space-y-2">
                <li>• Built full-stack web applications using React and Node.js</li>
                <li>• Collaborated with cross-functional teams in agile environment</li>
                <li>• Implemented CI/CD pipelines reducing deployment time by 60%</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Junior Developer</h3>
              <p className="text-blue-600 mb-2">IT Company • 2019 - 2020</p>
              <ul className="text-gray-700 space-y-2">
                <li>• Developed responsive web interfaces using modern JavaScript</li>
                <li>• Worked on database design and API development</li>
                <li>• Participated in code reviews and testing procedures</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
          <div className="bg-gray-50 p-8 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-2">Indian Institute of Technology, Delhi</h3>
            <p className="text-blue-600 mb-2">Bachelor of Technology in Computer Science</p>
            <p className="text-gray-600 mb-4">2015 - 2019</p>
            <p className="text-gray-700">
              Graduated with distinction. Specialized in algorithms, data structures, and software engineering. 
              Active member of coding clubs and technical societies.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Frontend</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>React.js</span>
                  <span className="text-blue-600">95%</span>
                </div>
                <div className="flex justify-between">
                  <span>Next.js</span>
                  <span className="text-blue-600">90%</span>
                </div>
                <div className="flex justify-between">
                  <span>TypeScript</span>
                  <span className="text-blue-600">85%</span>
                </div>
                <div className="flex justify-between">
                  <span>Tailwind CSS</span>
                  <span className="text-blue-600">90%</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Backend</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Node.js</span>
                  <span className="text-blue-600">90%</span>
                </div>
                <div className="flex justify-between">
                  <span>Express.js</span>
                  <span className="text-blue-600">85%</span>
                </div>
                <div className="flex justify-between">
                  <span>MongoDB</span>
                  <span className="text-blue-600">80%</span>
                </div>
                <div className="flex justify-between">
                  <span>PostgreSQL</span>
                  <span className="text-blue-600">75%</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Tools & Others</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Git</span>
                  <span className="text-blue-600">90%</span>
                </div>
                <div className="flex justify-between">
                  <span>AWS</span>
                  <span className="text-blue-600">75%</span>
                </div>
                <div className="flex justify-between">
                  <span>Docker</span>
                  <span className="text-blue-600">80%</span>
                </div>
                <div className="flex justify-between">
                  <span>CI/CD</span>
                  <span className="text-blue-600">85%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-blue-600 mr-3">📧</span>
                  <span>shubham.kumar@email.com</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 mr-3">📱</span>
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 mr-3">📍</span>
                  <span>Delhi, India</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 mr-3">💼</span>
                  <span>LinkedIn: /in/shubham-kumar</span>
                </div>
              </div>
            </div>
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                {submitStatus === 'success' && (
                  <p className="text-green-600 text-center">Message sent successfully!</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-600 text-center">Failed to send message. Please try again.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Shubham Kumar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
