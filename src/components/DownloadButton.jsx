import gsap from 'gsap';
import Styles from '../modules/DownloadButton.module.css';

function DownloadButton() {
    // Dynamically creating unique paths for each language file
    const englishFileUrl = `${import.meta.env.BASE_URL}kultivi-ingles.zip`;
    const frenchFileUrl = `${import.meta.env.BASE_URL}kultivi-frances.zip`;
    const spanishFileUrl = `${import.meta.env.BASE_URL}kultivi-espanhol.zip`;

    // Target the specific button element being hovered via event.currentTarget
    const onMouseEnter = (e) => {
        gsap.to(e.currentTarget, {
            scale: 1.05,
            y: -3,
            backgroundColor: "#1a1a1a",
            duration: 0.3,
            ease: "power2.out",
            overwrite: "auto"
        });
    };

    const onMouseLeave = (e) => {
        gsap.to(e.currentTarget, {
            scale: 1,
            y: 0,
            backgroundColor: "",
            duration: 0.4,
            ease: "elastic.out(1, 0.5)",
            overwrite: "auto"
        });
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'center' }}>
            
            {/* English Button */}
            <a 
                href={englishFileUrl} 
                download="kultivi-ingles.zip"
                className={Styles.btn}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                style={{ textDecoration: 'none', display: 'inline-block' }}
            >
                Download - English 
            </a>

            {/* French Button */}
            <a 
                href={frenchFileUrl} 
                download="kultivi-frances.zip"
                className={Styles.btn}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                style={{ textDecoration: 'none', display: 'inline-block' }}
            >
                Download - French
            </a>

            {/* Spanish Button */}
            <a 
                href={spanishFileUrl} 
                download="kultivi-espanhol.zip"
                className={Styles.btn}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                style={{ textDecoration: 'none', display: 'inline-block' }}
            > 
                Download - Spanish
            </a>
            
        </div>
    );
}

export default DownloadButton;