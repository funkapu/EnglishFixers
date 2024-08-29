import { Layout, Button } from "antd";
import {
  InstagramOutlined,
  FacebookFilled,
  TwitterCircleFilled,
} from "@ant-design/icons";
const { Footer } = Layout;
const Footers = () => {
  return (
    <Footer className="bg-white p-5 h-[5rem]">
      <div className="flex space-x-12">
        <div>
          <h1 className="font-bold">ช่องทางการติดตาม</h1>
          <div className="list-none">
            <li>
              <Button type="link" icon={<InstagramOutlined />}>
                Instragram
              </Button>
            </li>
            <li>
              <Button type="link" icon={<FacebookFilled />}>
                Facebook
              </Button>
            </li>
            <li>
              <Button type="link" icon={<TwitterCircleFilled />}>
                Twitter
              </Button>
            </li>
          </div>
        </div>
        <div>
          <h1>
            <h1 className="font-bold">ติดต่อเรา</h1>
          </h1>
          <div className="Menu">
            <li className="flex">
              <p className="font-bold">ที่อยู่: &nbsp; </p> 123
              ถนนสายการเรียนรู้ กรุงเทพฯ 10110
            </li>
            <li className="flex">
              <p className="font-bold">โทรศัพท์: &nbsp; </p> 02-123-4567
            </li>
            <li className="flex">
              <p className="font-bold">อีเมล: &nbsp; </p>
              support@englishfixer.com
            </li>
          </div>
        </div>
      </div>
      <h1 className="font-bold my-[30px]">
        © 2024 Sipapas Jaitaskul. All rights reserved.
      </h1>
    </Footer>
  );
};
export default Footers;
