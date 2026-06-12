import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import '../App.css';
import Styles from '../modules/Main.module.css';
import DownloadButton from '../components/DownloadButton';
import Tutorial from '../components/Tutorial';

gsap.registerPlugin(useGSAP);

function Main() {
    const container = useRef();

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

        // Step-by-step layout presentation setup
        tl.from(`.${Styles.main} h1`, {
            y: 40,
            opacity: 0,
            filter: "blur(5px)",
            duration: 1.2,
        })
        .from(`.${Styles.main} p`, {
            y: 20,
            opacity: 0,
            duration: 0.8,
        }, "-=0.8") 
        // Seamless handoff to reveal Tutorial and Buttons sequentially
        .from(".tutorial-container", {
            y: 30,
            opacity: 0,
            duration: 0.8,
        }, "-=0.5")
        .from(".btn-wrapper", { 
            y: 20,
            opacity: 0,
            stagger: 0.15,
            duration: 0.6,
            ease: "back.out(1.5)"
        }, "-=0.4");

    }, { scope: container }); 

    return (
        <div ref={container} className={Styles.main}>
            <h1>Welcome to my Obsidian Vault</h1>
            <p>
                This is a collection of notes and resources that I have gathered over time. 
                Feel free to explore and learn from them!
                The File is in .zip format.
            </p>
            
            {/* Added styling class anchors so GSAP can timeline them cleanly */}
            <div className="tutorial-container" style={{ width: '100%' }}>
                <Tutorial />
            </div>
            
            <DownloadButton />
        </div>
    );
}

export default Main;