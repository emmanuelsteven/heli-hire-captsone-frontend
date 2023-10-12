import MenuComponent from "./components/Menu";
import { Icon } from "@iconify/react";
import { Layout, Space, Typography } from 'antd';
import { useState } from "react";
import PropTypes from 'prop-types';
const { Content, Footer, Sider } = Layout;

const LayoutComponent = ({ children }) => {
  const [sideWidth, setSidWidth] = useState('200px');

  
  return (
    <Layout
      style={{
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
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

        <Footer>
          <small>Heli Hire ©2023 Created by Full Stack Capstone Team</small> 
        </Footer>
      </Sider>
      <Layout>
        <Content className="m-0 w-full md:w-[calc(100%-200px)] ">          
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

LayoutComponent.propTypes = {
  children: PropTypes.node,
};


LayoutComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutComponent;
