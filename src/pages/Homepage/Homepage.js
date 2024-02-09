import NavBar from "../../components/NavBar/NavBar";
import Hello from "../../components/Hello/Hello";
import Box from '@mui/material/Box';
import styles from "./Homepage.module.css"
import HomepageCarousel from "../../components/HomepageCarousel/HomepageCarousel";

import AboutMe from '../AboutMe/AboutMe';


function Homepage() {
    return <div>
        <NavBar />
        <div className={styles.Homepage}>
            <Hello />
        </div>
        <div className={styles.Homepage}>
            <HomepageCarousel />
        </div>
    </div>;
}

export default Homepage;