import {IoMdClose, IoMdMenu} from "react-icons/io";
//hooks
import useActiveMobile from '../hooks/useActiveMobile';
import useWidthSize from '../hooks/useWidthSize';
//css
import "./Navbar.css"


const Navbar = () => {

  const {active , toglleMenu} = useActiveMobile();
  const {width} = useWidthSize();

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