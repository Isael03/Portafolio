import Link from "next/link";
import { FunctionComponent, useContext } from "react";

//Context
import PortfolioContext from "../../contexts/portfolio.context";

//Data
import { githubLink } from "../../profile";

/**
 * TODO: implement swicth for dark mode
 *
 */

const Nabvar: FunctionComponent = () => {
  const { handleChangeDarkMode } = useContext(PortfolioContext);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
        <div className="container">
          <Link href="/">
            <a className="navbar-brand">Portafolio</a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              {/*<li>
                <button
                  className="btn btn-outline-primary"
                  onClick={handleChangeDarkMode}
                >
                  Modo oscuro
                </button>
              </li>*/}
              <LinkList />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

type navLink = {
  link: string;
  name: string;
};

let navLinks = [
  {
    link: "/curriculum",
    name: "Curriculum",
  },
  {
    link: githubLink,
    name: "Github",
  },
];

const LinkList: FunctionComponent = () => {
  return (
    <>
      {navLinks.map(({ link, name }: navLink, i) => (
        <li className="nav-item" key={i}>
          <Link href={link}>
            <a className="nav-link">{name}</a>
          </Link>
        </li>
      ))}
    </>
  );
};

export default Nabvar;
