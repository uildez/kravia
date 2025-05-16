import Image from 'next/image'
import React from 'react'

export const PhoneSection = () => {
  return (
    <div className='flex lg:flex-row flex-col w-full relative h-full items-start justify-start gap-0 lg:gap-8 my-12 lg:my-20 px-8 lg:px-20 2xl:px-40 z-20 lg:overflow-visible overflow-x-hidden'>
      <h2 className="w-[70%] lg:w-[25%] 2xl:w-[20%] text-3xl lg:text-5xl font-aeonik font-bold">Domine as tecnologias <span className='gradient-text'>que movem o mundo.</span></h2>
      <Image src={"/phone-gif.gif"} alt="Smartphone Kravia Animado" className="lg:absolute lg:left-40 2xl:left-60 lg:-top-20 2xl:-top-40 -z-10 min-w-[200%] lg:min-w-[50%] -translate-x-40 lg:translate-x-0" height={500} width={500} />
      <div className='flex flex-col lg:flex-row w-full lg:w-[45%] items-end justify-end lg:items-center gap-12 lg:absolute bottom-0 right-0 lg:pr-20 2xl:pr-40'>
        <p className='font-aeonik font-bold text-xl w-full'>O mercado exige mais do que experiência: exige certificações, conhecimento prático e atualização constante.</p>
        <p className='font-aeonik text-xl w-full'>Na Kravia, você aprende com quem forma especialistas para os maiores desafios em redes, infraestrutura e cibersegurança.</p>
      </div>
    </div>
  )
}
