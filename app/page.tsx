'use client'

import { motion } from 'framer-motion'
import ParticleBackground from './components/particles'
import FluidMotion, { StaggeredMotion, StaggeredItem } from './components/fluid-motion'
import { FeaturedProjectCard } from './components/featured-project-card'

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
            <motion.div 
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.div 
                className="font-semibold text-xl"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                University of California, Berkeley
              </motion.div>
              <motion.div 
                className="text-neutral-600 dark:text-neutral-400"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Expected Graduation: May 2026
              </motion.div>
              <motion.div 
                className="font-medium"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Double Major: B.A. Data Science, B.A. Cognitive Science
              </motion.div>
              <motion.div 
                className="text-sm text-neutral-600 dark:text-neutral-400"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                Relevant Coursework: Data Engineering, Artificial Intelligence, Data Structures & Algorithms, Principles & Techniques of Data Science, Probability for Data Science
              </motion.div>
            </motion.div>
          </div>
        </StaggeredItem>
      </StaggeredMotion>

      {/* Work Experience */}
      <StaggeredMotion>
        <StaggeredItem>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-2xl font-semibold mb-4 border-b border-neutral-200 dark:border-neutral-700 pb-2">WORK EXPERIENCE</h2>
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                whileHover={{ scale: 1.02, x: 5 }}
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
                  <li>Developed a script that ingests spending data and automates burn sheet creation.</li>
                  <li>Building internal analytical tools to provide insights into finances and more.</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                whileHover={{ scale: 1.02, x: 5 }}
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
                  <li>Cut base mean average percentage error from ~25% to 6–7% on future produce prices by building NeuralProphet pipelines with weather regressors and feature engineering.
                  </li>
                  <li>Built production ETL in Python/SQL: USDA Produce Prices + Weather Data ingestion, idempotent upserts to MySQL, aggregation tables, and a cleaned prices materialization with a versioned schema.</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                whileHover={{ scale: 1.02, x: 5 }}
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
          </motion.div>
        </StaggeredItem>
      </StaggeredMotion>

      {/* Skills & Interests */}
      <StaggeredMotion>
        <StaggeredItem>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-2xl font-semibold mb-4 border-b border-neutral-200 dark:border-neutral-700 pb-2">SKILLS & INTERESTS</h2>
            <motion.div 
              className="space-y-2 text-sm p-4 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <span className="font-medium">Languages:</span> Python, JavaScript/TypeScript, Java, SQL
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <span className="font-medium">Frameworks/Tools:</span> React, Next.js, Node.js, Express, Flask, Tailwind, MySQL, PostgreSQL, MongoDB, Git, scikit-learn, Pandas, Firebase, Cloudinary
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <span className="font-medium">Visualization:</span> Matplotlib, Seaborn
              </motion.p>
            </motion.div>
          </motion.div>
        </StaggeredItem>
      </StaggeredMotion>

      {/* Featured Projects Section */}
      <StaggeredMotion>
        <StaggeredItem>
          <motion.div
            className="my-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-2xl font-semibold mb-4 border-b border-neutral-200 dark:border-neutral-700 pb-2">FEATURED PROJECTS</h2>
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <FeaturedProjectCard
                  title="SpotVisit"
                  category="Full Stack"
                  description="Travel planning and spot organization platform with interactive maps, spot management, and trip planning capabilities."
                  technologies={["Next.js", "React", "Maps API", "Geolocation"]}
                  demoLink="https://explorer-blue-three.vercel.app"
                  demoText="Live Demo →"
                  index={0}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <FeaturedProjectCard
                  title="Uncover"
                  category="AI/ML"
                  description="AI-powered cognitive analysis tool that helps understand thinking patterns through journaling and provides personalized insights."
                  technologies={["AI Analysis", "NLP", "Cognitive Therapy", "UX Design"]}
                  demoLink="https://uncover-25f167a1.base44.app"
                  demoText="Live Demo →"
                  index={1}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <FeaturedProjectCard
                  title="MusiCal"
                  category="Full Stack"
                  description="Full-stack music discovery web app with Spotify API integration, user authentication, and personalized experiences."
                  technologies={["Python", "Flask", "React", "Spotify API", "Firebase"]}
                  demoLink="https://www.loom.com/share/35a9dfa14eb94efd806c78ab41f2abc7?sid=29d69594-7328-4961-9182-aebb653bb04a"
                  demoText="Video Demo →"
                  index={2}
                />
              </motion.div>
              
              <motion.div 
                className="text-center pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
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
          </motion.div>
        </StaggeredItem>
      </StaggeredMotion>
    </section>
    </div>
  )
}
