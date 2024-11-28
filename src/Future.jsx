
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Future = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
  return (
    <section className="futureSec">
        <h1>What’s  the <span>Future</span> <span>of</span> <span>AI</span>  ?</h1>
        <p>Harnessing the Power of AI to Transform Data into Actionable Insights</p>
        <div style={{width: '100%'}}> 
            <Carousel responsive={responsive} arrows={true} swipeable={true} centerMode={true} infinite={true}>
                <div>
                    <div className="futureTile">
                        <h2>Generative AI</h2>
                        <p>Conversational AI Agents that enhances customer experience with a cost-effective sales and customer support</p>
                    </div>
                </div>
                <div>
                    <div className="futureTile">
                        <h2>Predictive 
                        Analytics</h2>
                        <p>Utilizing historical and real-time data to forecast trends and outcomes, supporting strategic decision-making in industries like healthcare, telecom, and finance</p>
                    </div>
                </div>
                <div>
                    <div className="futureTile">
                        <h2>Natural Language Processing (NLP)</h2>
                        <p>Extracting valuable insights from unstructured data like clinical texts or customer feedback to improve processes and outcomes</p>
                    </div>
                </div>
                <div>
                    <div className="futureTile">
                        <h2>AI Powered
                        Automation</h2>
                        <p>Streamlining operations with intelligent automation, from workflow management to personalized customer interactions</p>
                    </div>
                </div>
                <div>
                    <div className="futureTile">
                        <h2>Real-Time Data Processing</h2>
                        <p>Enabling businesses to make decisions in real-time by processing large volumes of data instantly</p>
                    </div>
                </div>
                <div>
                    <div className="futureTile">
                        <h2>Data Privacy and Compliance</h2>
                        <p>Ensuring data is handled with the highest standards of security and privacy, compliant with industry regulations</p>
                    </div>
                </div>
            </Carousel>
        </div>
    </section>
  )
}

export default Future