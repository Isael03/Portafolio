import PortfolioLayout from "../layouts/portfolio/portfolio.layout";

const _error = ({statusCode}) => {
    const pageTitle = 'Error'
    return(
        <PortfolioLayout pageTitle={pageTitle}>
            {
                statusCode ? <p className="text-center">No se pudo cargar la página: Código de estado {statusCode}</p>
                : <p className="text-center">No se pudo cargar la página</p>
            }
            
        </PortfolioLayout>
    )
  
}

export default _error;
