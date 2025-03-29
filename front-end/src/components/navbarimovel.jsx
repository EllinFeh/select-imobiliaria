"use client"
import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function NavbarDois() {

    const [isOpen, setIsOpen] = useState(false)
    const menuRef = useRef(null)

    const toggleMenu = () => setIsOpen(prev => !prev)

    // Fecha se clicar fora
    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        }

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside)
        } else {
            document.removeEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isOpen])

    return (
        <div>
            {/* Mobile */}
            <nav className='md:hidden fixed top-0 left-0 z-50 w-full'>
                <div className="w-full bg-black h-16 flex items-center justify-between px-4 relative z-50">
                    {/* Botão de abrir/fechar */}
                    <button onClick={toggleMenu} className="focus:outline-non m-4">
                        {!isOpen ? (
                            <svg height="26" width="30" fill="none" viewBox="0 0 30 26" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 3H27M3 13H27M3 23H27" stroke="#FFDF20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" />
                            </svg>
                        ) : (
                            <div onClick={toggleMenu}>
                                <svg height="27" width="33" fill="none" viewBox="0 0 33 27" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.6675 9.90833H6.54998L12.919 3.57966L13.2759 3.22498L12.919 2.87031L11.6862 1.64532L11.3337 1.29513L10.9813 1.64532L2.264 10.3074L1.64758 10.9199L1.29065 11.2745L1.64755 11.6292L2.26397 12.2418L2.26399 12.2418L10.9813 20.9038L11.3338 21.254L11.6862 20.9038L12.919 19.6786L13.2759 19.324L12.919 18.9693L6.54994 12.6407H20.6675C25.6903 12.6407 29.7565 16.6858 29.7565 21.669V25.1338C29.7565 25.8913 30.3738 26.5 31.1283 26.5C31.8828 26.5 32.5 25.8913 32.5 25.1338V21.669C32.5 15.1707 27.1993 9.90833 20.6675 9.90833Z" fill="#FFDF20" stroke="#FFDF20" />
                                </svg>
                            </div>
                        )}
                    </button>
                    <Image className='m-4' src="./images/selectlogo.png" alt="" />
                </div>

                {/* Menu animado */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            ref={menuRef}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="w-full bg-black text-white flex flex-col items-start px-6 py-4 gap-4 absolute top-16 left-0 z-40"
                        >
                            <a  href="/" className="text-yellow-300 font-semibold p-2">Início</a>
                            <a target='blank' href="https://instagram.com.br/selectimobiliariaoficial" className="text-yellow-300 font-semibold p-2">Instagram</a>
                            <a  href="/" className="text-yellow-300 font-semibold p-2">Sobre Nós</a>
                        
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* Desktop */}
            <nav className='hidden md:block fixed top-0 left-0 z-50 w-full'>
                <div className="w-full bg-black h-16 px-4 relative z-50 flex justify-center">
                    <div className='flex w-full items-center max-w-[1000px]'>
                        <Image className='' src="./images/selectlogo.png" alt="" />
                        <div className='gap-4 m-4'>
                            <a href="/" className="text-yellow-300 font-semibold text-sm p-3 ml-12 hover:text-yellow-600 hover:bg-amber-300 duration-300 rounded-2xl">Início</a>
                            <a target='blank' href="https://instagram.com.br/selectimobiliariaoficial" className="text-yellow-300 font-semibold text-sm p-3 ml-12 hover:text-yellow-600 hover:bg-amber-300 duration-300 rounded-2xl">Instagram</a>
                            <a href="/" className="text-yellow-300 font-semibold text-sm p-3 ml-12 hover:text-yellow-600 hover:bg-amber-300 duration-300 rounded-2xl">Sobre Nós</a>
                            
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}