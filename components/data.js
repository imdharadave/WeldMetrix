import {ChevronDoubleRightIcon,} from "@heroicons/react/20/solid";
import useweld1Img from "../public/img/useweld1.png";
import useweld2Img from "../public/img/useweld2.png";

const benefitOne = {
  title: "Compact and portable design for convenience and mobility.",
  image: useweld1Img,
  bullets: [
    {
      title: "Intuitive interface for effortless operation.",
      icon: <ChevronDoubleRightIcon />,
    },
    {
      title: "Real-time logging of key welding parameters for comprehensive analysis.",
      icon: <ChevronDoubleRightIcon />,
    },
    {
      title: "Store data securely for future reference and analysis.",
      icon: <ChevronDoubleRightIcon/>,
    },
  ],
};

const benefitTwo = {
  title: "How WeldMetrix Works",
  image: useweld2Img,
  bullets: [
    {
      title: "Connect the WeldMetrix datalogger to your welding equipment.",
      icon: <ChevronDoubleRightIcon />,
    },
    {
      title: "Select the parameters you wish to log and monitor.",
      icon: <ChevronDoubleRightIcon />,
    },
    {
      title: "Welding & WeldMetrix will automatically capture & store the data in real-time.",
      icon: <ChevronDoubleRightIcon />,
    },
    {
      title: "Easily transfer the data to your server via IoT protocols for secure storage & remote access.",
      icon: <ChevronDoubleRightIcon />,
    },
    {
      title: "Utilize the WeldMetrix wizard tool to generate comprehensive reports for detailed analysis.",
      icon: <ChevronDoubleRightIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
