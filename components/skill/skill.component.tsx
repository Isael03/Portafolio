import { FunctionComponent } from "react";
import { skills } from "../../profile";

interface ISkill {
  name: string;
}

const SkillList: FunctionComponent = () => {
  return (
    <>
      {skills.map(({ skill, percentage }, i) => (
        <div className="py-3" key={i}>
          <h5>{skill}</h5>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        </div>
      ))}
    </>
  );
};

export const Skill: FunctionComponent<ISkill> = ({ name }) => {
  return (
    <div className="card bg-light">
      <div className="card-body">
        <section>
          <h2>{name}</h2>
          <SkillList />
        </section>
      </div>
    </div>
  );
};
