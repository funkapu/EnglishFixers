import Footers from "../../Content/Footer/Footer";
import Navbar from "../../Nav/navbar";
import NavCourse from "./NavCourse";
import BasicGrammar from "../../Content/Image/Grammar/BasicGrammar.jpg";
import TAmorn from "../../Content/Image/Grammar/TAmorn.jpg";
import Grammar12 from "../../Content/Image/Grammar/Grammar12.jpg";
import Active from "../../Content/Image/Grammar/Active.jpg";
import { Card, Col, Row } from "antd";
import { Link } from "react-router-dom";

const Gram = () => { 
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
              <Link to="https://www.youtube.com/watch?v=1lJDJFZ82R0">
                <Card
                  hoverable
                  style={{
                    width: 240,
                  }}
                  cover={<img alt="example" src={Grammar12} />}
                >
                  <Meta
                    title="สรุป English Tenses ง่ายๆเข้าใจใน 30 นาที!"
                    description="Youtube: ครูหวาน: English On Air"
                  />
                </Card>
              </Link>
            </Col>
            <Col xs={24} sm={12} md={6} className="px-[5rem]">
              <Link to="https://www.youtube.com/watch?v=pPYSDrjM7cw">
                <Card
                  hoverable
                  style={{
                    width: 240,
                  }}
                  cover={<img alt="example" src={Active} />}
                >
                  <Meta
                    title="ครูดิวติว Grammar: สรุป Active และ Passive Voice ประธานทำเอง/ถูกทำ ต่างกันอย่างไร โครงสร้าง เทคนิคจำ"
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

export default Gram;
