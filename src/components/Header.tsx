import { FC } from "react";
import { BsFillBellFill, BsFillEnvelopeFill, BsJustify, BsPersonCircle } from "react-icons/bs";
import { HeaderProps } from "../containers";
import "../styles/_header.scss";

interface HeaderChildProp extends HeaderProps { }

export const Header: FC<HeaderChildProp> = ({ OpenSidebar }) => (
  <header className="header">
    <div className="menu-icon">
      <BsJustify className="icon" onClick={OpenSidebar} />
    </div>
    <div className="header-right">
      <BsFillBellFill className="icon" />
      <BsFillEnvelopeFill className="icon" />
      <BsPersonCircle className="icon" />
    </div>
  </header>
);
