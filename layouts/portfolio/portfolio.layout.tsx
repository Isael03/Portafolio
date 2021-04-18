//Utils
import NProgress from "nprogress";
import ClassNames from "classnames";
import { useEffect, FunctionComponent, useState } from "react";
import { useRouter } from "next/router";

//Components
import Navbar from "../../components/navbar/navbar.component";
import Footer from "../../components/footer/footer.component";

//Layouts
import CustomHead from "../head/head.layout";

//Interface
import { IPortfolioProps } from "./portfolio.interface";

/**
 * PortfolioLayout - Component logic
 * @description Implements the component logic and calls the PortfolioPresentation component to display it.
 * @param {string} pageTitle - Document title html (required) ,
 * @param {boolean} dark - Dark Mode (optional) ,
 * @param {string} title - Title of the page (optional),
 * @param {any} children - Dinamic Content (required),
 * @param {boolean} footer - Display footer (optional),
 */

const PortfolioLayout: FunctionComponent<IPortfolioProps> = ({
  pageTitle,
  dark,
  title,
  children,
  footer,
}) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      NProgress.start();
    };

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", () => NProgress.done());

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <PortfolioPresentation
      children={children}
      dark={dark}
      title={title}
      footer={footer}
      pageTitle={pageTitle}
    />
  );
};

//Presentation/
const PortfolioPresentation: FunctionComponent<IPortfolioProps> = ({
  pageTitle,
  dark,
  title,
  children,
  footer,
}) => {
  return (
    <>
      <CustomHead pageTitle={pageTitle} />
      <div
        className={ClassNames("wrapper", {
          "bg-dark": dark,
        })}
      >
        <Navbar />

        {/**Dinamic Content  */}
        <div className="container py-4 content">
          {title && (
            <h1
              className={ClassNames("text-center", "mb-3", {
                "text-light": dark,
              })}
            >
              {title}
            </h1>
          )}
          {children}
        </div>
        {/**End Dinamic Content */}

        {footer && <Footer name="Nombre Apellidos" startYear={2000} />}
      </div>
    </>
  );
};
export default PortfolioLayout;
