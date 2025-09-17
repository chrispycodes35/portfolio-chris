import React from 'react'
import ParticlesWrapper from './ParticlesWrapper'

export const metadata = {
  title: 'Projects',
  description: 'Explore Christopher O. Lopez\'s projects organized by category: Full Stack, ML/AI, Data Engineering, and more.',
}

export default function Page() {
  return (
    <section className="relative space-y-8">
      <ParticlesWrapper />
      <h1 className="font-semibold text-3xl mb-8 tracking-tight">Projects by Category</h1>
      
      {/* Full Stack Development */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold border-b border-neutral-200 dark:border-neutral-700 pb-2 text-blue-600 dark:text-blue-400">
          🚀 Full Stack Development
        </h2>
        
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
          {/* SpotVisit */}
          <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:bg-neutral-50/60 dark:hover:bg-neutral-800/40">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">SpotVisit</h3>
                <a 
                  href="https://explorer-blue-three.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium text-sm"
                >
                  Live Demo →
                </a>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400">
                Travel planning and spot organization platform with interactive maps, spot management, and trip planning capabilities.
              </p>
              <div className="space-y-2">
                <h4 className="font-medium text-neutral-800 dark:text-neutral-200">Key Features:</h4>
                <ul className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                  <li>🗺️ Interactive Map - Visualize all your saved spots</li>
                  <li>📍 Spot Management - Organize and categorize places</li>
                  <li>➕ Add New Spots - Geolocation, photos, and notes</li>
                  <li>✈️ Trip Planning - Create itineraries and share</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded">Next.js</span>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded">React</span>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded">Maps API</span>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded">Geolocation</span>
              </div>
            </div>
          </div>

          {/* MusiCal */}
          
          <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:bg-neutral-50/60 dark:hover:bg-neutral-800/40">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">MusiCal</h3>
                <a 
                  href="https://www.loom.com/share/35a9dfa14eb94efd806c78ab41f2abc7?sid=29d69594-7328-4961-9182-aebb653bb04a" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium text-sm"
                >
                  Video Demo →
                </a>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400">
                Full-stack music discovery web app with Spotify API integration, user authentication, and personalized experiences.
              </p>

              <div className="space-y-2">
                <h4 className="font-medium text-neutral-800 dark:text-neutral-200">Key Features:</h4>
                <ul className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                  <li>🎵 Music Discovery - Find new artists and tracks</li>
                  <li>🔐 User Authentication - Secure user sessions</li>
                  <li>📱 Responsive Design - Works on all devices</li>
                  <li>🎨 Modern UI/UX - Beautiful, intuitive interface</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs px-2 py-1 rounded">Python</span>
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs px-2 py-1 rounded">Flask</span>
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs px-2 py-1 rounded">React</span>
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs px-2 py-1 rounded">Spotify API</span>
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs px-2 py-1 rounded">Firebase</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Machine Learning & AI */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold border-b border-neutral-200 dark:border-neutral-700 pb-2 text-green-600 dark:text-green-400">
          🤖 Machine Learning & AI
        </h2>
        
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
          {/* Uncover */}
          <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:bg-neutral-50/60 dark:hover:bg-neutral-800/40">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">Uncover</h3>
                <a 
                  href="https://uncover-25f167a1.base44.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium text-sm"
                >
                  Live Demo →
                </a>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400">
                AI-powered cognitive analysis tool that helps understand thinking patterns through journaling and provides personalized insights.
              </p>
              <div className="space-y-2">
                <h4 className="font-medium text-neutral-800 dark:text-neutral-200">Core Features:</h4>
                <ul className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                  <li>🧠 Journal Entry Analysis</li>
                  <li>🔍 Pattern Recognition</li>
                  <li>💡 Actionable Insights</li>
                  <li>📊 Progress Tracking</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded">AI Analysis</span>
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded">NLP</span>
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded">Cognitive Therapy</span>
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded">UX Design</span>
              </div>
            </div>
          </div>

          {/* Spam/Ham Classification */}
          <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:bg-neutral-50/60 dark:hover:bg-neutral-800/40">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Spam/Ham Classification</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Logistic regression model for spam classification with 89% training accuracy using NLP techniques and feature engineering.
              </p>
              <div className="space-y-2">
                <h4 className="font-medium text-neutral-800 dark:text-neutral-200">Key Features:</h4>
                <ul className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                  <li>📧 Email Text Analysis</li>
                  <li>🔍 Feature Engineering</li>
                  <li>📊 89% Training Accuracy</li>
                  <li>📉 PCA Dimensionality Reduction</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded">Python</span>
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded">Scikit-learn</span>
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded">NLP</span>
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded">PCA</span>
              </div>
            </div>
          </div>

          {/* PyTorch Image Classification */}
          <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:bg-neutral-50/60 dark:hover:bg-neutral-800/40">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">PyTorch Image Classification</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Neural network training workflows for image classification using PyTorch fundamentals on the MNIST handwritten dataset.
              </p>
              <div className="space-y-2">
                <h4 className="font-medium text-neutral-800 dark:text-neutral-200">Key Features:</h4>
                <ul className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                  <li>🖼️ MNIST Dataset Processing</li>
                  <li>🧠 Neural Network Training</li>
                  <li>⚡ Autograd & Tensors</li>
                  <li>📊 Model Building Abstractions</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded">Python</span>
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded">PyTorch</span>
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded">Neural Networks</span>
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded">Computer Vision</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Data Engineering & Analysis */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold border-b border-neutral-200 dark:border-neutral-700 pb-2 text-orange-600 dark:text-orange-400">
          📊 Data Engineering & Analysis
        </h2>
        
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
          {/* Cook County Housing Project */}
          <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:bg-neutral-50/60 dark:hover:bg-neutral-800/40">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Cook County Housing Project</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Linear regression model to predict housing prices and analyze disparities in property taxes between socioeconomic groups.
              </p>
              <div className="space-y-2">
                <h4 className="font-medium text-neutral-800 dark:text-neutral-200">Key Features:</h4>
                <ul className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                  <li>🏠 Housing Price Prediction</li>
                  <li>📈 Linear Regression Model</li>
                  <li>📊 Data Visualizations</li>
                  <li>🔍 Socioeconomic Analysis</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-xs px-2 py-1 rounded">Python</span>
                <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-xs px-2 py-1 rounded">Pandas</span>
                <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-xs px-2 py-1 rounded">NumPy</span>
                <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-xs px-2 py-1 rounded">Scikit-learn</span>
                <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-xs px-2 py-1 rounded">Matplotlib</span>
              </div>
            </div>
          </div>

          {/* Wordnet Google Ngram */}
          <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:bg-neutral-50/60 dark:hover:bg-neutral-800/40">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Wordnet (Google Ngram)</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Java-based visualization tool for tracking word usage trends over decades in the Google Ngram dataset with hyponym analysis.
              </p>
              <div className="space-y-2">
                <h4 className="font-medium text-neutral-800 dark:text-neutral-200">Key Features:</h4>
                <ul className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                  <li>📈 Word Usage Trends</li>
                  <li>🕒 Historical Data Analysis</li>
                  <li>🔍 Hyponym Analysis</li>
                  <li>📊 Data Visualization</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-xs px-2 py-1 rounded">Java</span>
                <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-xs px-2 py-1 rounded">Google Ngram</span>
                <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-xs px-2 py-1 rounded">Data Visualization</span>
                <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-xs px-2 py-1 rounded">Linguistics</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Design & UX */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold border-b border-neutral-200 dark:border-neutral-700 pb-2 text-pink-600 dark:text-pink-400">
          🎨 Design & UX
        </h2>
        
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
          {/* NumisToken UX Work */}
          <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:bg-neutral-50/60 dark:hover:bg-neutral-800/40">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">NumisToken Marketplace UX</h3>
                <a 
                  href="https://www.loom.com/share/9300e25eb2424159a12e7e71513898c0?sid=d8c40de1-c923-4042-9d0f-c8bdf8be0614" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium text-sm"
                >
                  Video Demo →
                </a>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400">
                Designed and engineered UI prototypes for an online marketplace using Figma, focusing on functionality and consistency across platforms.
              </p>
              <div className="space-y-2">
                <h4 className="font-medium text-neutral-800 dark:text-neutral-200">Key Features:</h4>
                <ul className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                  <li>🎨 UI/UX Prototyping</li>
                  <li>📱 Cross-Platform Design</li>
                  <li>🔧 Frontend Development</li>
                  <li>📋 Agile Development</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 text-xs px-2 py-1 rounded">Figma</span>
                <span className="bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 text-xs px-2 py-1 rounded">React</span>
                <span className="bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 text-xs px-2 py-1 rounded">Tailwind CSS</span>
                <span className="bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 text-xs px-2 py-1 rounded">UX Design</span>
              </div>
            </div>
          </div>

          {/* Bear Market - Design Project */}
          <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:bg-neutral-50/60 dark:hover:bg-neutral-800/40">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">Bear Market</h3>
                <a 
                  href="https://youtu.be/F7JLPdgXU5U" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium text-sm"
                >
                  Video Demo →
                </a>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400">
                Design-focused team project building a safer, student-verified marketplace for UC Berkeley. Collaborated in a team of four to research, ideate, prototype, and test an e-commerce platform tailored to college move-in/out needs.
              </p>
              <div className="space-y-2">
                <h4 className="font-medium text-neutral-800 dark:text-neutral-200">Highlights:</h4>
                <ul className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                  <li>🔐 Student Verification & Safety-first flows</li>
                  <li>🧭 Familiar marketplace patterns with Berkeley branding</li>
                  <li>🧪 Interviews & Think-aloud usability testing</li>
                  <li>🗂️ Structured design document and presentation</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 text-xs px-2 py-1 rounded">UX Design</span>
                <span className="bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 text-xs px-2 py-1 rounded">User Research</span>
                <span className="bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 text-xs px-2 py-1 rounded">Prototyping</span>
                <span className="bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 text-xs px-2 py-1 rounded">Figma</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
