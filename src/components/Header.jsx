import Styles from '../modules/Header.module.css'
import Nav from './Nav'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Header() {
    const headerRef = useRef();

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.from(headerRef.current.querySelector('h1'), { 
            y: -50,
            opacity: 0, 
            scale: 0.9,
            filter: "blur(8px)",
            duration: 1.2, 
            ease: "power3.out",
            onComplete: () => gsap.set(headerRef.current.querySelector('h1'), { clearProps: "all" })
        });
        
    }, { scope: headerRef });

    return (
        <header ref={headerRef} className={Styles.header}>
            <h1>Obsidian Vault</h1>
            <Nav/>
        </header>
    )
}

export default Header;