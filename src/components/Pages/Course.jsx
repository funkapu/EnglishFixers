import Footers from "../Content/Footer/Footer";
import Navbar from "../Nav/navbar";
import NavCourse from "./Courses/NavCourse";
import BasicGrammar from "../Content/Image/Grammar/BasicGrammar.jpg";
import TAmorn from "../Content/Image/Grammar/TAmorn.jpg";
import ConverTdew from "../Content/Image/Conver/ConverTdew.jpg";
import HavardVoca from "../Content/Image/Vocabulary/HavardVoca.jpg";
import { Card, Col, Row } from "antd";
import { Link } from "react-router-dom";

const Course = () => {
  const { Meta } = Card;
  return (
    <div>
      <Navbar />
      <Footers />
      <div className="flex justify-center">
        <NavCourse />
      </div>
      <div className="my-[-45rem] flex justify-center text-2xl font-bold">
        ยอดนิยม
      </div>
      <div className="card my-[50rem] flex justify-center space-x-5">
        <Row
          gutter={[100, 100]}
          className="sm:flex-col md:flex-row"
          justify="center"
        >
          <Col xs={24} sm={12} md={6} className="px-[5rem]">
            <Link to="https://www.youtube.com/watch?v=2XbYNX9Anp0">
              <Card
                hoverable
                style={{
                  width: 240,
                }}
                cover={<img alt="example" src={BasicGrammar} />}
              >
                <Meta
                  title="12 Tenses ครบในคลิปเดียว! | เรียน Grammar ภาษาอังกฤษฟรี กับครูดิว"
                  description="Youtube: KruDew English Official"
                />
              </Card>
            </Link>
          </Col>
          <Col xs={24} sm={12} md={6} className="px-[5rem]">
            <Link to="https://www.youtube.com/watch?v=0OAXinM_OvI">
              <Card
                hoverable
                style={{
                  width: 240,
                }}
                cover={<img alt="example" src={TAmorn} />}
              >
                <Meta
                  title="เรียนภาษาอังกฤษ ฟรี 2 ชั่วโมง ฝึกพูดภาษาอังกฤษ กับ อ.ต้นอมร มีคำอ่าน แปล อธิบาย ใช้ในชีวิตประจำวัน"
                  description="Youtube: tonamorn"
                />
              </Card>
            </Link>
          </Col>
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
            <Link to="https://www.youtube.com/watch?v=3Isok-3NanU&list=PLSFMRrT5jBpLG3Nsew9I2XHrwuqaSZQ0P">
              <Card
                hoverable
                style={{
                  width: 240,
                }}
                cover={<img alt="example" src={HavardVoca} />}
              >
                <Meta
                  title="8 ชั่วโมงรวมศัพท์ 3000 OXFORD words คํา เสียงชัด ฟังง่าย พร้อมแปล และ Part of speech"
                  description="Youtube: คิดสนุก สุดหรรษา คลังคำศัพท์อังกฤษ English Channel"
                />
              </Card>
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Course;
