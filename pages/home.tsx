//Layout
import PortfolioLayout from "../layouts/portfolio/portfolio.layout";

//Components
import Introduction from "../components/introduction/introduction.component";
import { Skill } from "../components/skill/skill.component";
import { Experience } from "../components/experience/experience.component";
import { Card } from "../components/card/card.component";

//Data
import { projects, githubLink } from "../profile";

//Utils
import Link from "next/link";

/**
 * TODO: Programming animations
 */

const Home = () => {
  return (
    <PortfolioLayout pageTitle="Home" footer={false} dark={false}>
      <header className="row">
        <Introduction
          name="Pepito Fuentes"
          job="Desarrollador"
          description=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem temporibus, distinctio consequuntur expedita reiciendis quasi fugit nemo necessitatibus maxime cum adipisci, asperiores laborum! Pariatur accusamus expedita ipsum praesentium, temporibus aliquam."
        />
      </header>

      <div className="row py-2">
        {/**Section Skills
         *! Deprecated
         */}
        {/* <div className="col-md-4">
          <Skill name="Habilidades" />
        </div>*/}
        {/**End Section Skills */}

        {/**Section Experiences */}
        <div className="col-md-12">
          <Experience name="Experiencia" full={false} />
        </div>
      </div>
      {/**End Section Experiences */}

      {/**Portfolio */}
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-dark rounded">
            <div className="row mb-2">
              <div className="col-md-12">
                <h2 className="text-center text-light mb-4">Portafolio</h2>
              </div>
              {projects.map(({ name, description, image }, i) => (
                <div className="col-md-4 p-2" key={i}>
                  <Card name={name} image={image} description={description} />
                </div>
              ))}
            </div>

            <div className="text-center mt-4">
              <Link href={githubLink}>
                <a className="btn btn-outline-light rounded" target="_blank">
                  Más proyectos
                </a>
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
