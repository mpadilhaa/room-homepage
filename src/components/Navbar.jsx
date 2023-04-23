
import { useEffect, useState } from 'react';
import {IoMdClose, IoMdMenu} from "react-icons/io";
//css
import "./Navbar.css"

const Navbar = () => {
    const [active, setActive] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);


    useEffect(() => {

        function handleResize() {
            setWidth(window.innerWidth);
          }
      
          window.addEventListener('resize', handleResize);
      
          return () => {
            window.removeEventListener('resize', handleResize);
          };
        
      }, [width]);

   
    
    
   const toglleMenu = () => {
    setActive(!active)
   } 
   

    return (
    <div className='navbar' >
      {width < 500 ? 
      (<div className='navigate'>
        <div onClick={toglleMenu}>{active ? <IoMdClose/> : <IoMdMenu/>}</div>
        {active ? 
        <div className='navigate-mobile'>
          <ul>
            <li>home</li>
            <li>shop</li>
            <li>about</li>
            <li>conta</li>
          </ul>
        </div> : 
       ''}
      </div>
      ) : 
      (<div className='navigate-desktop'>
          <ul>
            <li>home</li>
            <li>shop</li>
            <li>about</li>
            <li>conta</li>
          </ul>
      </div>
      )
      }
    </div>
    );
}

export default Navbar