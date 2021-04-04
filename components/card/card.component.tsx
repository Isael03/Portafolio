import { FunctionComponent } from "react";
import styles from "./card.module.css";

interface ICard {
  image: string;
  name: string;
  description: string;
}

export const Card: FunctionComponent<ICard> = ({
  image,
  name,
  description,
}) => {
  return (
    <>
      <div className="card h-100">
        <div className="overflow">
          <img
            src={`/${image}`}
            alt="project"
            className="img-fluid card-img-top"
          />
        </div>

        <div className="card-body">
          <h3>{name}</h3>
          <p>{description}</p>
          <a href="#!">Know more</a>
        </div>
      </div>
    </>
  );
};
