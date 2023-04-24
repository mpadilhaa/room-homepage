import {IoMdClose, IoMdMenu} from "react-icons/io";
//hooks
import useActiveMobile from '../hooks/useActiveMobile';
import useWidthSize from '../hooks/useWidthSize';
//css
import "./Navbar.css"
//img



const Navbar = () => {

  const {active , toglleMenu} = useActiveMobile();
  const {width} = useWidthSize();

  return (
    <div className='navbar' >
      
     
      {width < 420 ? 
      (<div className={active ? 'navigate' : 'bg-none'}>
        <div className="menu" onClick={toglleMenu}>
          {active ? 
          <IoMdClose size={25} style={{ color: 'var(--text)' }}/> 
          :<IoMdMenu size={25} style={{ color: 'var(--bg)' }}/>
        }
        </div>
        
        {active ? <div>
          
        <div className='navigate-mobile' >
          <ul>
            <li>home</li>
            <li>shop</li>
            <li>about</li>
            <li>conta</li>
          </ul>
        </div>  
        
        </div>
           :
       <h3 className="logo">room</h3>
       
      }
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