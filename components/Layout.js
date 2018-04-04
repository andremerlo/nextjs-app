import Header from './Header'
import Footer from './Footer'

const Layout = (props) => (
    <div>
        <Header />
        <div style={{margin: '20px'}}>
            {props.children}
        </div>        
        <Footer />
    </div>   
)

export default Layout