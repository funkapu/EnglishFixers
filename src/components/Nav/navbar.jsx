import { Layout, Menu, Flex, Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
const { Header } = Layout;
const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  const handleClick = () => {
    setisOpen(!isOpen);
  };
  return (
    <Layout className="h-[100vh] w-[100vw] font-poppins">
      <Header>
        <Flex className="justify-between">
          <div className="logo text-white font-semibold ">English Fixer</div>
          <Menu
            theme="dark"
            mode="responsive"
            className="mr-[3rem] space-x-4 md:flex hidden"
          >
            <Menu key="home">
              <Link to="/">หน้าหลัก</Link>
            </Menu>
            <Menu key="about">
              <Link to="/about">เกี่ยวกับเรา</Link>
            </Menu>
            <Menu key="/course">
              <Link to="/course">คอร์ส</Link>
            </Menu>
            <Menu key="/contract">
              <Link to="https://www.facebook.com/friends/requests?profile_id=61564847770314&notif_id=1724906091322870&notif_t=friend&ref=notif">ติดต่อเรา</Link>
            </Menu>
            <Menu className="">
              <Button type="primary">
                <Link to="/quiz">ทำแบบทดสอบ</Link>
              </Button>
            </Menu>
          </Menu>
          <div className="Mobile md:hidden text-white ">
            {/*Mobile button */}
            <Button
              type="primary"
              icon={<MenuOutlined />}
              onClick={handleClick}
            >
              {/*Mobile Nav*/}
              {isOpen ? (
                <Drawer open title="English Fixer">
                  <Menu className="space-y-7 flex-col">
                    <Menu key="home">
                      <Link to="/">หน้าหลัก</Link>
                    </Menu>
                    <Menu key="about">
                      <Link to="/about">เกี่ยวกับเรา</Link>
                    </Menu>
                    <Menu key="course">
                      <Link to="/course">คอร์ส</Link>
                    </Menu>
                    <Menu key="contract">
                      <Link to="https://www.facebook.com/friends/requests?profile_id=61564847770314&notif_id=1724906091322870&notif_t=friend&ref=notif">ติดต่อเรา</Link>
                    </Menu>
                    <Menu className="">
                    <Link to="/quiz">
                      <Button type="primary">
                      ทำแบบทดสอบ
                      </Button>
                      </Link>
                    </Menu>
                  </Menu>
                </Drawer>
              ) : (
                <Drawer close></Drawer>
              )}
            </Button>
          </div>
        </Flex>
      </Header>
    </Layout>
  );
};
export default Navbar;
