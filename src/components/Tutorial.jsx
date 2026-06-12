import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Styles from "../modules/Tutorial.module.css";

function Tutorial() {
    const container = useRef();

    useGSAP(() => {
        // Animates individual text rules cascading down beautifully
        gsap.from("p", {
            x: -30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
            delay: 0.6
        });
    }, { scope: container });

    // Highlighting the instruction steps on hover
    const handleStepHover = (e) => {
        gsap.to(e.currentTarget, {
            x: 6,
            color: "linear-gradient(90deg, #fff 0%, #f0f0f0 100%);",
            duration: 0.25,
            ease: "power2.out"
        });
    };

    const handleStepLeave = (e) => {
        gsap.to(e.currentTarget, {
            x: 0,
            color: "",
            duration: 0.3,
            ease: "power2.out"
        });
    };

    return (
        <div ref={container} className={Styles.tutorial}>
            <h2>How to Use This Vault</h2>
            <p onMouseEnter={handleStepHover} onMouseLeave={handleStepLeave}>
                1. Download the vault by clicking the button below.
            </p>
            <p onMouseEnter={handleStepHover} onMouseLeave={handleStepLeave}>
                2. Open Obsidian and click "Open another vault".
            </p>
            <p onMouseEnter={handleStepHover} onMouseLeave={handleStepLeave}>
                3. Select the downloaded folder to open it in Obsidian.
            </p>
            <p onMouseEnter={handleStepHover} onMouseLeave={handleStepLeave}>
                4. Explore the notes and customize them as you like!
            </p>
        </div>
    );
}

export default Tutorial;