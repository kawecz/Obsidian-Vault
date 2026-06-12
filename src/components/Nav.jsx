import Styles from '../modules/Nav.module.css'
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Nav() {
    const navRef = useRef();

    useGSAP(() => {
        // Smooth entrance slide-in for the nav items
        gsap.from("li", { 
            x: 50,          
            opacity: 0,      
            duration: 1,     
            stagger: 0.1,    
            ease: "power4.out",
            delay: 0.2
        });
    }, { scope: navRef });

    // Interactive Hover & Click Animations
    const handleMouseEnter = (e) => {
        gsap.to(e.currentTarget, {
            y: -2,
            color: "#a855f7", // Smooth color change to purple on hover
            duration: 0.3,
            ease: "power2.out"
        });
    };

    const handleMouseLeave = (e) => {
        gsap.to(e.currentTarget, {
            y: 0,
            color: "", // Resets back to your CSS file default
            duration: 0.3,
            ease: "power2.out"
        });
    };

    const handleMouseDown = (e) => {
        gsap.to(e.currentTarget, { scale: 0.95, duration: 0.1 });
    };

    const handleMouseUp = (e) => {
        gsap.to(e.currentTarget, { scale: 1, duration: 0.1 });
    };

    return (
        <nav ref={navRef} style={{ overflow: 'hidden' }}>
            <ul className={Styles.nav}>
                <li>
                    <Link to="/" 
                          onMouseEnter={handleMouseEnter} 
                          onMouseLeave={handleMouseLeave}
                          onMouseDown={handleMouseDown}
                          onMouseUp={handleMouseUp}>Home</Link>
                </li>
                <li>
                    <Link to="/about" 
                          onMouseEnter={handleMouseEnter} 
                          onMouseLeave={handleMouseLeave}
                          onMouseDown={handleMouseDown}
                          onMouseUp={handleMouseUp}>About</Link>
                </li>
                <li>
                    <a href="https://github.com/kawecz" 
                       target='_blank' 
                       rel="noreferrer"
                       onMouseEnter={handleMouseEnter} 
                       onMouseLeave={handleMouseLeave}
                       onMouseDown={handleMouseDown}
                       onMouseUp={handleMouseUp}>Contact</a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;