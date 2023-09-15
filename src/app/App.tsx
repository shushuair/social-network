import React, {useEffect} from 'react';
import 'app/App.module.css';
import {Login} from "features/auth/ui/Login";
import {usersThunk} from "features/users/model/usersSlice";
import {useActions} from "common/hooks/useActions";
import {Users} from "features/users/ui/Users";
import {Breadcrumb, Menu} from "antd";
import Layout, {Content, Footer, Header} from "antd/lib/layout/layout";

function App() {
    const {getUsers} = useActions(usersThunk)


useEffect(()=>{
    usersThunk.getUsers({

    })
})




      return (
          <Layout className="layout">
              <Header style={{ display: 'flex', alignItems: 'center' }}>
                  <div className="demo-logo" />
                  <Menu
                      theme="dark"
                      mode="horizontal"
                      defaultSelectedKeys={['2']}
                      items={new Array(15).fill(null).map((_, index) => {
                          const key = index + 1;
                          return {
                              key,
                              label: `nav ${key}`,
                          };
                      })}
                  />
              </Header>
              <Content style={{ padding: '0 50px' }}>
                 <Login/>
                  <Users/>
                  {/*<Profile/>*/}
                  {/*<Content/>*/}

              </Content>
              <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
          </Layout>
      )



}

export default App;
