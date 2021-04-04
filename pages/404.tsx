import Link from "next/link";
import PortfolioLayout from "../layouts/portfolio/portfolio.layout";

const custom404 = () => {
  const pageTitle = "Page not found";
  return (
    <PortfolioLayout pageTitle={pageTitle}>
      <div className="text-center">
        <h1>404</h1>
        <p>
          Esta página no existe. Por favor vuelva al{" "}
          <Link href="/">
            <a>Inicio</a>
          </Link>
        </p>
      </div>
    </PortfolioLayout>
  );
};

export default custom404;
