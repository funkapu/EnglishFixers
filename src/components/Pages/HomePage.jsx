import Navbar from "../Nav/navbar";
import HomeContent from "../Content/HomeContent/homeContent";
import { Layout } from "antd";
import Footers from "../Content/Footer/Footer";
import { useEffect } from "react";
const HomePage = () => {
  useEffect(() => {
    document.title = 'english Fixer'
  },[])
  return (
    <Layout>
      <Navbar />
      <HomeContent />
      <Footers />
    </Layout>
  );
};
export default HomePage;
