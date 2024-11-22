import { useRef, useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import "./index.css";
import homedeflogo from "./assets/homedefaultloho.png";
import homenewbg from "./assets/homenewbg.png";

import s1 from './assets/service1.png';
import s2 from './assets/s2.png';
import s3 from './assets/s3.png';
import s4 from './assets/s4.png';
import s5 from './assets/s5.png';
import s6 from './assets/s6.png';
import s7 from './assets/s7.png';
import Innovation from "./Innovation";
import Strategy from "./Strategy";
import Potential from "./Potential";
import Future from "./Future";
import Contact from "./Contact";
import Header from "./Header";

// eslint-disable-next-line react/prop-types
function Image({ id, title, description, image }) {
  const ref = useRef(null);

  return (
    <section className="parallexSec" ref={ref}>
      <div className="parallexConatainer">
        <div className="parallexContent">
            <h2>{title}</h2>
            <p>{description}</p>
            <a href="#">Learn More</a>
        </div>
        <div className="parallexImg">
          <img src={image} alt={`A London skyscraper ${id}`} />
        </div>
      </div>
      <div className="servicesScrollSectionMob">
            <div className="container">
                <img src={image} alt="s1"/>
                <h2>{title}</h2>
                <p>
                    {description}
                </p>
                <a href="#">Learn More </a>
            </div>
        </div>
    </section>
  );
}

const serviceData = [
  { title: "AI Strategy and Roadmap", description: "Developing a strategic plan for AI adoption and creating a roadmap for implementation.", image: s1 },
  { title: "Data Analytics and Insights", description: "Transforming data (data curation, labelling) and analyzing data to derive actionable insights and support decision-making.", image: s2 },
  { title: "AI Model Development and Deployment", description: "Developing, training, and deploying AI models into production environments.", image: s3 },
  { title: "AI Integration and Implementation", description: "Transforming data (data curation, labelling) and analyzing data to derive actionable insights and support decision-making.", image: s4 },
  { title: "AI Governance and Ethics", description: "Establishing frameworks for AI governance, ethics, and compliance.", image: s5 },
  { title: "Natural Language Processing (NLP)", description: "Developing NLP solutions for text analysis, sentiment analysis, chatbots, etc.", image: s6 },
  { title: "Training and Upskilling", description: "Providing training and upskilling programs for AI and data science skills.", image: s7 }
];

// Main App component
export default function Parallex() {
  const ref = useRef(null);
  const lastSectionRef = useRef(null); 
  const { scrollYProgress } = useScroll();

  // hero section animation
  const [isHidden, setIsHidden] = useState(false); // Track visibility of the heading
  const [previousScrollY, setPreviousScrollY] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    // const unsubscribe = scrollYProgress.onChange((latestScroll) => {
    //   console.log(latestScroll)
    //   setIsHidden(latestScroll >= 0.001); 
    // });
    const unsubscribe = scrollYProgress.onChange((latestScroll) => {
      const currentScrollY = latestScroll * window.innerHeight;

      // Check scroll direction
      if (currentScrollY >= previousScrollY) {
        // Scrolling down
        setIsHidden(true);
      } else if (currentScrollY < previousScrollY) {
        // Scrolling up
        setIsHidden(false);
      }

      setPreviousScrollY(currentScrollY); // Update previous scroll position
    });


    return () => unsubscribe(); 
  }, [scrollY]);


  useEffect(() => {
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
}, []);

