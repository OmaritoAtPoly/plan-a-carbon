import { FC } from "react";
import { IoLeafOutline } from "react-icons/io5";
import "../styles/_sidebar.scss";
import { SideBarItems } from "./SideBarItems";

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
    <SideBarItems />
  </aside>
);
