import { BrowserRouter as Router, Link, Redirect, Route } from 'react-router-dom';
import RowGallery from "./RowGallery.js";
import Main from './Main';
import Contact from './Contact';
import About from './About';
import ReactGA from 'react-ga';
import createHistory from 'history/createBrowserHistory';


function Navbar() {

    // const history = createHistory()
    // ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_CODE);
    // history.listen((location, action) => {
    //     ReactGA.pageview(location.pathname + location.search);
    //     console.log(location.pathname)
    // });
    
    return (
        <Router>
            <div>
                <section className='navbar'>
                        <Link to="/home">Home </Link>
                        <Link to="/gallery">Gallery </Link>
                        <Link to="/about">About </Link>
                        <Link to="/contact">Contact </Link>
                </section>
                <section className='content'>
                    <Route path="/gallery" component={RowGallery}/>
                    <Route path="/home" component={Main} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/about" component={About} />
                    <Route path="/"><Redirect to="/home"></Redirect></Route>
                </section>
            </div>
        </Router>
    );
}

export default Navbar;