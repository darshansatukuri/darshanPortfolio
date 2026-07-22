import { useEffect, useRef, useState } from 'react'
import './App.css'
import About from './components/About/index.jsx'
import Contact from './components/Contact/index.jsx'
import Education from './components/Education/index.jsx'
import Footer from './components/Footer/index.jsx'
import Hero from './components/Hero/index.jsx'
import Navbar from './components/Navbar/index.jsx'
import Projects from './components/Projects/index.jsx'
import Resume from './components/Resume/index.jsx'
import Skills from './components/Skills/index.jsx'

const skillGroups = [
  {
    title: 'Frontend',
    items: ['React.js', 'HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication'],
  },
  {
    title: 'Database',
    items: ['MongoDB', 'SQL'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'Postman', 'VS Code', 'Render', 'Vercel'],
  },
]

const projects = [
  {
    title: 'AI Travel Planner',
    stack: 'React • Gemini API • JavaScript',
    image:'https://res.cloudinary.com/dmesipub7/image/upload/v1783875058/Screenshot_37_ygsgaz.png',
    description:
      'An AI-powered travel planner that generates personalized itineraries using Google Gemini API and responsive React UI.',
    features: [
      'AI-generated travel suggestions',
      'Trip planning experience',
      'Modern, mobile-friendly layout',
    ],
    live: ' https://ai-travell-planner-frontend-rx21.vercel.app/',
    github: 'https://github.com/darshansatukuri/AiTravellPlannerFrontend',
  },
  {
    title: 'Nxt Trendz',
    stack: 'React • REST API • JWT',
    image:'https://res.cloudinary.com/dmesipub7/image/upload/v1783867472/Screenshot_38_wf8mjm.png',
    description:
      'A secure e-commerce application with login, search, filters, cart logic, and a responsive storefront experience.',
    features: ['Secure login', 'Search and filters', 'Cart flow', 'Responsive design'],
    live: 'https://darshanmart.ccbp.tech/',
    github: 'https://github.com/darshansatukuri/NxttrenzProject',
  },
  {
    title: 'IPL Dashboard',
    stack: 'React • REST API',
    image:'https://res.cloudinary.com/dmesipub7/image/upload/v1783867679/Screenshot_39_xvz0tf.png',
    description:
      'An interactive cricket dashboard highlighting team details, match details, and dynamic routing between pages.',
    features: ['Team details', 'Match details', 'Dynamic routing'],
    live: 'https://darshanipl.ccbp.tech/',
    github: 'https://github.com/darshan-satukuri/ipl-dashboard',
  },
  {
    title: 'GitHub Popular Repositories',
    stack: 'React • REST API',
    image:'https://res.cloudinary.com/dmesipub7/image/upload/v1783867880/Screenshot_40_tpgnyj.png',
    description:
      'A responsive GitHub explorer that fetches repository data and supports language-based filtering.',
    features: ['Repository listing', 'Language filters', 'Responsive UI'],
    live: 'https://darshagitrepos.ccbp.tech/',
    github: 'https://github.com/darshansatukuri/popularReposProject',
  },
  {
    title: 'Hotels Application',
    stack: 'React.js(Vue) • REST API',
    image:'https://res.cloudinary.com/dmesipub7/image/upload/v1784103093/Screenshot_65_wewaf9.png',
    description:
      'It can add firms from different users and add their own restaurants and products like swiggy.',
    features: ['Adding Firms', 'Adding Products To Firm', 'Displaying Products'],
    live: 'https://darshans-swiggy-frontend-ysns.vercel.app/',
    github: 'https://github.com/darshansatukuri/DarshansSwiggyFrontend',
  },
  {
    title: 'Simple Todos',
    stack: 'React JS • Node JS • Express JS • MongoDB • REST APIs • JavaScript • HTML • CSS',
    image:'https://res.cloudinary.com/dmesipub7/image/upload/v1784729543/Screenshot_75_tyjfo8.png',
    description:
      'Developed REST APIs with CRUD operations using Express.js and MongoDB, integrating them with a responsive React frontend.',
    features: ['Adding Todos', 'Deleting Todos', 'Updating Todos', 'Getting Todos'],
    live: 'https://simple-todos-frontend.vercel.app/',
    github: 'https://github.com/darshansatukuri/simpleTodosFrontend',
  }, 
]

function App() {
  const [theme, setTheme] = useState('dark')
  const [progress, setProgress] = useState(0)
  const [ready, setReady] = useState(false)
  const frameRef = useRef(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight
      const nextProgress = scrollableHeight > 0
        ? (window.scrollY / scrollableHeight) * 100
        : 0
      const clampedProgress = Math.min(100, Math.max(0, nextProgress))

      setProgress((current) =>
        Math.abs(current - clampedProgress) < 0.25 ? current : clampedProgress,
      )
    }

    const handleScroll = () => {
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current)
      }

      frameRef.current = window.requestAnimationFrame(updateProgress)
    }

    updateProgress()
    window.addEventListener('scroll', handleScroll, { passive: true })

    const timer = window.setTimeout(() => setReady(true), 150)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current)
      }
      window.clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <div className={`portfolio-shell ${ready ? 'is-ready' : ''}`}>
      <div className="scroll-progress" style={{ width: `${progress}%` }} />

      <Navbar theme={theme} onToggleTheme={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))} />

      <main>
        <Hero />
        <About />
        <Skills skillGroups={skillGroups} />
        <Projects projects={projects} />
        <Education />
        <Resume />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
