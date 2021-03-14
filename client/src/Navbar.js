import { BrowserRouter as Router, Link, Redirect, Route } from 'react-router-dom';
import Gallery from "./Gallery.js";
import Main from './Main';



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
                    <Route path="/gallery" component={Gallery}/>
                    <Route path="/home" component={Main} />
                    <Route path="/"><Redirect to="/home"></Redirect></Route>
                </section>
            </div>
        </Router>
    );
}

export default Navbar;