import Head from 'next/head'
import {FunctionComponent} from 'react'

interface IHeadProps{
    pageTitle?: string,
    children?: any
}

const CustomHead:FunctionComponent<IHeadProps> = ({children, pageTitle}) => (
    <Head>
        <title>{pageTitle}</title>
        {children}
    </Head>
)

export default CustomHead
