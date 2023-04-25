import { IoMdClose, IoMdMenu } from "react-icons/io";
//hooks
import useActiveMobile from "../hooks/useActiveMobile";
import useWidthSize from "../hooks/useWidthSize";
//css
import "./Navbar.css";
//img

const Navbar = () => {
  const { active, toglleMenu } = useActiveMobile();
  const { width } = useWidthSize();

  return (
    <div className="navbar">
      {width < 600 ? (
        <div className={active ? "navigate " : "bg-none"}>
          <div className="menu" onClick={toglleMenu}>
            {active ? (
              <IoMdClose size={25} style={{ color: "var(--text)" }} />
            ) : (
              <IoMdMenu size={25} style={{ color: "var(--bg)" }} />
            )}
          </div>

          {active ? (
            <div>
              <div className="navigate-mobile">
                <ul>
                  <li>home</li>
                  <li>shop</li>
                  <li>about</li>
                  <li>contact</li>
                </ul>
              </div>
            </div>
          ) : (
            <h3 className="logo">room</h3>
          )}
        </div>
      ) : (
        <div className="navigate-desktop">
          <h3>room</h3>
          <ul>
            <li>home</li>
            <li>shop</li>
            <li>about</li>
            <li>contact</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
