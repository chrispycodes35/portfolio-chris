import { BlogPosts } from 'app/components/posts'

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

      {/* Projects */}
      <div>
        <h2 className="text-2xl font-semibold mb-4 border-b border-neutral-200 dark:border-neutral-700 pb-2">PROJECTS</h2>
        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-start">
              <div className="font-semibold">MusiCal | Project Manager / Developer</div>
              <div className="text-neutral-600 dark:text-neutral-400 text-sm">September 2024 - Dec 2024</div>
            </div>
            <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
              <li>Built a full-stack music discovery web app using Python, Flask, React, and Tailwind CSS, and prototyping with Figma; integrated Spotify API and Firebase for real-time data, secure user sessions, and personalized experiences</li>
              <li>Led a 12-person team, overseeing UI design, backend architecture, and deployment of a functional prototype</li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between items-start">
              <div className="font-semibold">Spam/Ham Classification | Python</div>
              <div className="text-neutral-600 dark:text-neutral-400 text-sm">December 2024</div>
            </div>
            <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
              <li>Developed a logistic regression model for spam classification with 89% training accuracy, using feature engineering, NLP techniques to analyze email text, and PCA for dimensionality reduction</li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between items-start">
              <div className="font-semibold">Cook County Housing Project | Python</div>
              <div className="text-neutral-600 dark:text-neutral-400 text-sm">November 2024</div>
            </div>
            <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
              <li>Developed a linear regression model using Pandas, NumPy, and Scikit-learn to predict housing prices. Created data visualizations to gain insight into the cause of disparities in property taxes between socioeconomic groups</li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between items-start">
              <div className="font-semibold">Wordnet (Google Ngram) | Java</div>
              <div className="text-neutral-600 dark:text-neutral-400 text-sm">October 2023</div>
            </div>
            <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
              <li>Developed a Java-based visualization tool for tracking word usage trends over decades in the Google Ngram dataset; introduced an innovative feature for analyzing hyponyms</li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between items-start">
              <div className="font-semibold">PyTorch for Image Classification | Python</div>
              <div className="text-neutral-600 dark:text-neutral-400 text-sm">February 2023</div>
            </div>
            <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
              <li>Gained exposure to PyTorch fundamentals through implementing neural network training workflows, learning about tensors, autograd, and model-building abstractions for image classification tasks (MNIST handwritten dataset).</li>
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

      {/* Blog Section */}
      <div className="my-8">
        <h2 className="text-2xl font-semibold mb-4 border-b border-neutral-200 dark:border-neutral-700 pb-2">Blog Posts</h2>
        <BlogPosts />
      </div>
    </section>
  )
}
