import Styles from '../modules/Nav.module.css'
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


function Nav() {
    const navRef = useRef();

    useGSAP(() => {
        // Targets all 'li' tags inside our navRef
        gsap.from("li", { 
            x: 200,          // Start 100px to the right
            opacity: 0,      // Start invisible
            duration: 1,     // Animation length
            stagger: 0.1,    // Delay between each link
            ease: "power3.out" // Smooth deceleration
        });
    }, { scope: navRef });
    return(
        <nav ref={navRef} style={{ overflow: 'hidden' }}>
            <ul className={Styles.nav}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><a href="https://github.com/kawecz" target='blank'>Contact</a></li>
            </ul>
        </nav>
    )
}

export default Nav