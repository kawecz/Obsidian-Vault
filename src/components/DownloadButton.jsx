import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Styles from '../modules/DownloadButton.module.css';

function DownloadButton() {
    const container = useRef();

    // Use contextSafe to ensure the animations are cleaned up 
    // and don't try to run on a component that's been unmounted.
    const { contextSafe } = useGSAP({ scope: container });

    const onMouseEnter = contextSafe(() => {
        // We target the class directly within the scoped 'container'
        gsap.to(`.${Styles.btn}`, {
            scale: 1.05,
            y: -3,
            backgroundColor: "#1a1a1a", // Optional: slight darkening
            duration: 0.3,
            ease: "power2.out",
            overwrite: "auto"
        });
    });

    const onMouseLeave = contextSafe(() => {
        gsap.to(`.${Styles.btn}`, {
            scale: 1,
            y: 0,
            backgroundColor: "", // Reverts to CSS Module default
            duration: 0.4,
            ease: "elastic.out(1, 0.5)", // Soft "jelly" snap back
            overwrite: "auto"
        });
    });

    return (
        /* We wrap it in a div to provide the 'scope' for GSAP */
        <div ref={container} style={{ display: 'inline-block' }}>
            <button 
                className={Styles.btn}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <a href="kultivi.zip" >Download</a>
            </button>
        </div>
    );
}

export default DownloadButton;