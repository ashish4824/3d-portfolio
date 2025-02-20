import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Navbar, StarsCanvas } from "./components";
import GoogleAnalytics from "./components/GoogleAnalytics";
import Banner from "./components/banner";

// Lazy load components with proper type handling
const About = lazy(() => import("./components/about").then((module) => ({
  default: module.About
})));

const Contact = lazy(() => import("./components/contact").then((module) => ({
  default: module.Contact
})));

const Experience = lazy(() => import("./components/experience").then((module) => ({
  default: module.Experience
})));

const Feedbacks = lazy(() => import("./components/feedbacks").then((module) => ({
  default: module.Feedbacks
})));

const Hero = lazy(() => import("./components/hero").then((module) => ({
  default: module.Hero
})));

const Tech = lazy(() => import("./components/tech").then((module) => ({
  default: module.Tech
})));

const Works = lazy(() => import("./components/works").then((module) => ({
  default: module.Works
})));

const Footer = lazy(() => import("./components/footer").then((module) => ({
  default: module.default // Changed from module.Footer to module.default
})));

// App
const App = () => {
  const [hide, setHide] = useState(true);

  return (
    <BrowserRouter>
      <GoogleAnalytics />
      {/* <Banner hide={hide} setHide={setHide} /> */}
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar hide={hide} />
          <Suspense fallback={<div>Loading...</div>}>
            <Hero />
          </Suspense>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <About />
          <Experience />
          <Tech />
          {/* <Works /> */}
          <Feedbacks />
        </Suspense>

        {/* Contact */}
        <div className="relative z-0">
          <Suspense fallback={<div>Loading...</div>}>
            <Contact />
          </Suspense>
          <StarsCanvas />
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <Footer />
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
