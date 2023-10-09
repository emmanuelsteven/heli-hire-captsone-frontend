import { Route, Routes } from "react-router-dom";
import HelicopterList from "./components/Helicopter";
import Details from "./pages/Details";
import DeleteComponent from './components/Delete';
import MenuComponent from "./components/Menu";
// import AddItem from "./components/AddItem";
import { Icon } from "@iconify/react";

import { Layout, Space, Typography } from 'antd';
const { Content, Footer, Sider } = Layout;

const LayoutComponent = () => {
  return (
    <Layout
      style={{
        minHeight: '100vh',
        width: '100vw',
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
          console.log(collapsed, type);
        }}
        style={{
          paddingBlock: '20px',
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

      </Sider>
      <Layout style={{minHeight: '100%'}}>
        <Content style={{ margin: '80px 0' }} >          
          <Routes>
            {/* <Route path="/addItem" element={<AddItem />} /> */}
            <Route path="/" element={<HelicopterList />} />
            <Route path="/helicopters/:id" element={<Details />} />
            <Route path="/reservations" element={<HelicopterList />} />
            <Route path="/delete" element={<DeleteComponent />} />
          </Routes>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
            position: 'fixed',
            marginInline: 'auto',
            bottom: 0,
          }}
        >
          Heli Hire ©2023 Created by Full Stack Capstone Team 
        </Footer>
      </Layout>
    </Layout>
  );
};
export default LayoutComponent;
