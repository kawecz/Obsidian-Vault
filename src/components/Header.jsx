import Styles from '../modules/Header.module.css'
import Nav from './Nav'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Header() {
    const headerRef = useRef();

    useGSAP(() => {
        const tl = gsap.timeline();

        // 1. Make sure we target the h1 inside our headerRef scope
        tl.from(headerRef.current.querySelector('h1'), { 
            y: -100,
            opacity: 0, 
            scale: 0.8,
            filter: "blur(10px)",
            duration: 1.5, 
            ease: "elastic.out(1, 0.75)",
            // This ensures the h1 returns to its normal CSS state after animating
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

export default Header