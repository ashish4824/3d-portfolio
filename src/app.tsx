import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Navbar, StarsCanvas } from "./components";
import GoogleAnalytics from "./components/GoogleAnalytics";
import Banner from "./components/banner";

// Lazy load components
const About = lazy(() => import("./components/about"));
const Contact = lazy(() => import("./components/contact"));
const Experience = lazy(() => import("./components/experience"));
const Feedbacks = lazy(() => import("./components/feedbacks"));
const Hero = lazy(() => import("./components/hero"));
const Tech = lazy(() => import("./components/tech"));
const Works = lazy(() => import("./components/works"));
const Footer = lazy(() => import("./components/footer"));

// App
const App = () => {
  const [hide, setHide] = useState(true);

  return (
    <BrowserRouter>
      <GoogleAnalytics />
      <Banner hide={hide} setHide={setHide} />
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
          {/* <Works />E99C-EC11 */}
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
