import { UserOutlined } from '@ant-design/icons';
import { Avatar, Layout } from 'antd';
import { AnimatePresence, motion } from "framer-motion";
import { FC, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { useSidebar } from '../../store/hooks/useSidebar';
import { showAnimation } from './constants';
import { routes } from "./routes";
import './sidebar.scss';
import SidebarMenu from "./SidebarMenu";
import Topbar from '../topbar/Topbar';



interface IProps{
    children: ReactNode
}

const { Header } = Layout;
const SideBar:FC<IProps> = ({ children }) => {
  const {isOpen} = useSidebar();


  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "160px" : "45px",
            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
           <Header style={{ zIndex: 1}}>
            <div>
              <p>Smart</p>
            </div>
          </Header>
          <div className="top_section">
             {isOpen ?  <Avatar shape="square" size="large" icon={<UserOutlined /> } /> :
                 <Avatar shape="square" size="small" icon={<UserOutlined />} />
                }
            <AnimatePresence>
              {isOpen && (
                <div
                className="user-details"
                >
                  <motion.p
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  Sneha Patel
                </motion.p>
                <motion.p
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  Administrator
                </motion.p>
                </div>
              )}
            </AnimatePresence>
               

          </div>
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    key={index}
                    route={route}
                    showAnimation={showAnimation}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className={({ isActive }) =>(isActive ? "active link" : "link")}>
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
                </NavLink>
              );
            })}
          </section>
        </motion.div>
         <div className='content'>
            <Topbar/>
            <main>
              {children}
            </main>
         </div>
      </div>
    </>
  );
};

export default SideBar;
