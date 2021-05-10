import React, {useEffect} from 'react';
import Navbar from './Navbar';
import createHistory from 'history/createBrowserHistory';
import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';


ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_CODE)
const browserHistory = createBrowserHistory()
browserHistory.listen((location, action) => {
    ReactGA.pageview(location.pathname + location.search)
})

const App = () => {
    

    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search)
    }, [])

    // const script = document.createElement("script");
    // script.async = true;
    // script.text = process.env.REACT_APP_GA_TRACKING_CODE;
    // document.body.appendChild(script);

    // ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_CODE);
    // console.log("See on GA kood" + process.env.REACT_APP_GA_TRACKING_CODE);

    // useEffect(() => {
    //     ReactGA.pageview(window.location.pathname + window.location.search);
    // })

    return(
        <React.Fragment>
            <Navbar />
        </React.Fragment>
    );
};

export default App;