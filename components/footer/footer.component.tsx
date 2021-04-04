import {FunctionComponent} from 'react'

interface IFooterProps{
    name:string,
    startYear: number
}

const Footer:FunctionComponent<IFooterProps> = ({name, startYear}) => {
  return (
      <footer className="bg-dark text-light text-center pt-2">
            <div className="container">
              <h1>{name}</h1>
              <p>{startYear} - {new Date().getFullYear()}</p>             
            </div>
          </footer>
  )
}

export default Footer;