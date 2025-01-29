import Img1 from "/src/assets/banner1.png"
import Img2 from "/src/assets/banner2.png"
import Banner from '../components/Banner/Banner'
import ChooseUs from '../components/ChooseUs/ChooseUs'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import NavbarBanner from '../components/Header/NavbarBanner'
import Hero from '../components/Hero/Hero'
import NumberCounter from '../components/NumberCounter/NumberCounter'
import './App.css'
import SubjectCard from "../components/SubjectCard/SubjectCard"
import Testimonials from "../components/Testimonials/Testimonials"
const BannerData = {
  image: Img1,
  tag: "CUSTOMIZE WITH YOUR SCHEDULE",
  title: "Personalized Professional Online Tutor on Your Schedule",
  subtitle:
    "Our scheduling system allows you to select based on your free time. Lorem ipsum demo text for template. Keep track of your students class and tutoring schedules, and never miss your lectures. The best online class scheduling system with easy accessibility.Lorem ipsum is a placeholder text commonly used to demonstrate the visual form",
  link: "#",
};

const BannerData2 = {
  image: Img2,
  tag: "CUSTOMIZE WITH YOUR SCHEDULE",
  title: "Talented and Qualified Tutors to Serve You for Help",
  subtitle:
    "Our scheduling system allows you to select based on your free time. Lorem ipsum demo text for template. Keep track of your students class and tutoring schedules, and never miss your lectures. The best online class scheduling system with easy accessibility. Lorem ipsum is a placeholder text commonly used",
  link: "#",
};

function App() {


  return (
    <>
    <Header/>
    <NavbarBanner/>
    <Hero />
    <NumberCounter/>
    <ChooseUs/>
    <Banner {...BannerData}/>
    <Banner  {...BannerData2} reverse={true}/>
    <SubjectCard/>
    <Testimonials/>
    <Footer/>
    </>
  )
}

export default App
