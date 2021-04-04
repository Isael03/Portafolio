//Layout
import PortfolioLayout from "../layouts/portfolio/portfolio.layout";

//Components
import Introduction from "../components/introduction/introduction.component";
import { Skill } from "../components/skill/skill.component";
import { Experience } from "../components/experience/experience.component";
import { Card } from "../components/card/card.component";

//Data
import { projects } from "../profile";

//Utils
import Link from "next/link";

//Styles
//import "../styles/Home.module.css";

const Home = () => {
  return (
    <PortfolioLayout pageTitle="Home" footer={false} dark={false}>
      <header className="row">
        <Introduction
          name="Pepito Fuentes"
          job="Developer"
          description=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem temporibus, distinctio consequuntur expedita reiciendis quasi fugit nemo necessitatibus maxime cum adipisci, asperiores laborum! Pariatur accusamus expedita ipsum praesentium, temporibus aliquam."
        />
      </header>
      {/**Section Skills */}
      <div className="row py-2">
        <div className="col-md-4">
          <Skill name="Habilidades" />
        </div>
        {/**End Section Skills */}

        {/**Section Experiences */}
        <div className="col-md-8">
          <Experience name="Experiencia" />
        </div>
      </div>
      {/**End Section Experiences */}

      {/**Portfolio */}
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-dark">
            <div className="row">
              <div className="col-md-12">
                <h2 className="text-center text-light">Portfolio</h2>
              </div>
              {projects.map(({ name, description, image }, i) => (
                <div className="col-md-4 p-2" key={i}>
                  <Card name={name} image={image} description={description} />
                </div>
              ))}
            </div>

            <div className="text-center mt-3">
              <Link href="/portfolio">
                <a className="btn btn-outline-light">Más proyectos</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/**End Portfolio */}
    </PortfolioLayout>
  );
};

export default Home;
