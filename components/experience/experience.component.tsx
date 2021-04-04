import {FunctionComponent} from 'react'
import {experiences} from '../../profile'
import Link from 'next/link';

interface IExperience{
    name? : string
}

export const Experience:FunctionComponent<IExperience> = ({name}) => {
  return(
      
          <div className="card bg-light">
            <div className="card-body">
              <section>
                <h2>Experience</h2>
                <ul>
                  {experiences.map(({ title, description, from, to }, i) => (
                    <li key={i}>
                      <h3>{title}</h3>
                      <h4>
                        {from} - {to}
                      </h4>
                      <p className="text-justify pr-4">{description}</p>
                    </li>
                  ))}
                </ul>
                <Link href="/experiences">
                  <a className="btn btn-ligth">Know here</a>
                </Link>
              </section>
            </div>
          </div>
  )
}