import Footer from './Footer'

const Contact = () => {
  return (
    <section className="contactSec" id='contactSec'>
        <div className="container my-5">
            <span className='contactPreHeader'>Let&apos;s Transform Your Business with AI</span>
            <h1><span>Contact</span> <span>Us</span></h1>
            <div className="row">
                <div className="col-lg-8">
                    <div className="row">
                        <div className="col-lg-6">
                            <input type="text" name="" id="" placeholder='Your Full Name'/>
                        </div>
                        <div className="col-lg-6">
                            <input type="text" name="" id="" placeholder='Your Email Address'/>
                        </div>
                        <div className="col-lg-12">
                            <input type="text" placeholder='Subject of query'/>
                        </div>
                        <div className="col-lg-12">
                            <textarea name="" id="" placeholder='Type your message here...'></textarea>
                        </div>
                    </div>
                    <button type='submit'>Submit</button>
                </div>
            </div>
        </div>
        <Footer />
    </section>
  )
}

export default Contact