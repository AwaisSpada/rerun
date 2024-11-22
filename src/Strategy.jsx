import s1 from './assets/strat1.png'
import s2 from './assets/strat2.png'
import s3 from './assets/strat3.png'
import s4 from './assets/strat4.png'
import s5 from './assets/strat5.png'
import s6 from './assets/strat6.png'
import s7 from './assets/strat7.png'

const Strategy = () => {
  return (
    <section className="stratSec">
        <div className="container">
            <h1>
                From strategy to implementation, <br /> we deliver tailored AI solutions that drive results
            </h1>
            <div className="stratTags">
                <img src={s1} alt="s1" />
                <img src={s2} alt="s2" />
                <img src={s3} alt="s3" />
                <img src={s4} alt="s4" />
                <img src={s5} alt="s5" />
                <img src={s6} alt="s6" />
                <img src={s7} alt="s7" />
            </div>
        </div>
    </section>
  )
}

export default Strategy