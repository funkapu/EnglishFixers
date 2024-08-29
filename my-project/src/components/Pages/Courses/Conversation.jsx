import Footers from "../../Content/Footer/Footer";
import Navbar from "../../Nav/navbar";
import NavCourse from "./NavCourse";
import ConverTdew from "../../Content/Image/Conver/ConverTdew.jpg";
import ConverTdew2 from "../../Content/Image/Conver/ConverTdew2.jpg";
import ConverTdew3 from "../../Content/Image/Conver/ConverTdew3.jpg";
import minConver from "../../Content/Image/Conver/minConver.jpg";
import { Card, Col, Row } from "antd";
import { Link } from "react-router-dom";

const Conver = () => { 
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
          <Row gutter={[100, 100]}>
            <Col xs={24} sm={12} md={6} className="px-[5rem]">
              <Link to="https://www.youtube.com/watch?v=_wcmiVSyHEQ">
                <Card
                  hoverable
                  style={{
                    width: 240,
                  }}
                  cover={<img alt="example" src={ConverTdew} />}
                >
                  <Meta
                    title="34 ประโยคภาษาอังกฤษถาม-ตอบ ใช้ในชีวิตประจำวัน | Good Morning Teacher Podcast"
                    description="Youtube: KruDew English Official"
                  />
                </Card>
              </Link>
            </Col>
            <Col xs={24} sm={12} md={6} className="px-[5rem]">
              <Link to="https://www.youtube.com/watch?v=l2DEmKj3lgg">
                <Card
                  hoverable
                  style={{
                    width: 240,
                  }}
                  cover={<img alt="example" src={ConverTdew2} />}
                >
                  <Meta
                    title="ติว ก.พ. อังกฤษ กับ ครูดิว : ข้อสอบ ก.พ. (Conversation)"
                    description="Youtube: ติวสอบ TOEIC กับ ครูดิว"
                  />
                </Card>
              </Link>
            </Col>
            <Col xs={24} sm={12} md={6} className="px-[5rem]">
              <Link to="https://www.youtube.com/watch?v=I8uIqHym8aI">
                <Card
                  hoverable
                  style={{
                    width: 240,
                  }}
                  cover={<img alt="example" src={minConver} />}
                >
                  <Meta
                    title="ฝึกพูดภาษาอังกฤษ ใน 90 นาที เรียนภาษาอังกฤษฟรี กับ อาจารย์ต้นอมร สอนภาษาอังกฤษ"
                    description="Youtube: Tonamorn"
                  />
                </Card>
              </Link>
            </Col>
            <Col xs={24} sm={12} md={6} className="px-[5rem]">
              <Link to="https://www.youtube.com/watch?v=VRFvTkHFNe0">
                <Card
                  hoverable
                  style={{
                    width: 240,
                  }}
                  cover={<img alt="example" src={ConverTdew3} />}
                >
                  <Meta
                    title="60 ประโยคภาษาอังกฤษเพื่อการทำงาน รวมทุกสถานการณ์ | Good Morning Teacher Podcast"
                    description="Youtube: KruDew English Official"
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

export default Conver;
