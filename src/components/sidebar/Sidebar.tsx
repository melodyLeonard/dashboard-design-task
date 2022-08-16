import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { AnimatePresence, motion } from "framer-motion";
import { FC, ReactNode } from "react";
import Scrollbars from 'react-custom-scrollbars-2';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { NavLink, useLocation } from "react-router-dom";
import { useSidebar } from '../../store/hooks/useSidebar';
import { letterCase } from '../../utils/common';
import { Flex } from '../layout/Layout';
import { Lead, Paragraph } from '../layout/Typography';
import Topbar from '../topbar/Topbar';
import { showAnimation } from './constants';
import { routes } from "./routes";
import './sidebar.scss';
import SidebarMenu from "./SidebarMenu";


interface IProps{
    children: ReactNode
}

const SideBar:FC<IProps> = ({ children }) => {
  const {isOpen} = useSidebar();
  const {pathname} = useLocation();

  const actualPath = pathname.split('/');
  
  console.log(actualPath);

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
          <Scrollbars style={{ width: isOpen ? '160px' : '45px', height: '101vh' }}>
           <div style={{ position: 'fixed', zIndex: 1, width: isOpen ? '160px' : '45px'}} className='sidebar-header'>
            <div>
              <p>Smart</p>
            </div>
          </div>
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
        </Scrollbars>
        </motion.div>
         <div className='content'>
            <Topbar/>
            <Scrollbars style={{ width: '100%', height: '100%' }}>
              <main>
              <Flex.Row>
                <Lead className='title'>{letterCase(actualPath[1])}</Lead>
                <div className='bread-cumb'>
                  <Paragraph className='text'>Home{
                      actualPath?.map((item, index) => 
                        item && <div className="others" key={index}>
                          <Flex.Row>
                             <MdKeyboardArrowRight className='icon'/> 
                            <Paragraph className='text-other'>
                              {letterCase(item)}
                            </Paragraph>
                          </Flex.Row>
                        </div>)
                    }</Paragraph>
                </div>
              </Flex.Row>
              {children}
            </main>
            </Scrollbars>
         </div>
      </div>
    </>
  );
};

export default SideBar;
