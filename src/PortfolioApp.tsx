import { About } from "./sections/About"
import { Contact } from "./sections/Contact"
import { Header } from "./sections/Header"
import { Home } from "./sections/Home"
import { Projects } from "./sections/Projects"
import { Skills } from "./sections/Skills"

export const PortfolioApp = () => {
  return (
    <>
      <Header/>

      <Home/>

      <About/>

      <Skills/>

      {/* <Projects/> */}

      <Contact/>
    </>
  )
}