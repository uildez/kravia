'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion, useCycle } from 'framer-motion';

const itemVariants = {
  closed: {
    opacity: 0
  },
  open: { opacity: 1 }
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1
    }
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1
    }
  }
};

export const Menu = () => {
  const [open, cycleOpen] = useCycle(false, true);
    const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const links = [
    { name: "Início", to: "/", id: 1 },
    { name: "Treinamentos", to: "/#treinamentos", id: 2 },
    { name: "Sobre nós", to: "/#sobre-nos", id: 3 },
    { name: "Blog", to: "/#blog", id: 4 },
    { name: "Contato", to: "/#contato", id: 5 },
  ];

  return (
    <div className={`fixed w-full z-30`}>
      <div className={`flex fixed top-0 flex-row w-full items-center justify-between gap-8 py-8 px-8 lg:px-20 2xl:px-40 min-h-[80px] lg:min-h-[100px] gradient-bg-white z-50 ${showHeader ? 'translate-y-0' : '-translate-y-40'} transition-transform duration-500`}>
        <Link href={"/"}>
          <Image src={"/images/logo-kravia.svg"} className='max-w-[120px] lg:min-w-[150px]' width={500} height={500} alt='Logotipo Kravia' />
        </Link>
        <div className='flex-row gap-12 hidden lg:flex z-50'>
          {links.map(({ name, to, id }) => (
            <motion.a
              key={id}
              href={to}
              whileHover={{ scale: 1.1 }}
              variants={itemVariants}
              className="font-aeonik text-black hover:-translate-y-1 transition-all duration-500"
            >
              {name}
            </motion.a>
          ))}
        </div>
        <Image onClick={cycleOpen} className='block lg:hidden cursor-pointer hover:scale-105 max-w-[30px]' src={"/images/menu-icon-lines.svg"} width={50} height={50} alt='Ícone menu mobile' />
      </div>
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ width: 0, transition: { delay: 0.7, duration: 0.3 } }}
            className='fixed top-0 right-0 h-full bg-purple-light/80 blur-bg z-[99]'
          >
            <Image onClick={cycleOpen} className='absolute text-black right-4 lg:right-40 top-4 min-w-[60px] max-w-[60px] p-4' src={"/images/close-icon.webp"} width={50} height={50} alt='Ícone menu mobile' />

            <motion.div
              className="flex flex-col items-center gap-12 justify-center h-full"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              {links.map(({ name, to, id }) => (
                <motion.a
                  onClick={cycleOpen}
                  key={id}
                  href={to}
                  whileHover={{ scale: 1.1 }}
                  variants={itemVariants}
                  className="text-2xl lg:text-4xl text-white font-aeonik"
                >
                  {name}
                </motion.a>
              ))}
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  )
}
