export const metadata = {
  title: 'Projects',
  description: 'Explore Christopher O. Lopez\'s current projects in data science, web development, and AI.',
}

export default function Page() {
  return (
    <section className="space-y-8">
      <h1 className="font-semibold text-3xl mb-8 tracking-tight">Current Projects</h1>
      
      <div className="space-y-8">
        {/* SpotVisit Project */}
        <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 hover:shadow-md transition-shadow">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">SpotVisit</h2>
              <a 
                href="https://explorer-blue-three.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                Live Demo →
              </a>
            </div>
            <p className="text-lg text-neutral-700 dark:text-neutral-300">
              Discover & Organize Your World
            </p>
            <p className="text-neutral-600 dark:text-neutral-400">
              SpotVisit helps you save, organize, and plan your favorite places around the world. From hidden gems to bucket list destinations, never lose track of where you want to go.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="space-y-2">
                <h3 className="font-medium text-neutral-800 dark:text-neutral-200">Key Features:</h3>
                <ul className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                  <li>🗺️ Interactive Map - Visualize all your saved spots</li>
                  <li>📍 Spot Management - Organize and categorize places</li>
                  <li>➕ Add New Spots - Geolocation, photos, and notes</li>
                  <li>✈️ Trip Planning - Create itineraries and share</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium text-neutral-800 dark:text-neutral-200">Tech Stack:</h3>
                <ul className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                  <li>• Next.js & React</li>
                  <li>• Interactive Maps</li>
                  <li>• Geolocation Services</li>
                  <li>• Modern UI/UX Design</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Uncover Project */}
        <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 hover:shadow-md transition-shadow">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Uncover</h2>
              <a 
                href="https://thoughtpatterns.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                Live Demo →
              </a>
            </div>
            <p className="text-lg text-neutral-700 dark:text-neutral-300">
              Cognitive Analysis Tool for Mental Wellness
            </p>
            <p className="text-neutral-600 dark:text-neutral-400">
              Uncover is a cognitive analysis tool designed to help you understand your thinking patterns and develop healthier mental habits through journaling and AI-powered insights.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="space-y-2">
                <h3 className="font-medium text-neutral-800 dark:text-neutral-200">Core Features:</h3>
                <ul className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                  <li>🧠 Journal Entry Analysis</li>
                  <li>🔍 Pattern Recognition</li>
                  <li>💡 Actionable Insights</li>
                  <li>📊 Progress Tracking</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium text-neutral-800 dark:text-neutral-200">Technology:</h3>
                <ul className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                  <li>• AI-Powered Analysis</li>
                  <li>• Cognitive Behavioral Therapy</li>
                  <li>• Natural Language Processing</li>
                  <li>• User Experience Design</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* MusiCal Project */}
        <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 hover:shadow-md transition-shadow">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">MusiCal</h2>
            <p className="text-lg text-neutral-700 dark:text-neutral-300">
              Full-Stack Music Discovery Web App
            </p>
            <p className="text-neutral-600 dark:text-neutral-400">
              Built a comprehensive music discovery platform using Python, Flask, React, and Tailwind CSS. Integrated Spotify API and Firebase for real-time data, secure user sessions, and personalized experiences.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="space-y-2">
                <h3 className="font-medium text-neutral-800 dark:text-neutral-200">Features:</h3>
                <ul className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                  <li>🎵 Music Discovery</li>
                  <li>🔐 User Authentication</li>
                  <li>📱 Responsive Design</li>
                  <li>🎨 Modern UI/UX</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium text-neutral-800 dark:text-neutral-200">Tech Stack:</h3>
                <ul className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                  <li>• Python & Flask</li>
                  <li>• React & Tailwind CSS</li>
                  <li>• Spotify API Integration</li>
                  <li>• Firebase Backend</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
