import Styles from '../modules/Header.module.css'
import Nav from './Nav'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Header() {
    const headerRef = useRef();

    useGSAP(() => {
        // Timeline allows you to chain animations if you want to add more later
        const tl = gsap.timeline();

        tl.from("h1", { 
            y: -100,            // Drop down from above
            opacity: 0, 
            scale: 0.8,         // Start slightly smaller
            filter: "blur(10px)", // Start blurry and sharpen up
            duration: 1.5, 
            ease: "elastic.out(1, 0.75)" // A cool, springy bounce
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