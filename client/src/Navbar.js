import { BrowserRouter as Router, Link, Redirect, Route } from 'react-router-dom';
import RowGallery from "./RowGallery.js";
import Main from './Main';
import Contact from './Contact';



function Navbar() {

    
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
                    <Route path="/"><Redirect to="/home"></Redirect></Route>
                </section>
            </div>
        </Router>
    );
}

export default Navbar;