import React from 'react'
import ParticlesWrapper from './ParticlesWrapper'
import { FeaturedProjectCard } from '../components/featured-project-card'

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
          <FeaturedProjectCard
            title="SpotVisit"
            category="Full Stack"
            description="Travel planning and spot organization platform with interactive maps, spot management, and trip planning capabilities."
            technologies={["Next.js", "React", "Maps API", "Geolocation"]}
            demoLink="https://explorer-blue-three.vercel.app"
            demoText="Live Demo →"
            keyFeatures={[
              "🗺️ Interactive Map - Visualize all your saved spots",
              "📍 Spot Management - Organize and categorize places",
              "➕ Add New Spots - Geolocation, photos, and notes",
              "✈️ Trip Planning - Create itineraries and share"
            ]}
            index={0}
          />

          <FeaturedProjectCard
            title="MusiCal"
            category="Full Stack"
            description="Full-stack music discovery web app with Spotify API integration, user authentication, and personalized experiences."
            technologies={["Python", "Flask", "React", "Spotify API", "Firebase"]}
            demoLink="https://www.loom.com/share/35a9dfa14eb94efd806c78ab41f2abc7?sid=29d69594-7328-4961-9182-aebb653bb04a"
            demoText="Video Demo →"
            keyFeatures={[
              "🎵 Music Discovery - Find new artists and tracks",
              "🔐 User Authentication - Secure user sessions",
              "📱 Responsive Design - Works on all devices",
              "🎨 Modern UI/UX - Beautiful, intuitive interface"
            ]}
            index={1}
          />

          <FeaturedProjectCard
            title="Tele-Rehab"
            category="Full Stack"
            description="Healthcare-focused web application with comprehensive performance optimization, type safety, and accessibility compliance."
            technologies={["Next.js 15", "TypeScript", "React", "Vercel", "WCAG 2.1"]}
            demoLink="https://tele-rehab-proto.vercel.app/"
            demoText="Live Demo →"
            keyFeatures={[
              "⚡ 100% Lighthouse Performance Score",
              "🔒 100% TypeScript Coverage with Strict Type Checking",
              "📱 Seamless Responsive Design Across All Devices",
              "♿ WCAG 2.1 Compliant Components",
              "🚀 Production Ready with Zero Build Errors"
            ]}
            featuresTitle="Technical Achievements:"
            index={11}
          />
        </div>
      </div>

      {/* Machine Learning & AI */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold border-b border-neutral-200 dark:border-neutral-700 pb-2 text-green-600 dark:text-green-400">
          🤖 Machine Learning & AI
        </h2>
        
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
          <FeaturedProjectCard
            title="Uncover"
            category="AI/ML"
            description="AI-powered cognitive analysis tool that helps understand thinking patterns through journaling and provides personalized insights."
            technologies={["AI Analysis", "NLP", "Cognitive Therapy", "UX Design"]}
            demoLink="https://uncover-25f167a1.base44.app"
            demoText="Live Demo →"
            keyFeatures={[
              "🧠 Journal Entry Analysis",
              "🔍 Pattern Recognition",
              "💡 Actionable Insights",
              "📊 Progress Tracking"
            ]}
            featuresTitle="Core Features:"
            index={11}
          />

          <FeaturedProjectCard
            title="Spam/Ham Classification"
            category="AI/ML"
            description="Logistic regression model for spam classification with 89% training accuracy using NLP techniques and feature engineering."
            technologies={["Python", "Scikit-learn", "NLP", "PCA"]}
            demoLink="#"
            demoText=""
            keyFeatures={[
              "📧 Email Text Analysis",
              "🔍 Feature Engineering",
              "📊 89% Training Accuracy",
              "📉 PCA Dimensionality Reduction"
            ]}
            index={11}
          />

          <FeaturedProjectCard
            title="PyTorch Image Classification"
            category="AI/ML"
            description="Neural network training workflows for image classification using PyTorch fundamentals on the MNIST handwritten dataset."
            technologies={["Python", "PyTorch", "Neural Networks", "Computer Vision"]}
            demoLink="#"
            demoText=""
            keyFeatures={[
              "🖼️ MNIST Dataset Processing",
              "🧠 Neural Network Training",
              "⚡ Autograd & Tensors",
              "📊 Model Building Abstractions"
            ]}
            index={11}
          />
        </div>
      </div>

      {/* Data Engineering & Analysis */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold border-b border-neutral-200 dark:border-neutral-700 pb-2 text-purple-600 dark:text-purple-400">
          📊 Data Engineering & Analysis
        </h2>
        
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
          <FeaturedProjectCard
            title="IMDB Analysis Project"
            category="Data Science"
            description="Built SQL views and queries to analyze IMDB actor/cast tables, focusing on role counts by actor."
            technologies={["SQL", "Database Design", "Data Analysis", "IMDB Dataset"]}
            demoLink="#"
            demoText=""
            keyFeatures={[
              "🗄️ Database Schema Exploration",
              "🔗 Inner/Outer Joins",
              "📊 Data Aggregation & Ranking",
              "👥 Actor Role Analysis"
            ]}
            index={11}
          />

          <FeaturedProjectCard
            title="Spam Email Classification"
            category="Data Science"
            description="Developed a text classification model using logistic regression to distinguish spam emails from good emails."
            technologies={["Python", "Scikit-learn", "NLP", "Logistic Regression"]}
            demoLink="#"
            demoText=""
            keyFeatures={[
              "📧 Email Text Analysis",
              "🔍 Feature Engineering",
              "📊 >90% Classification Accuracy",
              "⚙️ Hyperparameter Tuning"
            ]}
            index={11}
          />

          <FeaturedProjectCard
            title="Cook County Housing Project"
            category="Data Science"
            description="Developed a predictive model using Pandas, NumPy, and Scikit-learn to predict housing prices and analyze disparities in property taxes between socioeconomic groups."
            technologies={["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"]}
            demoLink="#"
            demoText=""
            keyFeatures={[
              "🏠 Housing Price Prediction",
              "📈 Linear Regression Model",
              "📊 Data Visualizations",
              "🔍 Socioeconomic Analysis"
            ]}
            index={11}
          />

          <FeaturedProjectCard
            title="Wordnet (Google Ngram)"
            category="Data Science"
            description="Java-based visualization tool for tracking word usage trends over decades in the Google Ngram dataset with hyponym analysis."
            technologies={["Java", "Google Ngram", "Data Visualization", "Linguistics"]}
            demoLink="#"
            demoText=""
            keyFeatures={[
              "📈 Word Usage Trends",
              "🕒 Historical Data Analysis",
              "🔍 Hyponym Analysis",
              "📊 Data Visualization"
            ]}
            index={11}
          />
        </div>
      </div>

      {/* Design & UX */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold border-b border-neutral-200 dark:border-neutral-700 pb-2 text-pink-600 dark:text-pink-400">
          🎨 Design & UX
        </h2>
        
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
          <FeaturedProjectCard
            title="NumisToken"
            category="Design"
            description="Designed and engineered UI prototypes for an online marketplace using Figma, focusing on functionality and consistency across platforms."
            technologies={["Figma", "React", "Tailwind CSS", "UX Design"]}
            demoLink="https://www.loom.com/share/9300e25eb2424159a12e7e71513898c0?sid=d8c40de1-c923-4042-9d0f-c8bdf8be0614"
            demoText="Video Demo →"
            keyFeatures={[
              "🎨 UI/UX Prototyping",
              "📱 Cross-Platform Design",
              "🔧 Frontend Development",
              "📋 Agile Development"
            ]}
            index={11}
          />

          <FeaturedProjectCard
            title="Bear Market"
            category="Design"
            description="Design-focused team project building a safer, student-verified marketplace for UC Berkeley. Collaborated in a team of four to research, ideate, prototype, and test an e-commerce platform tailored to college move-in/out needs."
            technologies={["UX Design", "User Research", "Prototyping", "Figma"]}
            demoLink="https://youtu.be/F7JLPdgXU5U"
            demoText="Video Demo →"
            keyFeatures={[
              "🔐 Student Verification & Safety-first flows",
              "🧭 Familiar marketplace patterns with Berkeley branding",
              "🧪 Interviews & Think-aloud usability testing",
              "🗂️ Structured design document and presentation"
            ]}
            featuresTitle="Highlights:"
            index={11}
          />
        </div>
      </div>
    </section>
  )
}
