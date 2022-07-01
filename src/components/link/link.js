import Link from 'next/link'
import LinkEstilizado from './styledLink'

export default function NextLink({children, href, ...props}){
    return(
        <Link href={href} passHref >
        <LinkEstilizado>
            {children}
        </LinkEstilizado>
        </Link>
    )
 
} 