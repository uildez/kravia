import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <div id="contato" className='flex flex-col lg:flex-row w-full items-center justify-between mt-12 lg:mt-20 pt-28 pb-40 px-8 lg:px-20 2xl:px-40 gap-20 lg:gap-0 bg-purple-light'>
      <Image src={"/images/logo-kravia-branco.svg"} className='max-w-[200px]' width={500} height={500} alt='Logotipo Kravia' />
      <div className='flex flex-col items-center lg:items-start gap-4'>
        <Link href="mailto:contato@kravia.com.br" className="text-center lg:text-left text-white font-aeonik text-xl hover:-translate-y-1 transition-all duration-500">contato@kravia.com.br</Link>
        <Link href="tel:(11) 4786-2808" className="text-center lg:text-left text-white font-aeonik text-xl hover:-translate-y-1 transition-all duration-500">(11) 4786-2808</Link>
      </div>
      <div className='flex flex-row items-center justify-center gap-4'>
        <a  target="_blank" rel="noopener noreferrer" href='https://www.youtube.com/@TshootAcademy'><Image src={"/images/youtube.svg"} className='max-w-[35px] lg:max-w-[35px] hover:-translate-y-2 transition-all duration-500 opacity-60' width={500} height={500} alt='Ícone Youtube' /></a>
        <a  target="_blank" rel="noopener noreferrer" href='https://www.youtube.com/@TshootAcademy'><Image src={"/images/instagram.svg"} className='max-w-[35px] lg:max-w-[35px] hover:-translate-y-2 transition-all duration-500' width={500} height={500} alt='Ícone Instagram' /></a>
        <a  target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/company/kravia-treinamentos/'><Image src={"/images/linkedin.svg"} className='max-w-[35px] lg:max-w-[35px] hover:-translate-y-2 transition-all duration-500' width={500} height={500} alt='Ícone Linkedin' /></a>
        <a  target="_blank" rel="noopener noreferrer" href='#'><Image src={"/images/whatsapp.svg"} className='max-w-[35px] lg:max-w-[35px] hover:-translate-y-2 transition-all duration-500 opacity-60' width={500} height={500} alt='Ícone WhatsApp' /></a>
      </div>
    </div>
  )
}
