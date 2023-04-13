import { Outlet } from "react-router-dom";
import Navigation from "../components/shared/navigation";
import SideBar from "../components/shared/sidebar";
import FooterSection from "../components/shared/footersection";

export default function Root() {
  return (
    <div className="application">
      <Navigation />
      <SideBar />
      <Outlet />
      <FooterSection />
    </div>
  );
}
