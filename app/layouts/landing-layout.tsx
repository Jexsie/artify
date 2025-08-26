import { Navbar } from "~/components/navigation/navbar";
import { Outlet } from "react-router";
import Footer from "~/components/ui/footer";

const LandingLayout = () => {
  return (
    <>
      <Navbar />
      <div className="pt-30 max-w-default mx-auto">
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default LandingLayout;
