import ChatDetailsSection from "./Components/ChatDetailsSection";
import ChatSection from "./Components/ChatSection";
import ContactSection from "./Components/ContactSection";
import HeaderSection from "./Components/HeaderSection";
import { discussion } from "./Data/TestData";

const MainLayout = () => {
  return (
    <div className='bg-backgroundSecondary xl:w-[83%] lg:w-[80%] md:w-[75%] y-main-padding x-main-padding rounded-tl-[30px] rounded-bl-[30px] flex flex-col gap-large relative'>

      <HeaderSection />

      <section id="chat" className="w-full h-full bg-white rounded-[20px] relative flex py-secondaryPadding">
        {/* contact section */}
        <ContactSection />
        {/* chat section */}
        <ChatSection discussion={discussion}/>
        {/* chat details section */}
        <ChatDetailsSection />
      </section>
    </div>
  );
};

export default MainLayout;
