import NavButton from "./Components/NavButton"
import { IoBookmarksOutline, IoSettingsOutline  } from "react-icons/io5";
import { LuPencilLine } from "react-icons/lu";
import { CgMenuGridO } from "react-icons/cg";
import { FaPlus } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import Menu from "./Components/Menu";

const BookmarkMenu = [
    {
        text: "Add a bookmark",
        icon1: <FaPlus />,
        icon2: null,
        isActive: false
    }
];

const MenuMenu = [
    {
        text: "Dashboards",
        icon1: null,
        icon2: <IoIosArrowForward />,
        isActive: false
    },
    {
        text: "Transactions",
        icon1: null,
        icon2: <IoIosArrowForward />,
        isActive: false
    },
    {
        text: "Sales",
        icon1: null,
        icon2: <IoIosArrowForward />,
        isActive: false
    },
    {
        text: "Expenses",
        icon1: null,
        icon2: <IoIosArrowForward />,
        isActive: false
    },
    {
        text: "Customers & Leads",
        icon1: null,
        icon2: <IoIosArrowForward />,
        isActive: false
    },
    {
        text: "Reports",
        icon1: null,
        icon2: null,
        isActive: false
    },
    {
        text: "Employees",
        icon1: null,
        icon2: null,
        isActive: false
    },
    {
        text: "Taxes",
        icon1: null,
        icon2: null,
        isActive: false
    },
    {
        text: "My Accountant",
        icon1: null,
        icon2: null,
        isActive: false
    },
    {
        text: "Apps",
        icon1: null,
        icon2: <IoIosArrowForward />,
        isActive: false
    },
    {
        text: "Conversation",
        icon1: null,
        icon2: null,
        isActive: true
    },
]

const SideBar = () => {
  return (
    <div className="y-main-padding l-main-padding flex flex-col gap-10 justify-between xl:w-[17%] lg:w-[20%] md:w-[25%] min-h-screen transition-all ease-linear">
        <div className="flex flex-col gap-10 ">
            <div className="pr-mainPaddingLeft flex flex-col gap-large">
                <img src="/assets/billrSwiftLogo.svg" className="xl:w-[80%] md:w-[90%]" alt="billrSwift logo" />
                <button className="w-full py-[2px] flex justify-center items-center gap-2 bg-gradient-to-r from-buttonRed to-buttonOrange rounded-full text-white">
                    <span><FaPlus /></span>
                    <span className="h2-custom">New</span>
                </button>
            </div>
            <div className="flex flex-col gap-medium">
                <NavButton text="BOOKMARKS" icon1={<IoBookmarksOutline />} icon2={<LuPencilLine />} isActive={false}/>
                <Menu menu={BookmarkMenu} isOpen={false}/>
                <hr className="h-1 border-borderColor -mx-[57px] opacity-30"/>
                <NavButton text="Menu" icon1={<CgMenuGridO />} icon2={<LuPencilLine />} isActive={true}/>
                <Menu menu={MenuMenu} isOpen={true}/>
                <hr className="h-1 border-borderColor -mx-[57px] opacity-30"/>
                <NavButton text="Settings" icon1={<IoSettingsOutline />} isActive={false}/>
            </div>
        </div>

        <div className="text-small text-borderColor bottom-0 pr-mainPaddingLeft">
            <p className="text-[16px]">© Billrswift.2024</p>
            <p className="text-[12px]">service for making bills, invoices and receipts quickly.</p>
        </div>
    </div>
  )
}

export default SideBar