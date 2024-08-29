import { Content } from "antd/es/layout/layout";
import { Col, Row,Button } from "antd";
import Teachersmile from "./HomeImage/Teachersmile.png";
import { Link } from "react-router-dom";

const WelcomeContent = () => {
  return (
    <Content>
      <div className="flex justify-center">
      <Row>
        <Col span={12}> 
          <div className="justify-center my-[-40rem] md:flex hidden">
            <div className="">
              <h1 className="text-4xl text-black font-poppins font-bold">
                ยินดีต้อนรับสู่ English Fixer
              </h1>
              <p className="text-gray-500 flex justify-center">
                ยินดีต้อนรับเข้าสู่เว็บไซต์ English Fixer
                ที่ที่คุณจะได้รับการแก้ไขและพัฒนาทักษะ<br/>ภาษาอังกฤษอย่างมืออาชีพ
                ไม่ว่าคุณจะเป็นนักเรียนที่ต้องการเพิ่มเกรดในโรงเรียน<br/>
                ผู้ที่ต้องการสอบผ่านข้อสอบภาษาอังกฤษ หรือคนที่
                ต้องการเรียนรู้ภาษาอังกฤษเพื่อ<br/>ใช้ในชีวิตประจำวัน
                ที่นี่คือที่ที่คุณควรมา!
                <br />
                <br />
                ภาษาอังกฤษเป็นภาษาสากลที่มีความสำคัญในหลายด้านของชีวิต
                ไม่ว่าจะเป็นการ<br/>ศึกษา การทำงาน หรือ
                การท่องเที่ยว
                การมีทักษะภาษาอังกฤษที่ดีสามารถเปิดโอกาส<br/>ใหม่ๆ
                และสร้างความมั่นใจในการสื่อสารกับคนทั่วโลก
                <br />
                <br />
                เราเข้าใจว่าการเรียนภาษาอังกฤษอาจจะดูยากและซับซ้อน
                แต่ด้วยวิธีการสอนที่มี<br/>ประสิทธิภาพและทีมครูผู้สอนที่มีประสบการณ์
                คุณจะพบว่าการเรียนภาษาอังกฤษไม่ใช่<br/>เรื่องยากอย่างที่คิด
                ไม่ว่าจะเป็นการฟัง การพูด การอ่าน  หรือการเขียน
                เรามีคอร์สเรียน<br/>ที่หลากหลายที่สามารถตอบสนองความต้องการของคุณได้อย่างแน่นอน
              </p>
              <Button type="primary"><Link to="/quiz">เริ่มทำแบบทดสอบวัดผล</Link></Button>
            </div>
          </div>
        </Col>
        <Col span={12}>
          <img src={Teachersmile} className="h-[30rem] my-[-45rem] md:flex hidden"></img>
        </Col>
      </Row>
      {/*Responsive_Content */}
      <div className="md:hidden flex-initial"> 
      <div className="img my-[-45rem] flex justify-center"><img src={Teachersmile} className="h-[20rem] flex justify-center"></img></div>
        <div className="Content my-[50rem] justify-center">
          <h1 className="bold text-black text-2xl flex justify-center">ยินดีต้อนรับเข้าสู่เว็บไซต์ English Fixer</h1>
        <p className="text-gray-500 flex justify-center">
              ยินดีต้อนรับเข้าสู่เว็บไซต์ English Fixer
                ที่ที่คุณจะได้รับการแก้ไขและพัฒนาทักษะ<br/>ภาษาอังกฤษอย่างมืออาชีพ
                ไม่ว่าคุณจะเป็นนักเรียนที่ต้องการเพิ่มเกรดในโรงเรียน<br/>
                ผู้ที่ต้องการสอบผ่านข้อสอบภาษาอังกฤษ หรือคนที่
                ต้องการเรียนรู้ภาษาอังกฤษเพื่อ<br/>ใช้ในชีวิตประจำวัน
                ที่นี่คือที่ที่คุณควรมา!
                <br />
                <br />
                ภาษาอังกฤษเป็นภาษาสากลที่มีความสำคัญในหลายด้านของชีวิต
                ไม่ว่าจะเป็นการ<br/>ศึกษา การทำงาน หรือ
                การท่องเที่ยว
                การมีทักษะภาษาอังกฤษที่ดีสามารถเปิดโอกาส<br/>ใหม่ๆ
                และสร้างความมั่นใจในการสื่อสารกับคนทั่วโลก
                <br />
                <br />
                เราเข้าใจว่าการเรียนภาษาอังกฤษอาจจะดูยากและซับซ้อน
                แต่ด้วยวิธีการสอนที่มี<br/>ประสิทธิภาพและทีมครูผู้สอนที่มีประสบการณ์
                คุณจะพบว่าการเรียนภาษาอังกฤษไม่ใช่<br/>เรื่องยากอย่างที่คิด
                ไม่ว่าจะเป็นการฟัง การพูด การอ่าน  หรือการเขียน
                เรามีคอร์สเรียน<br/>ที่หลากหลายที่สามารถตอบสนองความต้องการของคุณได้อย่างแน่นอน
              </p>
              <Link to="/quiz" className="flex justify-center my-10"><Button type="primary" className="">เริ่มทำแบบทดสอบวัดผล</Button></Link>
        </div>
      </div>
      </div>
    </Content>
  );
};
export default WelcomeContent;
