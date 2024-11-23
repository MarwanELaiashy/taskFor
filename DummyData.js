import { RiHome5Fill } from "react-icons/ri";
import { HiMiniUsers } from "react-icons/hi2";
import { FaFile } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { RiColorFilterFill } from "react-icons/ri";
import { RiComputerFill } from "react-icons/ri";
import { IoNewspaperSharp } from "react-icons/io5";
import { FaMoneyBill } from "react-icons/fa6";
import { RiBillLine } from "react-icons/ri";
import { MdPayment } from "react-icons/md";
import { TbLogs } from "react-icons/tb";
import { FaHashtag } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";

import { BsThreeDotsVertical } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { AiFillMessage } from "react-icons/ai";

import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { ImCheckboxChecked } from "react-icons/im";

export const sidebarData = [
  { title: "Dashboard", icon: <RiHome5Fill /> },
  { title: "Users", icon: <HiMiniUsers /> },
  { title: "Orders", icon: <FaFile /> },
  { title: "Services", icon: <IoIosStar /> },
  { title: "Themes", icon: <RiColorFilterFill /> },
  { title: "Courses", icon: <RiComputerFill /> },
  { title: "Portfolio", icon: <IoNewspaperSharp /> },
  { title: "Jobs", icon: <FaMoneyBill /> },
  { title: "Bills", icon: <RiBillLine /> },
  { title: "Payment", icon: <MdPayment /> },
  { title: "Blogs", icon: <TbLogs /> },
  { title: "About Us", icon: <FaHashtag /> },
  { title: "Contact Us", icon: <MdContactPhone /> },
];

export const stats = [
  {
    title: "Total Users",
    value: 250,
    iconOne: <HiMiniUsers />,
    iconTwo: <BsThreeDotsVertical />,
    color: "#8132a7",
    backGround: "#311e60",
  },
  {
    title: "New Users",
    value: 15,
    iconOne: <FaUser />,
    iconTwo: <BsThreeDotsVertical />,
    color: "#fec128",
    backGround: "#3b382f",
  },
  {
    title: "Top Users",
    value: 200,
    iconOne: <FaHeart />,
    iconTwo: <BsThreeDotsVertical />,
    color: "#05be60",
    backGround: "#053a40",
  },
  {
    title: "Other Users",
    value: 35,
    iconOne: <AiFillMessage />,
    iconTwo: <BsThreeDotsVertical />,
    color: "#0063d6",
    backGround: "#082b53",
  },
];

export const tableData = [
  { tHead: "Name", iconTable: <FaUser /> },
  { tHead: "Phone", iconTable: <FaPhoneAlt /> },
  { tHead: "Location", iconTable: <IoLocation /> },
  { tHead: "Mail", iconTable: <IoMail /> },
  { tHead: "Status", iconTable: <ImCheckboxChecked /> },
];

export const users = [
  {
    name: "John Carter",
    phone: "+20 1119646236",
    location: "United States",
    email: "john@gmail.com",
    status: "• Active",
  },
  {
    name: "Sophie Moore",
    phone: "+20 1119646236",
    location: "United Kingdom",
    email: "john@gmail.com",
    status: "• Inactive",
  },
  {
    name: "Matt Cannon",
    phone: "+20 1119646236",
    location: "Australia",
    email: "john@gmail.com",
    status: "• Inactive",
  },
  {
    name: "Graham Hills",
    phone: "+20 1119646236",
    location: "India",
    email: "john@gmail.com",
    status: "• Active",
  },
  {
    name: "Sandy Houston",
    phone: "+20 1119646236",
    location: "Canada",
    email: "john@gmail.com",
    status: "• Inactive",
  },
  {
    name: "Andy Smith",
    phone: "+20 1119646236",
    location: "United States",
    email: "john@gmail.com",
    status: "• Active",
  },
  {
    name: "Lilly Woods",
    phone: "+20 1119646236",
    location: "Australlia",
    email: "john@gmail.com",
    status: "• Inactive",
  },
  {
    name: "Patrick Meyer",
    phone: "+20 1119646236",
    location: "United Kingdom",
    email: "john@gmail.com",
    status: "• Active",
  },
  {
    name: "Francies Willen",
    phone: "+20 1119646236",
    location: "Canada",
    email: "john@gmail.com",
    status: "• Inactive",
  },
];
