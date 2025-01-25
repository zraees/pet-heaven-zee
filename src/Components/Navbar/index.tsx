import React, { useEffect, useState } from "react";
import MainNavbar from "./DesktopNavbar.tsx";
import MobileNavbar from "./MobileNavbar.tsx";

const Navbar = () =>{
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth < 768); // Tailwind's `md` breakpoint
        };
    
        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);

      return (
        <>
            {
                isMobile ? <MobileNavbar /> : <MainNavbar />  // Switch between MainNavbar and MobileNavbar based on screen size
            }
        </>
      )
}

export default Navbar;