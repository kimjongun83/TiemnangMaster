import React, { useState } from 'react';
import classNames from 'classnames';
import { Layout, Menu } from 'antd';
import { navigate, useLocation } from '@reach/router';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

import { dataSidebar } from './Sidebar.data';
import './Sidebar.scss';

const { Sider } = Layout;
const { SubMenu } = Menu;

const Sidebar = () => {
  const [visibleSidebar, setVisibleSidebar] = useState(true);
  const { pathname } = useLocation();

  const handleClickMenuItem = (data) => {
    if (data?.link && (!data?.children || data?.children.length === 0)) {
      navigate(data.link);
    }
  };

  const defaultOpenMenu = () => {
    const openMenu = dataSidebar.find((item) => item?.activePaths?.includes(pathname));
    const selectedMenu = openMenu?.children?.find((item) => item?.activePaths?.includes(pathname));

    return {
      openKey: openMenu?.key,
      selectedKey: selectedMenu?.key,
    };
  };

  return (
    <Sider className="Sidebar" theme="light" width={208} collapsible collapsed={!visibleSidebar}>
      <Menu
        theme="light"
        mode="inline"
        openKeys={defaultOpenMenu().openKey}
        selectedKeys={defaultOpenMenu().selectedKey}
      >
        {dataSidebar.map((item) => {
          return (
            <SubMenu
              key={item.key}
              title={item.title}
              icon={item.icon}
              defaultOpenKeys={item.activePaths?.includes(pathname)}
              disabled={item.disabled}
              onTitleClick={() => handleClickMenuItem(item)}
            >
              {item.children.map((subItem) => (
                <Menu.Item key={subItem.key} onClick={() => handleClickMenuItem(subItem)}>
                  {subItem.title}
                </Menu.Item>
              ))}
            </SubMenu>
          );
        })}
      </Menu>

      <div
        className={classNames('Sidebar-toggle flex', { 'justify-center': !visibleSidebar })}
        onClick={() => setVisibleSidebar(!visibleSidebar)}
      >
        {visibleSidebar ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
      </div>
    </Sider>
  );
};

export default Sidebar;
