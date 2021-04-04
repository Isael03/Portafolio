import {FunctionComponent} from 'react'
import Link from 'next/link'

interface IIntroduction{
  name:string,
  description: string,
  job?: string,
  textButton?:string
}

const Introduction:FunctionComponent<IIntroduction> = ({name= 'Nombre y Appelidos', job='Rol', description, textButton='Contáctame'}) => {
  return(
      <div className="col-md-12">
          <div className="card card-body bg-secondary text-light">
            <div className="row">
              <div className="col-md-4">
                <img
                  src="/ryan-ray-profile2.jpeg"
                  alt="Image"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-8">
                <section>
                  <h1>{name}</h1>
                    <h3>{job}</h3>
                    <p className="text-justify">
                      {description}
                    </p>
                    <Link href="/contact-me">
                    <a className="btn btn-primary">
                      {textButton}
                    </a>
                    </Link>
                    
                </section>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Introduction