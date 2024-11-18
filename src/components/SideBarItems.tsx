import { BsFillArchiveFill, BsFillGearFill, BsFillGrid3X3GapFill, BsGrid1X2Fill, BsListCheck, BsMenuButtonWideFill, BsPeopleFill } from "react-icons/bs";

export const SideBarItems = () => (
    <ul className="sidebar-list">
        <li className="sidebar-list-item">
            <span>
                <BsGrid1X2Fill className="icon" /> Dashboard
            </span>
        </li>
        <li className="sidebar-list-item">
            <span>
                <BsFillArchiveFill className="icon" /> Software & IT
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
                <BsListCheck className="icon" /> Business services
            </span>
        </li>
        <li className="sidebar-list-item">
            <span>
                <BsMenuButtonWideFill className="icon" /> Fashion & apparel
            </span>
        </li>
        <li className="sidebar-list-item">
            <span>
                <BsFillGearFill className="icon" /> Setting
            </span>
        </li>
    </ul>
);