// Calculate margin dynamically
const getMarginStyle = () => {
  if (isHidden ) {
    return "0"; // No margin if hidden
  }

  // Adjust margin based on window width
  if (windowWidth < 600 && !isHidden) {
      return " 0 0 150px"; // Example: Smaller margin for narrow screens
  }  else {
      return "-250px 0 0"; // Example: Larger margin for wide screens
  }
};
// Calculate margin dynamically
const getWidthStyle = () => {

  // Adjust margin based on window width
  if (windowWidth > 600) {
    if(isHidden){
      return "700px"; 
    }else{
      return "100vw"; 
    }
  }  else {
    if(isHidden){
      return "100vw"; 
    }else{
      return "100vw"; 
    } 
  }
};


  const { scrollYProgress: lastSectionScroll } = useScroll({ target: lastSectionRef });
  const [activeHeading, setActiveHeading] = useState(0);
  useEffect(() => {
    const unsubscribe = lastSectionScroll.onChange((progress) => {
      if (progress < 0.5  && progress >= 0.1) {
        console.log(progress)
        setActiveHeading(1);
      } else if (progress >=  0.5  && progress < 0.75) {
        console.log(progress)
        setActiveHeading(2);
      } else if (progress >= 0.75 && progress < 0.8) {
        console.log(progress)
        setActiveHeading(3);
      }
    });

    return () => unsubscribe(); 
  }, [lastSectionScroll]);

  return (
    <>
     <Header />
      <section className="normal-section homeSec">
        {!isHidden && ( 
          <motion.div style={{display: isHidden ? "none" : "block",}} >
            <h1>Transforming Yesterday’s Systems with</h1>
            <p className="homeSecPostHeader">
              <span>Today&#39;s</span> <span>AI</span>
            </p>
          </motion.div>
        )}
        <motion.div className="logoImg">
          <img src={homedeflogo} alt="homelogo" />
        </motion.div>

        {/* Background Section */}
        <motion.div className="homeBg" style={{ width: getWidthStyle(), }}>
          <img src={homenewbg} alt="Background" style={{ margin: getMarginStyle()}}/>
        </motion.div>
        <div >
          <h1>Unlock the Power of <span>AI</span> for Your Business</h1>
          <p className="homeSecPara">
            With a mission to bridge the gap between current systems and future technology, <span>ReRen.ai </span>
            offers tailored AI solutions and expert guidance from strategy to implementation.
          </p>
          <marquee>
            Innovation | Reliability | Data Security | Customer-Centric | Future-Focused | Innovation | Reliability | Data Security | Customer-Centric | Future-Focused | Innovation | Reliability | Data Security | Customer-Centric | Future-Focused
          </marquee>
        </div>
      </section>
      {/* Parallax Section */}
      <div ref={ref} id="paralexSection">
        <h1 className="parallexHeading">Explore our Services</h1>
        {serviceData.map((image) => (
          <Image key={image} id={image} isInView={true} title={image.title} description={image.description} image={image.image}/>
        ))}
      </div>
      <Innovation />
      <Strategy />
      {/* Last Section with Scroll Progress */}
      <section className="normal-section lifeSec" ref={lastSectionRef} style={{ height: "150vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "start", position: "relative", transition: 'all 0.3s ease' }} >
        <section style={{position:"sticky", top:"5%" , height: "auto", overflow: 'visible'}}>
            <div className="container">
            <h1>The <span>AI</span> <span>Lifecycle</span></h1>
            <p className='mainPara'>Building, Training, and Evolving AI Solutions for Lasting Impact</p>

            {/* First row */}
            <div className={`row align-items-center ${activeHeading === 1 ? 'activeRow' : ''}`}>
              <div className="col-lg-4">
                <div className='activeBubbleHead'>Iterative AI Development</div>
              </div>
              <div className="col-lg-4">
                <div className='activeBubble'>
                  Design 
                  <div className="mobBlock">
                    <div><b>Iterative AI Development</b></div>
                    <div>AI implementation isn’t a one-time effort. It requires constant adaptation as new data and insights emerge, ensuring the model stays relevant and effective over time.</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className='activeBubblePara'>AI implementation isn’t a one-time effort. It requires constant adaptation as new data and insights emerge, ensuring the model stays relevant and effective over time.</div>
              </div>
            </div>

            {/* Second row */}
            <div className={`row align-items-center ${activeHeading === 2 ? 'activeRow' : ''}`}>
              <div className="col-lg-4">
                <div className='activeBubbleHead'>Data-Driven Improvements</div>
              </div>
              <div className="col-lg-4">
                <div className='activeBubble'>Develop
                <div className="mobBlock">
                    <div><b>Data-Driven Improvements</b></div>
                    <div>By continuously gathering new data, the AI models can refine their predictions and outcomes, enhancing overall accuracy and performance.</div>
                  </div></div>
              </div>
              <div className="col-lg-4">
                <div className='activeBubblePara'>By continuously gathering new data, the AI models can refine their predictions and outcomes, enhancing overall accuracy and performance.</div>
              </div>
            </div>

            {/* Third row */}
            <div className={`row align-items-center ${activeHeading === 3 ? 'activeRow' : ''}`}>
              <div className="col-lg-4">
                <div className='activeBubbleHead'>Ongoing Value</div>
              </div>
              <div className="col-lg-4">
                <div className='activeBubble'>Deploy
                <div className="mobBlock">
                    <div><b>Ongoing Value</b></div>
                    <div>This process ensures that AI not only solves immediate problems but continues to deliver long-term benefits and competitive advantage.</div>
                  </div></div>
              </div>
              <div className="col-lg-4">
                <div className='activeBubblePara'>This process ensures that AI not only solves immediate problems but continues to deliver long-term benefits and competitive advantage.</div>
              </div>
            </div>
          </div>

        </section>
      </section>
      <Potential />
      <Future />
      <Contact />
    </>
  );
}
