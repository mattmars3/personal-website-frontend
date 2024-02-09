import styles from './Hello.module.css';
import Box from '@mui/material/Box';

export default function Hello() {
    return (<div className={styles.Hello}>
        <h1>
            <b>Hello</b>, I am Matt Marsico.
        </h1>
        <h3>
            I am a software developer, musician, and entrepeneur.
        </h3>
    </div>);
}