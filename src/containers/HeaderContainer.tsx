import { FC } from "react";
import { Header } from "../components/Header";

export interface HeaderProps {
  OpenSidebar: () => void;
}

export const HeaderContainer: FC<HeaderProps> = ({ OpenSidebar }) => (
  <Header
    OpenSidebar={OpenSidebar} />
);
