import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Styles from "../modules/Tutorial.module.css";

function Tutorial() {
    const container = useRef();

    useGSAP(() => {
        // 1. Entrance Animation (Matching your Main component)
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        tl.from(`h2`, {
            y: 30,
            opacity: 0,
            duration: 1,
            delay: 0.3 // Slightly staggered after the main title
        })
        .from(`p`, {
            y: 20,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1 // Makes the list items flow in one by one
        }, "-=0.6");

        // 2. Continuous floating idle animation (Matching your Main component)
        gsap.to(container.current, {
            y: 8, // Slightly less movement than the main container for depth
            duration: 2.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

    }, { scope: container });

    return (
        <div ref={container} className={Styles.tutorial}>
            <h2>How to Use This Vault</h2>
            <p>1. Download the vault by clicking the button below.</p>
            <p>2. Open Obsidian and click "Open another vault".</p>
            <p>3. Select the downloaded folder to open it in Obsidian.</p>
            <p>4. Explore the notes and customize them as you like!</p>
        </div>
    );
}

export default Tutorial;