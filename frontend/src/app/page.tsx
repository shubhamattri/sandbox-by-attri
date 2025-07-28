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
              <a href="#awards" className="text-gray-700 hover:text-blue-600">Awards</a>
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
            <p className="text-xl mb-8">Senior Software Engineer & Tech Leader with 5+ years of experience</p>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <p className="text-lg mb-8">IIT Delhi Graduate | Full-Stack Developer | GitHub Copilot SPOC | Award-Winning Professional</p>
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
                I'm a senior software engineer and tech leader with over 5 years of experience in full-stack development, 
                cloud solutions, and team leadership. I graduated from IIT Delhi with a strong foundation in computer science 
                and have led high-performing teams of 5+ engineers.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                I specialize in modern technologies including MEAN stack, Azure cloud solutions, and AI/ML applications. 
                As a GitHub Copilot SPOC, I've driven adoption for 30+ engineers and delivered knowledge transfer sessions 
                on architecture, clean code, and performance optimization.
              </p>
              <p className="text-lg text-gray-700">
                I've received multiple awards including "Star of the Quarter" for leading critical modernization projects 
                and have been recognized for delivery excellence and platform leadership. I'm passionate about mentoring, 
                legacy system modernization, and building scalable, secure applications.
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
              <h3 className="text-xl font-semibold mb-2">Senior Software Engineer & Tech Leader</h3>
              <p className="text-blue-600 mb-2">Societe Generale • 2022 - Present</p>
              <ul className="text-gray-700 space-y-2">
                <li>• Led high-performing team of 5 engineers, focusing on scalable, secure, testable delivery</li>
                <li>• Drove GitHub Copilot adoption as SPOC for 30+ engineers across the organization</li>
                <li>• Provided 1:1 mentorship on architecture, clean code, and performance optimization</li>
                <li>• Served as SME for legacy UC4 + PL/SQL systems, managing production support and incident resolution</li>
                <li>• Conducted design reviews and steered roadmap for legacy decomposition</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Software Engineer</h3>
              <p className="text-blue-600 mb-2">Capgemini • 2020 - 2022</p>
              <ul className="text-gray-700 space-y-2">
                <li>• Developed and maintained enterprise-level applications using modern technologies</li>
                <li>• Collaborated with cross-functional teams in agile environment</li>
                <li>• Implemented CI/CD pipelines and automated testing procedures</li>
                <li>• Contributed to knowledge transfer sessions and technical workshops</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">MEAN Stack Developer</h3>
              <p className="text-blue-600 mb-2">TheRightDoctors, Hyderabad • May 2019 - July 2019</p>
              <ul className="text-gray-700 space-y-2">
                <li>• Created Single Sign-on layer for 7 platforms using JSON Web Tokens</li>
                <li>• Redesigned storage structures for web platforms in MySQL</li>
                <li>• Built platform for Public Relationship Teams with Razorpay integration</li>
                <li>• Designed complex archiving architecture for videos/audios</li>
                <li>• Implemented social media buttons and weekly scheduler functionality</li>
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
            <p className="text-blue-600 mb-2">Bachelor of Technology in Computer Science & Engineering</p>
            <p className="text-gray-600 mb-4">2016 - 2020</p>
            <p className="text-gray-700">
              Graduated with distinction. Specialized in algorithms, data structures, and software engineering. 
              Completed research projects in AI/ML including Atari Breakout CNN model and Yinsh AI-Bot development.
            </p>
          </div>
        </div>
      </section>

      {/* Awards & Recognition Section */}
      <section id="awards" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Awards & Recognition</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold mb-2">Star of the Quarter</h3>
              <p className="text-blue-600 mb-2">2024</p>
              <p className="text-gray-700">For leading critical modernization and cross-border project execution</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-semibold mb-2">Selected for SA Role in Paris</h3>
              <p className="text-blue-600 mb-2">2023</p>
              <p className="text-gray-700">In recognition of delivery excellence, client collaboration, and platform leadership</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Award for Value of Commitment & Responsibility</h3>
              <p className="text-blue-600 mb-2">2022</p>
              <p className="text-gray-700">For delivering deadline-driven projects without delay</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Full-Stack & Cloud</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>MEAN Stack</span>
                  <span className="text-blue-600">95%</span>
                </div>
                <div className="flex justify-between">
                  <span>Microsoft Azure</span>
                  <span className="text-blue-600">90%</span>
                </div>
                <div className="flex justify-between">
                  <span>React.js</span>
                  <span className="text-blue-600">85%</span>
                </div>
                <div className="flex justify-between">
                  <span>Node.js</span>
                  <span className="text-blue-600">90%</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Data & AI/ML</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Spark & Hadoop</span>
                  <span className="text-blue-600">85%</span>
                </div>
                <div className="flex justify-between">
                  <span>PL/SQL</span>
                  <span className="text-blue-600">90%</span>
                </div>
                <div className="flex justify-between">
                  <span>PyTorch</span>
                  <span className="text-blue-600">80%</span>
                </div>
                <div className="flex justify-between">
                  <span>CNN Models</span>
                  <span className="text-blue-600">75%</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Leadership & Tools</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>GitHub Copilot</span>
                  <span className="text-blue-600">95%</span>
                </div>
                <div className="flex justify-between">
                  <span>Team Leadership</span>
                  <span className="text-blue-600">90%</span>
                </div>
                <div className="flex justify-between">
                  <span>Legacy Modernization</span>
                  <span className="text-blue-600">85%</span>
                </div>
                <div className="flex justify-between">
                  <span>Mentorship</span>
                  <span className="text-blue-600">90%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Certifications</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-3xl mb-4">🎓</div>
              <h3 className="text-lg font-semibold mb-2">GitHub Copilot SPOC Enablement Program</h3>
              <p className="text-blue-600 mb-2">Capgemini, 2024</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-3xl mb-4">☁️</div>
              <h3 className="text-lg font-semibold mb-2">Microsoft AZ-204: Developing Solutions for Microsoft Azure</h3>
              <p className="text-blue-600 mb-2">Microsoft</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-lg font-semibold mb-2">Data Engineering Level 2</h3>
              <p className="text-blue-600 mb-2">Societe Generale, 2023</p>
              <p className="text-sm text-gray-600">Spark, Hadoop & ADLS</p>
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
