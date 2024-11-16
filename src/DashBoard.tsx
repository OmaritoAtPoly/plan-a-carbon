import { useState } from "react";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Sidebar } from "./components/Sidebar";
import "./styles/layout.scss";

export const DashBoard = () => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
    }
    return (
        <div className="grid-container">
            <Header OpenSidebar={OpenSidebar} />
            <Sidebar OpenSidebar={OpenSidebar} openSidebarToggle={openSidebarToggle} />
            <Home />
        </div>
    );
};
