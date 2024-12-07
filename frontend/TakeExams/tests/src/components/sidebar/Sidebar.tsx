import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {motion} from 'framer-motion';
import {FaHome, FaBook, FaUserAlt, FaCog} from 'react-icons/fa';
import '../../styles/sidebar/Sidebar.css';
import {BiCamera, BiRightArrow} from "react-icons/bi";

const Sidebar: React.FC = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <motion.div
            className="sidebar"
            animate={{
                width: isCollapsed ? '70px' : '250px',
            }}
            transition={{duration: 0.3}}
        >
            <button className="toggle-button" onClick={toggleSidebar}>
                <BiRightArrow/>
            </button>
            <h2 className="sidebar-logo">{isCollapsed ? '' : 'JODIY'}</h2>
            <nav className="sidebar-nav">
                <NavLink to="/" className="sidebar-link">
                    <FaHome className="sidebar-icon"/>
                    {!isCollapsed && <motion.span animate={{opacity: isCollapsed ? 0 : 1}}>Home</motion.span>}
                </NavLink>
                <NavLink to="/questions" className="sidebar-link">
                    <FaBook className="sidebar-icon"/>
                    {!isCollapsed && <motion.span animate={{opacity: isCollapsed ? 0 : 1}}>Code questions</motion.span>}
                </NavLink>
                <NavLink to="/interview" className="sidebar-link">
                    <BiCamera className="sidebar-icon"/>
                    {!isCollapsed && <motion.span animate={{opacity: isCollapsed ? 0 : 1}}>Interviews</motion.span>}
                </NavLink>
                <NavLink to="/profile" className="sidebar-link">
                    <FaUserAlt className="sidebar-icon"/>
                    {!isCollapsed && <motion.span animate={{opacity: isCollapsed ? 0 : 1}}>Profile</motion.span>}
                </NavLink>
                <NavLink to="/settings" className="sidebar-link">
                    <FaCog className="sidebar-icon"/>
                    {!isCollapsed && <motion.span animate={{opacity: isCollapsed ? 0 : 1}}>Settings</motion.span>}
                </NavLink>
            </nav>
        </motion.div>
    );
};

export default Sidebar;
