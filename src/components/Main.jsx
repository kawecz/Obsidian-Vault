import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import '../App.css';
import Styles from '../modules/Main.module.css';
import DownloadButton from '../components/DownloadButton';
import Tutorial from '../components/Tutorial';

// Register the plugin if you're using specific GSAP extras, 
// though for basic fades, it's not strictly required.
gsap.registerPlugin(useGSAP);

function Main() {
    const container = useRef();

    useGSAP(() => {
        // 1. Initial entrance animation
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        tl.from(`.${Styles.main} h1`, {
            y: 30,
            opacity: 0,
            duration: 1,
            delay: 0.2
        })
        .from(`.${Styles.main} p`, {
            y: 20,
            opacity: 0,
            duration: 0.8
        }, "-=0.5") // Starts 0.5s before the previous animation ends
        .from(`.${Styles.main} button, .${Styles.main} a`, { 
            // Targeting the DownloadButton's likely wrapper
            scale: 0.8,
            opacity: 0,
            duration: 0.5
        }, "-=0.3");

        // 2. Continuous floating idle animation
        gsap.to(`.${Styles.main}`, {
            y: 10,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
        

    }, { scope: container }); // Scoping prevents GSAP from searching the whole DOM

    return (
        <div ref={container} className={Styles.main}>
            <h1>Welcome to my Obsidian Vault</h1>
            <p>
                This is a collection of notes and resources that I have gathered over time. 
                Feel free to explore and learn from them!
                The File is in .zip format.
            </p>
            <Tutorial />
            <DownloadButton />
            
        </div>
    );
}

export default Main;