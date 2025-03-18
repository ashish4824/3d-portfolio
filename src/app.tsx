// import { useEffect, useState } from "react";
// import { META } from './constants/meta';
// import { BrowserRouter } from "react-router-dom";
// import { Suspense, lazy } from "react";
// import { Navbar, StarsCanvas } from "./components";
// import GoogleAnalytics from "./components/GoogleAnalytics";

// // Lazy load components with proper type handling
// const About = lazy(() => import("./components/about").then((module) => ({
//   default: module.About
// })));

// const Contact = lazy(() => import("./components/contact").then((module) => ({
//   default: module.Contact
// })));

// const Experience = lazy(() => import("./components/experience").then((module) => ({
//   default: module.Experience
// })));

// const Feedbacks = lazy(() => import("./components/feedbacks").then((module) => ({
//   default: module.Feedbacks
// })));

// const Hero = lazy(() => import("./components/hero").then((module) => ({
//   default: module.Hero
// })));

// const Tech = lazy(() => import("./components/tech").then((module) => ({
//   default: module.Tech
// })));

// const Works = lazy(() => import("./components/works").then((module) => ({
//   default: module.Works
// })));

// const Footer = lazy(() => import("./components/footer").then((module) => ({
//   default: module.default // Changed from module.Footer to module.default
// })));

// // App
// const App = () => {
//   const [hide, setHide] = useState(true);
//   useEffect(() => {
//     document.title = META.DEFAULT_TITLE;
//     document.setAttribute("description", META.DEFAULT_DESCRIPTION);
//   }, []);
//   return (
//     <BrowserRouter>
//       <GoogleAnalytics />
//       {/* <Banner hide={hide} setHide={setHide} /> */}
//       <div className="relative z-0 bg-primary">
//         <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
//           <Navbar hide={hide} />
//           <Suspense fallback={<div>Loading...</div>}>
//             <Hero />
//           </Suspense>
//         </div>
//         <Suspense fallback={<div>Loading...</div>}>
//           <About />
//           <Experience />
//           <Tech />
//           <Works />
//           <Feedbacks />
//         </Suspense>

//         {/* Contact */}
//         <div className="relative z-0">
//           <Suspense fallback={<div>Loading...</div>}>
//             <Contact />
//           </Suspense>
//           <StarsCanvas />
//         </div>
//         <Suspense fallback={<div>Loading...</div>}>
//           <Footer />
//         </Suspense>
//       </div>
//     </BrowserRouter>
//   );
// };

// export default App;
import { useState, useEffect } from "react";
import { META } from './constants/meta';
import { BrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Navbar, StarsCanvas } from "./components";
import GoogleAnalytics from "./components/GoogleAnalytics";

// Lazy load components with proper type handling
const About = lazy(() => import("./components/about").then(module => ({
default: module.About
})));

const Contact = lazy(() => import("./components/contact").then(module => ({
default: module.Contact
})));

const Experience = lazy(() => import("./components/experience").then(module => ({
default: module.Experience
})));

const Feedbacks = lazy(() => import("./components/feedbacks").then(module => ({
default: module.Feedbacks
})));

const Hero = lazy(() => import("./components/hero").then(module => ({
default: module.Hero
})));

const Tech = lazy(() => import("./components/tech").then(module => ({
default: module.Tech
})));

const Works = lazy(() => import("./components/works").then(module => ({
default: module.Works
})));

const Footer = lazy(() => import("./components/footer").then(module => ({
default: module.default
})));

// App
const App = () => {
  const [hide, setHide] = useState(true);

  useEffect(() => {
    document.title = META.DEFAULT_TITLE;
  
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) metaDescription.setAttribute("content", META.DEFAULT_DESCRIPTION);
  
    const ogTitle = document.querySelector("meta[property='og:title']");
    if (ogTitle) ogTitle.setAttribute("content", META.OPEN_GRAPH_TITLE);
  
    const ogDescription = document.querySelector("meta[property='og:description']");
    if (ogDescription) ogDescription.setAttribute("content", META.OPEN_GRAPH_DESCRIPTION);
  
    const ogImage = document.querySelector("meta[property='og:image']");
    if (ogImage) ogImage.setAttribute("content", META.OPEN_GRAPH_IMAGE);
  
    const twitterCard = document.querySelector("meta[name='twitter:card']");
    if (twitterCard) twitterCard.setAttribute("content", META.TWITTER_CARD_TYPE);
  
    const keywords = document.querySelector("meta[name='keywords']");
    if (keywords) keywords.setAttribute("content", META.KEYWORDS);
  }, []);
  
  return (
    <BrowserRouter>
      <GoogleAnalytics />
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar hide={hide} />
          <Suspense fallback={<div className='text-center py-5'>Loading Hero...</div>}>
            <Hero />
          </Suspense>
        </div>
        <Suspense fallback={<div className='text-center py-5'>Loading Sections...</div>}>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
        </Suspense>
        {/* Contact */}
        <div className="relative z-0">
          <Suspense fallback={<div className='text-center py-5'>Loading Contact...</div>}>
            <Contact />
          </Suspense>
          <StarsCanvas />
        </div>
        <Suspense fallback={<div className='text-center py-5'>Loading Footer...</div>}>
          <Footer />
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;

