import footer from './assets/footerbg.png'
import logo from './assets/logo.svg'
import footerMpb from './assets/mobilemap.png'

const Footer = () => {
  return (
    <>
    <footer>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-4">
                    <div className='footerHead'>Find us here</div>
                    <a href="tel:+91 8328177581">+91 8328177581</a>
                    <a href="mailto:connect@reren.ai">connect@reren.ai</a>
                    <a href="#"> <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></span> reren.ai</a>
                </div>
                <div className="col-md-8 footerLocation">
                    <img src={window.innerWidth > 500 ? footer : footerMpb} alt="footer" width={'100%'}/>
                </div>
            </div>
        </div>
    </footer>
    <div className='d-flex justify-content-center my-2'>
        <img src={logo} alt="logo" className='mx-auto' width={'200px'}/>
    </div>
    </>
  )
}

export default Footer