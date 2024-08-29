import Footers from "../../Content/Footer/Footer";
import Navbar from "../../Nav/navbar";
import NavCourse from "./NavCourse";
import Essay1 from "../../Content/Image/Writing/Essay1.jpg";
import Essay2 from "../../Content/Image/Writing/Essay2.jpg";
import Essay3 from "../../Content/Image/Writing/Essay3.jpg";
import Essay4 from "../../Content/Image/Writing/Essay4.jpg";
import { Card, Col, Row } from "antd";
import { Link } from "react-router-dom";
const Write = () => { 
    const { Meta } = Card;
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="flex justify-center my-[5rem]">
        <NavCourse />
      </div>
      <div className="Card">
        <div className="card my-[-50rem] flex justify-center space-x-5">
          <Row>
            <Col span={6} xs={24} sm={12} md={6} className="px-[5rem]">
              <Link to="https://www.youtube.com/watch?v=Zps8tGj0fVk">
                <Card
                  hoverable
                  style={{
                    width: 240,
                  }}
                  cover={<img alt="example" src={Essay1} />}
                >
                  <Meta
                    title="เขียน essay ง่าย ๆ ใน 3 ขั้นตอน: How to write an essay in three easy steps"
                    description="Youtube: พี่แคน ติวอังกฤษพิชิต IELTS"
                  />
                </Card>
              </Link>
            </Col>
            <Col span={6} xs={24} sm={12} md={6} className="px-[5rem]">
              <Link to="https://www.youtube.com/watch?v=mh0Xe0C8K3U">
                <Card
                  hoverable
                  style={{
                    width: 240,
                  }}
                  cover={<img alt="example" src={Essay2} />}
                >
                  <Meta
                    title="9 ทริคใช้ได้จริง! รู้ไว้ก่อนสอบ IELTS Writing | mewmews"
                  description="Youtube: mewmews"
                  />
                </Card>
              </Link>
            </Col>

            <Col span={6} xs={24} sm={12} md={6} className="px-[5rem]">
            <Link to="https://www.youtube.com/watch?v=EeTEYBX1-rc">
              <Card
                hoverable
                style={{
                  width: 240,
                }}
                cover={<img alt="example" src={Essay3} />}
              >
                <Meta
                  title="อยากเรียนเก่งต้องทำไง (วิธีเขียน Essay คะแนน A+)"
                  description="Youtube: pol satjayakorn"
                />
              </Card>
              </Link>
            </Col>
            <Col span={6} xs={24} sm={12} md={6} className="px-[5rem]">
              <Link to="https://www.youtube.com/watch?v=3p5YqhWKnmI">
                <Card
                  hoverable
                  style={{
                    width: 240,
                  }}
                  cover={<img alt="example" src={Essay4} />}
                >
                  <Meta
                    title="ฝึก Writing Skill อย่างไรดี? | 5 Minutes Podcast EP.863"
                    description="Youtube: Mission To The Moon
"
                  />
                </Card>
              </Link>
            </Col>
          </Row>
        </div>
      </div>
      <div className="my-[70rem]">
        <Footers />
      </div>
    </div>
  );
};
export default Write