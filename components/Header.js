import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => {
   
    return (<div>
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/example" as="/test" >
          <a style={linkStyle}>Example</a>
        </Link>          
        <Link href="/showcase/home" as="/tecnopress/" >
          <a style={linkStyle}>Tecnopress</a>
        </Link>
        <Link href="/showcase/home" as="/beatrizuezu/" >
          <a style={linkStyle}>Beatriz</a>
        </Link>
        <Link href="/showcase/home" as="/naoexistemesmo/" >
          <a style={linkStyle}>Não Existe</a>
        </Link>
    </div>)
    
}

export default Header