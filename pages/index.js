import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import PopupWidget from "../components/popupWidget";
import Contact from "../components/contact";

const Home = () => {
  return (
    <>
      <Head>
        <title>WeldMetrix</title>
        <meta
          name="description"
          content="weldmetrix"
        />
       
      </Head>

      <Navbar />
      <Hero id='/'/>
      <div id="/video">
        <SectionTitle
          pretitle=" About WeldMetrix"
          title="Learn how to fullfil your needs">
          WeldMetrix is a cutting-edge weld datalogger designed to revolutionize the welding industry. 
          With its advanced technology and seamless integration, it enables welders to accurately log 
          and analyze crucial welding parameters, ensuring optimal weld quality.
          </SectionTitle>
        <Video /> 
        <SectionTitle>
        Capture amperage, voltage, wire feed speed, weld speed, temperature, and more with precision.
        Seamlessly store data in files or push it to your preferred server using IoT protocols.
        Image and text - WeldMetrix Datalogger
      </SectionTitle>
      </div>
      <div id="/service">
      <SectionTitle
        pretitle="Weld Metrix"
        // title="Compact and portable design for convenience and mobility."
        >
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      </div>
      {/* <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs">
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle> */}
      <div id="/testimonial">
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said">
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials />
      </div>
      <Cta />
      <Footer />
      <PopupWidget/>
    </>
  );
}

export default Home;