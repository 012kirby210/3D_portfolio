import { BrowserRouter} from "react-router-dom";
import { About, Contact, Experience, Feedbacks,
  Hero, Navbar, StarCanvas, Tech, Works
} from './components/index.js';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative bg-primary z-0">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="z-0 relative">
          <Contact />
          <StarCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
