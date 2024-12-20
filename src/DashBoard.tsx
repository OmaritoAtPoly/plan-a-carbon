import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { HeaderContainer, HomeContainer } from "./containers";
import "./styles/layout.scss";

export const DashBoard = () => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle);
    };

    return (
        <div className="grid-container">
            <HeaderContainer OpenSidebar={OpenSidebar} />
            <Sidebar OpenSidebar={OpenSidebar} openSidebarToggle={openSidebarToggle} />
            <HomeContainer/>
        </div>
    );
};
