import { FC } from "react";
import { BsFillBellFill, BsFillEnvelopeFill, BsJustify, BsPersonCircle } from "react-icons/bs";
import { HeaderProps } from "../containers";
import "../styles/_header.scss";

export const Header: FC<HeaderProps> = ({ OpenSidebar }) => (
  <header className="header">
    <div className="menu-icon">
      <BsJustify className="icon" onClick={OpenSidebar} />
    </div>
    <h4>Carbon Intensity</h4>
    <div className="header-right">
      <BsFillBellFill className="icon" />
      <BsFillEnvelopeFill className="icon" />
      <BsPersonCircle className="icon" />
    </div>
  </header>
);
