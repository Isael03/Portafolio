import { FunctionComponent } from "react";
import { experiences } from "../../profile";
import Link from "next/link";

interface IExperience {
  full: boolean;
  name?: string;
}

const AmountOfExperienceToShow: number = 3;

const ExperienceList: FunctionComponent = () => {
  const lastExperiences = experiences.slice(
    experiences.length - AmountOfExperienceToShow
  );

  return (
    <ul>
      {lastExperiences.map(({ title, description, from, to }, i) => (
        <li key={i}>
          <h3>{title}</h3>
          <h4>
            {from} - {to}
          </h4>
          <p className="text-justify pr-4">{description}</p>
        </li>
      ))}
    </ul>
  );
};

type TViewMore = {
  full: boolean;
};

const ViewMore: FunctionComponent<TViewMore> = ({ full }) => {
  if (experiences.length >= AmountOfExperienceToShow && full === false) {
    return (
      <Link href="/experiences">
        <a className="btn btn-ligth">Ver más</a>
      </Link>
    );
  } else {
    return <></>;
  }
};

export const Experience: FunctionComponent<IExperience> = ({ name, full }) => {
  return (
    <div className="card bg-light rounded">
      <div className="card-body">
        <section>
          <h2 className="mb-3">{name}</h2>
          <ExperienceList />
          <ViewMore full={full} />
        </section>
      </div>
    </div>
  );
};
