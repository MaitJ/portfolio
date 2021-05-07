import React, {useEffect} from 'react';
import Navbar from './Navbar';
import ReactGA from 'react-ga';


const App = () => {


    ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_CODE);
    console.log("See on GA kood" + process.env.REACT_APP_GA_TRACKING_CODE);

    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    })

    return(
        <React.Fragment>
            <Navbar />
        </React.Fragment>
    );
};

export default App;