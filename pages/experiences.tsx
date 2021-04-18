import { FunctionComponent } from "react";

//Layaut
import PortfolioLayout from "../layouts/portfolio/portfolio.layout";

//Component
import { Experience } from "../components/experience/experience.component";

const Experiences: FunctionComponent = () => {
  return (
    <PortfolioLayout pageTitle="Home" footer={false} dark={false}>
      <div className="row">
        <div className="col-md-12">
          <Experience full={true} name={"Experiencias"} />
        </div>
      </div>
    </PortfolioLayout>
  );
};

export default Experiences;
