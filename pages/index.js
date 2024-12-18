import Navbar2 from '../components/Navbar2.jsx'
import Head from 'next/head'
import Main from '../components/Main.jsx'
import About from '../components/About.jsx'
import Projects from '../components/Projects.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '@/components/Footer.jsx'

export default function Home() {
  return (
    // <div className="min-h-screen w-full overflow-y-auto scroll-smooth">
    <div className="min-h-screen w-full scroll-smooth font-trirong">
      <Head>
        <title>Ash | Software Engineer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar2 />
      <Main />
      <Projects />
      {/* <About /> */}
      <Contact />
      {/* <Footer /> */}
    </div>

  )
}
