import Hero from '@/components/scrollItems/ScrollHero'
import style from '../../css/scroll.module.css'

export default function Scroll () {
  return (
    <div className={style.body2}>

      <div className={style.container2}>
        <section className={style.section2}>
          {/* Page One */}
          <Hero />
        </section>
        <section className={style.section2}>
          Page Two
        </section>
        <section className={style.section2}>
          Page Three
        </section>
      </div>
    </div>
  )
}
