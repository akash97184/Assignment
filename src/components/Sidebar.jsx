import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from './Sidebardata';
import  Submenu  from './SubMenu';
import { IconContext } from 'react-icons/lib';


const Nav = styled.div`
  background: #080736;
  height: auto;
  width: auto;
  padding-right: 7rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

`;


const SidebarNav = styled.nav`
  background: #080736;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
    <IconContext.Provider value={{ color: '#fff' }}>
      <Nav>
        <NavIcon to="#">
          <FaIcons.FaBars onClick={showSidebar} />
        </NavIcon>
      </Nav>
      <SidebarNav sidebar={sidebar}>
        <SidebarWrap>
          <NavIcon to="#">
            <AiIcons.AiOutlineClose onClick={showSidebar} />
          </NavIcon>
          {
            SidebarData.map((item, index) => {
              return <Submenu key={index} item={item} />;
            })
          }
        </SidebarWrap>
      </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
