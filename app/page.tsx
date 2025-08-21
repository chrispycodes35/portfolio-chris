export default function Page() {
  return (
    <section className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Christopher O. Lopez</h1>
        <div className="text-neutral-600 dark:text-neutral-400 space-y-1">
          <p>Berkeley, CA 94720 | chris.osw.lopez@berkeley.edu</p>
          <p>github.com/chrispycodes35 | (669) 327-1034</p>
        </div>
      </div>

      {/* Education */}
      <div>
        <h2 className="text-2xl font-semibold mb-4 border-b border-neutral-200 dark:border-neutral-700 pb-2">EDUCATION</h2>
        <div className="space-y-2">
          <div className="font-semibold">UNIVERSITY OF CALIFORNIA, BERKELEY</div>
          <div className="text-neutral-600 dark:text-neutral-400">Expected Graduation: May 2026</div>
          <div className="font-medium">Major: Data Science & Cognitive Science</div>
          <div className="text-sm text-neutral-600 dark:text-neutral-400">
            Relevant Coursework: Principles & Techniques of Data Science, Contexts & Ethics of Data, Artificial Intelligence, Data Structures and Algorithms, Linear Algebra, Discrete Math, and Probability for Data Science
          </div>
        </div>
      </div>

      {/* Work Experience */}
      <div>
        <h2 className="text-2xl font-semibold mb-4 border-b border-neutral-200 dark:border-neutral-700 pb-2">WORK EXPERIENCE</h2>
        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-start">
              <div className="font-semibold">FreshX | Data Science Intern</div>
              <div className="text-neutral-600 dark:text-neutral-400 text-sm">January 2025 - May 2025</div>
            </div>
            <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
              <li>Built and optimized commodity price forecasting models using NeuralProphet, enhancing accuracy through feature engineering and integration of external data (e.g., weather as lagged regressors)</li>
              <li>Automated data cleaning and preprocessing pipelines, connected forecasts to the backend database, and supported front-end integration.</li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between items-start">
              <div className="font-semibold">NumisToken | Front-End Developer / UX</div>
              <div className="text-neutral-600 dark:text-neutral-400 text-sm">September 2024 - February 2025</div>
            </div>
            <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
              <li>Developed a working prototype of an online marketplace using React, Tailwind, and other libraries, enhancing functionality and consistency across platforms under Agile practices. Engineered UI prototypes on Figma.</li>
              <li>Tracked team progress and prioritized feature development using Jira; managed version control and collaboration through Git, regularly committing and pushing updates during sprint cycles.</li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between items-start">
              <div className="font-semibold">Integem | Instructor</div>
              <div className="text-neutral-600 dark:text-neutral-400 text-sm">June 2024 - August 2024</div>
            </div>
            <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
              <li>Taught K–12 students programming fundamentals (functions, recursion, OOP) and introduced core AI/ML concepts like neural networks and model training. Mediated issues between students and provided learning support.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Skills & Interests */}
      <div>
        <h2 className="text-2xl font-semibold mb-4 border-b border-neutral-200 dark:border-neutral-700 pb-2">SKILLS & INTERESTS</h2>
        <div className="space-y-2 text-sm">
          <p><span className="font-medium">Programming:</span> Python, Java, JavaScript, SQL, MySQL</p>
          <p><span className="font-medium">Data Science & ML:</span> Pandas, NumPy, Scikit-Learn, NLP</p>
          <p><span className="font-medium">Visualization:</span> Matplotlib, Seaborn</p>
          <p><span className="font-medium">Tools:</span> Jupyter Notebooks, Git</p>
          <p><span className="font-medium">Languages:</span> Spanish</p>
        </div>
      </div>

      {/* Featured Projects Section */}
      <div className="my-8">
        <h2 className="text-2xl font-semibold mb-4 border-b border-neutral-200 dark:border-neutral-700 pb-2">FEATURED PROJECTS</h2>
        <div className="space-y-6">
          {/* SpotVisit */}
          <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="space-y-3 flex-1">
                <div className="flex items-center space-x-2">
                  <h3 className="font-semibold text-xl">SpotVisit</h3>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-full">Full Stack</span>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Travel planning and spot organization platform with interactive maps, spot management, and trip planning capabilities.
                </p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">Next.js</span>
                  <span className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">React</span>
                  <span className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">Maps API</span>
                  <span className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">Geolocation</span>
                </div>
              </div>
              <a 
                href="https://explorer-blue-three.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium ml-4"
              >
                Live Demo →
              </a>
            </div>
          </div>

          {/* Uncover */}
          <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="space-y-3 flex-1">
                <div className="flex items-center space-x-2">
                  <h3 className="font-semibold text-xl">Uncover</h3>
                  <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded-full">AI/ML</span>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400">
                  AI-powered cognitive analysis tool that helps understand thinking patterns through journaling and provides personalized insights.
                </p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">AI Analysis</span>
                  <span className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">NLP</span>
                  <span className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">Cognitive Therapy</span>
                  <span className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">UX Design</span>
                </div>
              </div>
              <a 
                href="https://thoughtpatterns.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium ml-4"
              >
                Live Demo →
              </a>
            </div>
          </div>

          {/* MusiCal */}
          <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="space-y-3 flex-1">
                <div className="flex items-center space-x-2">
                  <h3 className="font-semibold text-xl">MusiCal</h3>
                  <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs px-2 py-1 rounded-full">Full Stack</span>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Full-stack music discovery web app with Spotify API integration, user authentication, and personalized experiences.
                </p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">Python</span>
                  <span className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">Flask</span>
                  <span className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">React</span>
                  <span className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">Spotify API</span>
                  <span className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">Firebase</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center pt-4">
            <a 
              href="/projects" 
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-medium text-lg"
            >
              View All Projects by Category →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
