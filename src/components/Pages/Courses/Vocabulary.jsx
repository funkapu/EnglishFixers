import Footers from "../../Content/Footer/Footer";
import Navbar from "../../Nav/navbar";
import NavCourse from "./NavCourse";
import HavardVoca from "../../Content/Image/Vocabulary/HavardVoca.jpg";
import TdewVocab from "../../Content/Image/Vocabulary/TdewVocab.jpg";
import TdewVocab2 from "../../Content/Image/Vocabulary/TdewVocab2.jpg";
import TPangVocab from "../../Content/Image/Vocabulary/TPangVocab.jpg";
import { Card, Col, Row } from "antd";
import { Link } from "react-router-dom";

const Vocab = () => {
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
              <Link to="https://www.youtube.com/watch?v=JJ-TaefIcVg">
                <Card
                  hoverable
                  style={{
                    width: 240,
                  }}
                  cover={<img alt="example" src={TdewVocab} />}
                >
                  <Meta
                    title="100 คำศัพท์สำหรับ Beginner หมวด A-Z EP.1 ศัพท์ A-B | แค่ท่องตามทุกวัน เก่งอังกฤษขึ้นแน่นอน"
                    description="Youtube: KruDew English Official"
                  />
                </Card>
              </Link>
            </Col>
            <Col xs={24} sm={12} md={6} className="px-[5rem]">
              <Link to="https://www.youtube.com/watch?v=RX0hhDp-sAI">
                <Card
                  hoverable
                  style={{
                    width: 240,
                  }}
                  cover={<img alt="example" src={TPangVocab} />}
                >
                  <Meta
                    title="คำศัพท์ภาษาอังกฤษ พื้นฐาน ในชีวิตประจำวัน สำหรับเริ่มเรียนภาษาอังกฤษ ฝึกฟัง ฝึกพูด"
                    description="Youtube: PANG English Channel"
                  />
                </Card>
              </Link>
            </Col>
            <Col xs={24} sm={12} md={6} className="px-[5rem]">
              <Link to="https://www.youtube.com/watch?v=rsWB4lr0TZA&t=2s">
                <Card
                  hoverable
                  style={{
                    width: 240,
                  }}
                  cover={<img alt="example" src={TdewVocab2} />}
                >
                  <Meta
                    title="Good Morning Teacher Podcast | 100 ศัพท์คลายเหงา ฝึกศัพท์ภาษาอังกฤษ (by KruDew"
                    description="Youtube: ติวสอบ TOEIC กับ ครูดิว"
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
      <div className="my-[70rem]">
        <Footers />
      </div>
    </div>
  );
};

export default Vocab;
