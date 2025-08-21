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
              <div className="text-neutral-600 dark:text-neutral-400 text-sm">January 2025 - Present</div>
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

      {/* Projects Section */}
      <div className="my-8">
        <h2 className="text-2xl font-semibold mb-4 border-b border-neutral-200 dark:border-neutral-700 pb-2">FEATURED PROJECTS</h2>
        <div className="space-y-4">
          <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-lg">SpotVisit</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Travel planning and spot organization platform</p>
              </div>
              <a 
                href="https://explorer-blue-three.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
              >
                View Project →
              </a>
            </div>
          </div>
          
          <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-lg">Uncover</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">AI-powered cognitive analysis tool</p>
              </div>
              <a 
                href="https://thoughtpatterns.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
              >
                View Project →
              </a>
            </div>
          </div>
          
          <div className="text-center">
            <a 
              href="/projects" 
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              View All Projects →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
