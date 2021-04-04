//Utils
import NProgress from "nprogress";
import ClassNames from "classnames";
import { useEffect, FunctionComponent } from "react";
import { useRouter } from "next/router";

//Components
import Navbar from "../../components/navbar/navbar.component";
import CustomHead from "../head.layout";
import Footer from "../../components/footer/footer.component";

//Styles

interface IPortfolioProps {
  pageTitle: string;
  children?: any;
  footer?: boolean;
  dark?: boolean;
  title?: string;
}

const PortfolioLayout: FunctionComponent<IPortfolioProps> = ({
  children,
  pageTitle,
  footer = true,
  dark,
  title,
}) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      console.log(url);
      NProgress.start();
    };

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", () => NProgress.done());

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <>
      <CustomHead pageTitle={pageTitle} />
      <div
        className={ClassNames("scrollBar", "wrapper", {
          "bg-dark": dark,
        })}
      >
        <Navbar />

        {/**Dinamic Content  */}
        <div className="container py-4 content">
          {title && (
            <h1 className={ClassNames("text-center", { "text-light": dark })}>
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
