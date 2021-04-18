/**
 * ! Deprecated Page not used
 */

import { FunctionComponent } from "react";

import PortfolioLayout from "../layouts/portfolio/portfolio.layout";
import Error from "./_error";

interface IGithub {
  user: any;
  statusCode: number;
}

const Github: FunctionComponent<IGithub> = ({ user, statusCode }) => {
  const pageTitle = "Github - Portfolio";

  if (statusCode) {
    return <Error statusCode={statusCode} />;
  }

  return (
    <>
      <PortfolioLayout pageTitle={pageTitle} footer={false}>
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <div className="card card-body text-center shadow-sm">
              <h1>{user.name}</h1>
              <img src={user.avatar_url} alt="Avatar" />
              <p>{user.bio}</p>
              <a
                href={user.html_url}
                target="_blank"
                className="btn btn-outline-secondary my-2"
              >
                Ir a Github
              </a>
            </div>
          </div>
        </div>
      </PortfolioLayout>
    </>
  );
};

export async function getStaticProps() {
  const urlApi = "https://api.github.com/users/Isael03";
  const res = await fetch(urlApi);
  const data = await res.json();
  const statusCode = res.status > 200 ? res.status : false;
  return {
    props: {
      user: data,
      statusCode,
    },
  };
}

export default Github;
