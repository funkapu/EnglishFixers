import Footers from "../../Content/Footer/Footer";
import Navbar from "../../Nav/navbar";
import NavCourse from "./NavCourse";
import Reading1 from "../../Content/Image/Reading/Reading1.jpg"
import Reading2 from "../../Content/Image/Reading/Reading2.jpg"
import Reading3 from "../../Content/Image/Reading/Reading3.jpg"
import Reading4 from "../../Content/Image/Reading/Reading4.jpg"
import { Card, Col, Row } from "antd";
import { Link } from "react-router-dom";

const Read = () => { 
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
              <Link to="https://www.youtube.com/watch?v=jh0GdRUPEIk">
                <Card
                  hoverable
                  style={{
                    width: 240,
                  }}
                  cover={<img alt="example" src={Reading1} />}
                >
                  <Meta
                    title="TGAT ENG พาร์ท Reading แปลไม่ออกก็ตอบได้ by OpenDurian TCAS"
                    description="Youtube: OpenDurian TCAS ติว (TGAT, TPAT, A-LEVEL)"
                  />
                </Card>
              </Link>
            </Col>
            <Col xs={24} sm={12} md={6} className="px-[5rem]">
              <Link to="https://www.youtube.com/watch?v=EaAqkn_tapc">
                <Card
                  hoverable
                  style={{
                    width: 240,
                  }}
                  cover={<img alt="example" src={Reading2} />}
                >
                  <Meta
                    title="5 เคล็ดลับ ทำข้อสอบ reading ยังไงให้รอด ไม่ต้องรู้ศัพท์ ไม่ต้องแปลออก ก็ทำได้ เก็บคะแนน 90++ ไปเลย"
                    description="Youtube: JanYourDiary"
                  />
                </Card>
              </Link>
            </Col>
            <Col xs={24} sm={12} md={6} className="px-[5rem]">
              <Link to="https://www.youtube.com/watch?v=RZgL29cbAi4">
                <Card
                  hoverable
                  style={{
                    width: 240,
                  }}
                  cover={<img alt="example" src={Reading3} />}
                >
                  <Meta
                    title="แจกฟรีสูตรลัด Reading พร้อมข้อสอบจริง TGAT Eng & A-level Eng"
                    description="Youtube: TGAT ENG & A-Level ENG - พี่หมอนิริน English Nirin"
                  />
                </Card>
              </Link>
            </Col>
            <Col xs={24} sm={12} md={6} className="px-[5rem]">
              <Link to="https://www.youtube.com/watch?v=-sjiTpx2A0k">
                <Card
                  hoverable
                  style={{
                    width: 240,
                  }}
                  cover={<img alt="example" src={Reading4} />}
                >
                  <Meta
                    title="ครูดิว ติว TOEIC เทคนิคทำ Reading อัพ speed ตอนทำข้อสอบได้แน่นอน"
                    description="Youtube: ติวสอบ TOEIC กับ ครูดิว"
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

export default Read;
