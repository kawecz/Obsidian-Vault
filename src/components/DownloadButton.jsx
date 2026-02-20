import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Styles from '../modules/DownloadButton.module.css';

function DownloadButton() {
    const container = useRef();
    const { contextSafe } = useGSAP({ scope: container });

    // This dynamically creates the correct path: /Obsidian-Vault/Kultivi.zip
    const fileUrl = `${import.meta.env.BASE_URL}Kultivi.zip`;

    const onMouseEnter = contextSafe(() => {
        gsap.to(`.${Styles.btn}`, {
            scale: 1.05,
            y: -3,
            backgroundColor: "#1a1a1a",
            duration: 0.3,
            ease: "power2.out",
            overwrite: "auto"
        });
    });

    const onMouseLeave = contextSafe(() => {
        gsap.to(`.${Styles.btn}`, {
            scale: 1,
            y: 0,
            backgroundColor: "",
            duration: 0.4,
            ease: "elastic.out(1, 0.5)",
            overwrite: "auto"
        });
    });

    return (
        <div ref={container} style={{ display: 'inline-block' }}>
            {/* CHANGE: We use <a> as the main element. 
               Putting <a> inside <button> is invalid HTML and breaks the link.
            */}
            <a 
                href={fileUrl} 
                download="Kultivi.zip"
                className={Styles.btn}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                style={{ 
                    textDecoration: 'none', 
                    display: 'inline-block' 
                }}
            >
                Download
            </a>
        </div>
    );
}

export default DownloadButton;