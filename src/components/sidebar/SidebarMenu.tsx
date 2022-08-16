import { AnimatePresence, motion, Variants } from "framer-motion";
import  { useState, useEffect,FC } from "react";
import './sidebar.scss'
import { FaAngleDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { menuAnimation, menuItemAnimation } from './constants';
import { useSidebar } from '../../store/hooks/useSidebar';

interface IRoute {
    name: string
    icon: any
    subRoutes: any[]
}

interface IProps{
    route: IRoute;
    showAnimation: Variants
}

const SidebarMenu:FC<IProps> = ({ route, showAnimation }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {toggleSidebar, isOpen} = useSidebar()
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if(!isOpen){
      toggleSidebar()
    }
  };

  useEffect(() => {
    if (!isOpen) {
      setIsMenuOpen(false);
    }
  }, [isOpen]);

  return (
    <div className="menu-wrapper">
      <div className="menu" onClick={toggleMenu}>
        <div className="menu_item">
          <div className="icon">{route.icon}</div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                variants={showAnimation}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="link_text"
              >
                {route.name}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {isOpen && (
          <motion.div
            animate={
              isMenuOpen
                ? {
                    rotate: -90,
                  }
                : { rotate: 0 }
            }
          >
            <FaAngleDown />
          </motion.div>
        )}
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuAnimation}
            initial="hidden"
            animate="show"
            exit="hidden"
            className={isOpen ? "menu_container_open" : "menu_container"}
          >
            {route.subRoutes.map((subRoute, idx) => (
              <motion.div variants={menuItemAnimation} key={idx} custom={idx}>
                <NavLink to={subRoute.path} className={({ isActive }) =>(isActive ? "active link sub-link" : "link sub-link")}>
                  <motion.div className="link_text">{subRoute.name}</motion.div>
                </NavLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SidebarMenu;
