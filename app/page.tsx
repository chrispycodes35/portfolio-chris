'use client'

import { motion } from 'framer-motion'
import ParticleBackground from './components/particles'
import FluidMotion, { StaggeredMotion, StaggeredItem } from './components/fluid-motion'

export default function Page() {
  return (
    <div className="relative min-h-screen">
      {/* Background Effects */}
      <ParticleBackground />
      
      {/* Main Content */}
      <section className="relative z-20 space-y-8 p-6">
      {/* Header */}
      <FluidMotion>
        <div className="space-y-4">
          <motion.h1 
            className="text-4xl font-bold tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Christopher O. Lopez
          </motion.h1>
          <div className="text-neutral-600 dark:text-neutral-400 space-y-1">
            <p>Berkeley, CA 94704 | chris.osw.lopez@berkeley.edu | <a href="https://github.com/chrispycodes35">github.com/chrispycodes35</a></p>
          </div>
        </div>
      </FluidMotion>

      {/* Education */}
      <StaggeredMotion>
        <StaggeredItem>
          <div>
            <h2 className="text-2xl font-semibold mb-4 border-b border-neutral-200 dark:border-neutral-700 pb-2">EDUCATION & COURSEWORK</h2>
            <div className="space-y-2">
              <div className="font-semibold">University of California, Berkeley</div>
              <div className="text-neutral-600 dark:text-neutral-400">Expected Graduation: May 2026</div>
              <div className="font-medium">Double Major: B.A. Data Science, B.A. Cognitive Science</div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">
                Relevant Coursework: Data Engineering, Artificial Intelligence, Data Structures & Algorithms, Principles & Techniques of Data Science, Probability for Data Science
              </div>
            </div>
          </div>
        </StaggeredItem>
      </StaggeredMotion>

      {/* Work Experience */}
      <StaggeredMotion>
        <StaggeredItem>
          <div>
            <h2 className="text-2xl font-semibold mb-4 border-b border-neutral-200 dark:border-neutral-700 pb-2">WORK EXPERIENCE</h2>
            <div className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.02, x: 5 }}
                transition={{ duration: 0.2 }}
                className="p-4 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div className="font-semibold">Aeolus Labs | Software Intern</div>
                  <div className="text-neutral-600 dark:text-neutral-400 text-sm">August 2025 - Present</div>
                </div>
                <div className="flex justify-between items-start">
                  <div className="font-thin">Thiel Fellowship backed climate-tech startup focused on early prevention of hurricanes</div>
                </div>
                <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                  <li>Developed a script to ingest spending data and automate burn sheet creation.</li>
                  <li>Building internal analytical tools to provide insights into spending and more.</li>
                </ul>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, x: 5 }}
                transition={{ duration: 0.2 }}
                className="p-4 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div className="font-semibold">FreshX | Data Science Intern</div>
                  <div className="text-neutral-600 dark:text-neutral-400 text-sm">January 2025 - May 2025</div>
                </div>
                <div className="flex justify-between items-start">
                  <div className="font-thin">SkyDeck-backed startup focused on becoming an online marketplace for the fresh produce industry</div>
                </div>
                <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                  <li>Cut base MAPE from ~25% to 6–7% on unseen data by building NeuralProphet pipelines with weather regressors and feature engineering.</li>
                  <li>Built production ETL in Python/SQL: USDA + Meteostat ingestion, idempotent upserts to MySQL, aggregation tables, and a cleaned prices materialization with a versioned schema.</li>
                </ul>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, x: 5 }}
                transition={{ duration: 0.2 }}
                className="p-4 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div className="font-semibold">NumisToken | Software Engineer</div>
                  <div className="text-neutral-600 dark:text-neutral-400 text-sm">September 2024 - December 2024</div>
                </div>
                <div className="flex justify-between items-start">
                  <div className="font-thin">Early-stage student-led antique trading coin marketplace
                  </div>
                </div>
                <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                  <li>Built marketplace core: search, client-side sort (price), pagination, and grid layouts; validated performance using large dummy datasets.</li>
                  <li>Implemented app foundation with reusable UI components; wired Privy auth and Firebase (Auth/Firestore/Storage) for secure sessions and data access.</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </StaggeredItem>
      </StaggeredMotion>

      {/* Skills & Interests */}
      <StaggeredMotion>
        <StaggeredItem>
          <div>
            <h2 className="text-2xl font-semibold mb-4 border-b border-neutral-200 dark:border-neutral-700 pb-2">SKILLS & INTERESTS</h2>
            <motion.div 
              className="space-y-2 text-sm p-4 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <p><span className="font-medium">Languages:</span> Python, JavaScript/TypeScript, Java, SQL</p>
              <p><span className="font-medium">Frameworks/Tools:</span> React, Next.js, Node.js, Express, Flask, Tailwind, MySQL, PostgreSQL, MongoDB, Git, scikit-learn, Pandas, Firebase, Cloudinary</p>
              <p><span className="font-medium">Visualization:</span> Matplotlib, Seaborn</p>
            </motion.div>
          </div>
        </StaggeredItem>
      </StaggeredMotion>

      {/* Featured Projects Section */}
      <StaggeredMotion>
        <StaggeredItem>
          <div className="my-8">
            <h2 className="text-2xl font-semibold mb-4 border-b border-neutral-200 dark:border-neutral-700 pb-2">FEATURED PROJECTS</h2>
            <div className="space-y-6">
              {/* SpotVisit */}
              <motion.div 
                className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 hover:shadow-lg transition-all duration-300"
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-3 flex-1">
                    <div className="flex items-center space-x-2">
                      <h3 className="font-semibold text-xl">SpotVisit</h3>
                      <motion.span 
                        className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-full"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        Full Stack
                      </motion.span>
                    </div>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      Travel planning and spot organization platform with interactive maps, spot management, and trip planning capabilities.
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs">
                      {["Next.js", "React", "Maps API", "Geolocation"].map((tech, index) => (
                        <motion.span 
                          key={tech}
                          className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.1, backgroundColor: "#3b82f6", color: "white" }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  <motion.a 
                    href="https://explorer-blue-three.vercel.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline font-medium ml-4"
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Live Demo →
                  </motion.a>
                </div>
              </motion.div>

              {/* Uncover */}
              <motion.div 
                className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 hover:shadow-lg transition-all duration-300"
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-3 flex-1">
                    <div className="flex items-center space-x-2">
                      <h3 className="font-semibold text-xl">Uncover</h3>
                      <motion.span 
                        className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded-full"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        AI/ML
                      </motion.span>
                    </div>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      AI-powered cognitive analysis tool that helps understand thinking patterns through journaling and provides personalized insights.
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs">
                      {["AI Analysis", "NLP", "Cognitive Therapy", "UX Design"].map((tech, index) => (
                        <motion.span 
                          key={tech}
                          className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.1, backgroundColor: "#10b981", color: "white" }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  <motion.a 
                    href="https://uncover-25f167a1.base44.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline font-medium ml-4"
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Live Demo →
                  </motion.a>
                </div>
              </motion.div>

              {/* MusiCal */}
              <motion.div 
                className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 hover:shadow-lg transition-all duration-300"
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-3 flex-1">
                    <div className="flex items-center space-x-2">
                      <h3 className="font-semibold text-xl">MusiCal</h3>
                      <motion.span 
                        className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs px-2 py-1 rounded-full"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        Full Stack
                      </motion.span>
                    </div>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      Full-stack music discovery web app with Spotify API integration, user authentication, and personalized experiences.
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs">
                      {["Python", "Flask", "React", "Spotify API", "Firebase"].map((tech, index) => (
                        <motion.span 
                          key={tech}
                          className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.1, backgroundColor: "#8b5cf6", color: "white" }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  <motion.a 
                    href="https://www.loom.com/share/35a9dfa14eb94efd806c78ab41f2abc7?sid=29d69594-7328-4961-9182-aebb653bb04a" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline font-medium ml-4"
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Video Demo →
                  </motion.a>
                </div>
              </motion.div>
              
              <motion.div 
                className="text-center pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <motion.a 
                  href="/projects" 
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-medium text-lg"
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View All Projects by Category →
                </motion.a>
              </motion.div>
            </div>
          </div>
        </StaggeredItem>
      </StaggeredMotion>
    </section>
    </div>
  )
}
