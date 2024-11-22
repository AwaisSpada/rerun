
import pt1 from './assets/pt1.png'
import pt2 from './assets/pt2.png'
import pt3 from './assets/pt3.png'
import pt4 from './assets/pt4.png'
import pt5 from './assets/pt5.png'
import pt6 from './assets/pt6.png'

// 
const Potential = () => {
  return (
    <section className="potenSec">
        <div className="container">
            <h1>Let <span>ReRen.ai</span> unlock Full Potential of your Business</h1>
            <div className="row mb-2 align-items-stretch">
                <div className="col-lg-5">
                    <div className="potenTile">
                        <div className="potentTileContent">
                            <div className="potenImgTile">
                                <img src={pt1} alt="pt1" />
                            </div>
                            <div className="potenTileText">
                                <h2>AI for Sales</h2>
                                <p>Predicts customer behavior, automates lead scoring, and improves conversion rates</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="potenTile h-100">
                        <div className="potentTileContent h-100">
                            <div className="potenImgTile">
                                <img src={pt2} alt="pt1" />
                            </div>
                            <div className="potenTileText">
                                <h2>Boosts Productivity</h2>
                                <p>Automates tasks, allowing <br /> focus on strategic  <br /> work. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mb-2">
                <div className="col-lg-5">
                    <div className="potenTile">
                        <div className="potentTileContent">
                            <div className="potenImgTile">
                                <img src={pt3} alt="pt1" />
                            </div>
                            <div className="potenTileText">
                                <h2>AI in Marketing</h2>
                                <p>Personalizes outreach and optimizes campaigns in real-time.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 ">
                    <div className="potenTile">
                        <div className="potentTileContent">
                            <div className="potenImgTile">
                                <img src={pt4} alt="pt1" />
                            </div>
                            <div className="potenTileText">
                                <h2>Enhances Staff Retention</h2>
                                <p>Identifies burnout and optimizes <br /> workloads. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mb-2">
                <div className="col-lg-5">
                    <div className="potenTile">
                        <div className="potentTileContent">
                            <div className="potenImgTile">
                                <img src={pt5} alt="pt1" />
                            </div>
                            <div className="potenTileText">
                                <h2>AI in Operations</h2>
                                <p>Automates workflows and reduces operational costs.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="potenTile">
                        <div className="potentTileContent">
                            <div className="potenImgTile">
                                <img src={pt6} alt="pt1" />
                            </div>
                            <div className="potenTileText">
                                <h2>Advanced Data Insights</h2>
                                <p>Provides informed decision-making and uncovers hidden opportunities.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Potential
