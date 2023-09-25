import { useEffect, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Loader } from "../Loader/Loader";
import WebFont from "webfontloader";
import "./SharedLayout.css";

export const SharedLayout = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Raleway"],
      },
    });
  }, []);

  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <div className="main">
          <Outlet />
        </div>
      </Suspense>
      <Footer />
    </>
  );
};
