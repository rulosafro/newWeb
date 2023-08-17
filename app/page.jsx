import Footer from '@/components/Footer'

import style from '../css/scroll.module.css'
import { ButtonScrollL, ButtonScrollR } from '@/components/scrollItems/MoveButtons'

import ScrollHero from '@/components/scrollItems/ScrollHero'
import ScrollCarrer from '@/components/scrollItems/ScrollCarrer'
import ScrollSkills from '@/components/scrollItems/ScrollSkills'
import ScrollWork from '@/components/scrollItems/ScrollWork'
import ScrollContact from '@/components/scrollItems/ScrollContact'
import ScrollEnd from '@/components/scrollItems/ScrollEnd'
import ScrollExperience from '@/components/scrollItems/ScrollExperience'
import ScrollBrand from '@/components/scrollItems/ScrollBrand'
import ScrollBlog from '@/components/scrollItems/ScrollBlog'
import ScrollNewSkills from '@/components/scrollItems/ScrollNewSkills'

export default function Home () {
  return (
    <div className={style.container2}>
      <section className={style.section2} id='page1'>
        <ScrollHero />
      </section>

      <section className={style.section2} id='page2'>
        <ButtonScrollL to='#page1' />
        <ScrollCarrer />
        <ButtonScrollR to='#page3' />
      </section>

      <section className={style.section2} id='page3'>
        <ButtonScrollL to='#page2' />
        <ScrollSkills />
        <ButtonScrollR to='#page4' />
      </section>

      <section className={style.section2} id='page4'>
        <ButtonScrollL to='#page3' />
        <ScrollWork />
        <ButtonScrollR to='#page5' />
      </section>

      <section className={style.section2} id='page5'>
        <ButtonScrollL to='#page4' />
        <ScrollExperience />
        <ButtonScrollR to='#page6' />
      </section>

      <section className={style.section2} id='page6'>
        <ButtonScrollL to='#page5' />
        {/* <ScrollBrand /> */}
        <ScrollContact />
        <ButtonScrollR to='#page7' />
      </section>

      <section className={style.section2} id='page7'>
        <ButtonScrollL to='#page6' />
        {/* <ScrollBlog /> */}
        <ScrollEnd />
        {/* <ButtonScrollR to='#page8' /> */}
      </section>

      {/* <section className={style.section2} id='page8'>
        <ButtonScrollL to='#page7' />
        <ScrollNewSkills />
        <ButtonScrollR to='#page9' />
      </section>

      <section className={style.section2} id='page9'>
        <ButtonScrollL to='#page8' />
        <ScrollContact />
        <ButtonScrollR to='#page10' />
      </section>

      <section className={style.section2} id='page10'>
        <ButtonScrollL to='#page9' />
        <ScrollEnd />
      </section> */}
    </div>
  )
}
