import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Styles from '../modules/About.module.css';

function About() {
    // Vite looks into the public folder automatically with a leading slash
    const kultivi_vault_img = "/kultivi_vault.png";
    const container = useRef();

    useGSAP(() => {
        const tl = gsap.timeline();

        // 1. Animate text first
        tl.from("h2", { opacity: 0, y: 30, duration: 0.8 })
          .from("p, li", { opacity: 0, y: 20, stagger: 0.1, duration: 0.8 }, "-=0.4");

        // 2. Cool Image Animation (3D Reveal)
        tl.from("img", { 
            opacity: 0, 
            y: 50, 
            rotationX: -25, // Tilts the image "away" from you
            scale: 0.9, 
            duration: 1.2, 
            ease: "power4.out" 
        }, "-=0.5"); // Starts slightly before the text finishes

    }, { scope: container });

    return (
        <div ref={container} className={Styles.div}>
            <h2>About the Obsidian Vault</h2>
            <p>This is my personal Obsidian vault for the course from the platform 
                <a href="https://kultivi.com/" target="_blank" rel="noreferrer">
                    <strong> Kultivi</strong>
                </a>
            </p>
            <p>The courses included are:</p>
            <ul>
                <li>English</li>
                <li>Spanish</li>
                <li>French</li>
            </ul>
            <p>Here's a print from the vault:</p>
            <div className={Styles.imgContainer}>
                <img src={kultivi_vault_img} alt="Vault Screenshot" className={Styles.vaultImg} />
            </div>
        </div>
    );
}

export default About;