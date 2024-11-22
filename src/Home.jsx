import React from 'react'


const Home = () => {
  return (
    <>
    <section className="homeSec" id="homeSec" >
      <div >
        <h1>Transforming Yesterday’s Systems with</h1>
        <p className="homeSecPostHeader">
          <span>Today&#39;s</span> <span>AI</span>
        </p>
        <p className="homeSecPara">
          Explore <span>#FutureOfWork</span> with
        </p>
      </div>
      <div className="logoImg" >
        <img src={homedeflogo} alt="homelogo" />
      </div>
      <div className="homeBg">
        <img src={homenewbg} alt="bg" />
      </div>
      <div>
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
  </>
  )
}

export default Home