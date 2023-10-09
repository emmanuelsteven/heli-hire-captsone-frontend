import { Route, Routes } from "react-router-dom";
import HelicopterList from "./components/Helicopter";
import Details from "./pages/Details";
import DeleteComponent from './components/Delete';
import MenuComponent from "./components/Menu";
import AddItem from "./components/AddItem";
import { Icon } from "@iconify/react";

import { Layout, Space, Typography } from 'antd';
import { useState } from "react";
const { Content, Footer, Sider } = Layout;

const LayoutComponent = () => {
  const [sideWidth, setSidWidth] = useState('200px');
  return (
    <Layout
      style={{
        minHeight: '100vh',
        width: '100vw',
        overflowY: 'clip',
        position: 'relative',
      }}
    >
      <Sider
        theme="light"
        breakpoint="md"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}

        onCollapse={(collapsed, type) => {
          setSidWidth(collapsed ? '0px' : '200px');
          console.log(collapsed, type, sideWidth);
        }}
        style={{
          paddingBlock: '20px',
          zIndex: '999',
        }}
      >
        <Space className="demo-logo-vertical">
          <Typography.Title level={2} style={{ color: 'black', textAlign: 'center' }}>
            Heli Hire
          </Typography.Title>
        </Space>
        <MenuComponent />
        {/* // add social media icons to the bottom of sider */}

        <ul className="icons mx-auto relative top-[13rem]">
          <li>
            <Icon icon="la:facebook" />
          </li>
          <li>
            <Icon icon="jam:twitter-circle" />
          </li>
          <li>
            <Icon icon="entypo-social:instagram-with-circle" />
          </li>
        </ul>

        <Footer
          style={{
            textAlign: 'center',
            position: 'absolute',
            bottom: '0',
            width: '100%',
            background: 'none',
            backdropFilter: 'blur(10px)',
          }}
        >
          <small>Heli Hire ©2023 Created by Full Stack Capstone Team</small> 
        </Footer>
      </Sider>
      <Layout style={{minHeight: '100%'}}>
        <Content style={{ margin: '0', width: `calc(100% - ${sideWidth})`, overflowY: 'scroll', overflowX: 'clip' }} >          
          <Routes>
            <Route path="/new-helicopter" element={<AddItem />} />
            <Route path="/" element={<HelicopterList />} />
            <Route path="/helicopters/:id" element={<Details />} />
            <Route path="/reservations" element={<HelicopterList />} />
            <Route path="/delete" element={<DeleteComponent />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};
export default LayoutComponent;
