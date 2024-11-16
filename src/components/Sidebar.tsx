import { FC } from "react";
import { BsFillArchiveFill, BsFillGearFill, BsFillGrid3X3GapFill, BsGrid1X2Fill, BsListCheck, BsMenuButtonWideFill, BsPeopleFill } from "react-icons/bs";
import { IoLeafOutline } from "react-icons/io5";
import "../styles/_sidebar.scss";

interface SidevBarProps {
  openSidebarToggle: boolean;
  OpenSidebar: () => void;
}

export const Sidebar: FC<SidevBarProps> = ({ openSidebarToggle, OpenSidebar }) => (
  <aside
    id="sidebar"
    className={openSidebarToggle ? "sidebar-responsive" : ""}
  >
    <div className="sidebar-title">
      <div className="sidebar-brand">
        <IoLeafOutline className="icon_header" /> Plan A
      </div>
      <span className="icon close_icon" onClick={OpenSidebar}>
        X
      </span>
    </div>

    <ul className="sidebar-list">
      <li className="sidebar-list-item">
        <span>
          <BsGrid1X2Fill className="icon" /> Dashboard
        </span>
      </li>
      <li className="sidebar-list-item">
        <span>
          <BsFillArchiveFill className="icon" /> Products
        </span>
      </li>
      <li className="sidebar-list-item">
        <span>
          <BsFillGrid3X3GapFill className="icon" /> Categories
        </span>
      </li>
      <li className="sidebar-list-item">
        <span>
          <BsPeopleFill className="icon" /> Customers
        </span>
      </li>
      <li className="sidebar-list-item">
        <span>
          <BsListCheck className="icon" /> Inventory
        </span>
      </li>
      <li className="sidebar-list-item">
        <span>
          <BsMenuButtonWideFill className="icon" /> Reports
        </span>
      </li>
      <li className="sidebar-list-item">
        <span>
          <BsFillGearFill className="icon" /> Setting
        </span>
      </li>
    </ul>
  </aside>
);
