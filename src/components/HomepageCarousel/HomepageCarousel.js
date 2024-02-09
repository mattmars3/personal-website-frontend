import BehindHeadImage from '../../assets/HomepageCarousel/BehindHead.jpeg';
import FirstRockShow from '../../assets/HomepageCarousel/FirstRockShow.jpeg';

import styles from './HomepageCarousel.module.css'

function HomepageCarousel() {
    return (<div className={styles.HomepageCarousel}>
        <img src={BehindHeadImage} />
    </div>);
};


export default HomepageCarousel;