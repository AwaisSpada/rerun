import { useState } from "react";

import inno1 from './assets/Telecom.png'
import inno2 from './assets/Healthcare.png'
import inno3 from './assets/Finance.png'

const Innovation = () => {
    const [centerIndex, setCenterIndex] = useState(1);

    // Tiles array
    const tiles = [
        { id: 0, content: inno1, p: 'AI solutions designed to enhance customer engagement, optimize networks, and reduce operational inefficiencies. We help telecom providers leverage real-time data for more personalized experiences' },
        { id: 1, content: inno2, p: 'Transforming healthcare with AI-driven predictive analytics, personalized patient care, and real-time diagnostic tools. We optimize healthcare operations, reduce costs, and improve patient experiences.' },
        { id: 2, content: inno3, p: 'Enhancing financial services with AI-driven risk analysis, personalized client engagement, and predictive financial modeling. We enable financial institutions to stay competitive in a data-driven world' },
    ];

    const handleDragStart = (index) => {
        // Store the index of the dragged tile
        setCenterIndex(index);
    };

    const handleDrop = (e, index) => {
        // Update the centerIndex when the tile is dropped
        e.preventDefault();
        setCenterIndex(index);
    };

    // Handle drag over event to allow dropping
    const handleDragOver = (e) => {
        e.preventDefault();
    };

    // Update centerIndex based on the clicked button
    const handleClick = (index) => {
        setCenterIndex(index);
    };

    return (
        <section className='innoSec' id='innoSec'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                         <p className='innoPreHead'>Leading the AI Transformation</p>
                         <p className='innoMainHead'>
                            Empowering <strong>Industries</strong>  <br /> through AI-Driven
                         </p>
                         <h2>
                            Innovation
                         </h2>

                         <p className='innoSimplePara'>
                            Explore solutions for your Industry
                         </p>
                        <a href="#">Get in Touch</a>
                    </div>
                    <div className="col-lg-6">
                        <div className="slider-container">
                            <div className="slider">
                                {tiles.map((tile, index) => {
                                    let position = "center"; // default position
                                    if (index === (centerIndex + 1) % 3) {
                                        position = "right";
                                    } else if (index === (centerIndex + 2) % 3) {
                                        position = "left";
                                    }

                                    return (
                                        <div 
                                            key={tile.id} 
                                            className={`tile ${position}`} 
                                            draggable 
                                            onDragStart={() => handleDragStart(index)} 
                                            onDrop={(e) => handleDrop(e, index)} 
                                            onDragOver={handleDragOver}
                                        >
                                            <img src={tile.content} alt="Tile Image" />
                                            <p className='d-none'>
                                                {tile.p}
                                            </p> 
                                            <span className='d-none'>
                                                Network Optimization  | Predictive Customer Behaviour 
                                                Customer Churn Reduction |  Real-Time Data Analytics
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Buttons below the slider */}
                        <div className="controls">
                            {tiles.map((tile, index) => (
                            <button
                                key={tile.id}
                                onClick={() => handleClick(index)}
                                className={centerIndex === index ? "active" : ""}
                            >
                                
                            </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Innovation;
