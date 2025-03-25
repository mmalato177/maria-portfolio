import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaEnvelope, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/mmalato177" },
  { icon: <FaEnvelope />, path: "mailto:mariamalato2004@gmail.com" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/maria-malato/" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/mmalato17/" },
 
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
