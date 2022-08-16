
import { AiOutlineMail } from 'react-icons/ai';
import { IoIosMenu, IoIosQrScanner, IoMdMore, IoMdNotificationsOutline } from 'react-icons/io';
import { useSidebar } from '../../store/hooks/useSidebar';
import IconStats from '../icons/IconStats';
import './topbar.scss';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

const Topbar = () => {
       const {toggleSidebar, isOpen} = useSidebar()
  return <div style={{ position: 'fixed', zIndex: 1, width: isOpen ? '88.6%' : '98%' }} className='wrapper'>
    <div className='container'>
       <div className='left-content'>
         <IoIosMenu className='menu-icon' onClick={() => toggleSidebar()}/>
         <input className='input' placeholder="search" onClick={() => {}}/>
       </div>
       <div className='right-content'>
            <IoIosQrScanner className='ml-1' />
            <IconStats className='ml-1' icon={ <IoMdNotificationsOutline className='icon' />} number={8} color="orange"/>
            <IconStats className='ml-1' icon={ <AiOutlineMail className='icon' />} number={5}/>
            <div className='ml-1'>
                <span>
                    <Avatar size="small" icon={<UserOutlined />} />
                    <span className='name'>Sneha</span>
                </span>

            </div>
            <IoMdMore className='ml-1'/>    
       </div>
    </div>
  </div>;
};

export default Topbar;
