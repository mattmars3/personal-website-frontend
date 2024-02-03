import { Box, Grommet, Nav, Anchor, Carousel, Header, Avatar } from 'grommet';
import getTheme from './theme';
import './anchorTheme.css';

function Homepage() {
    const websiteDarkTheme = getTheme(); 
    
    const items = [
        {label: 'About Me', href: '#'},
        {label: 'Professional', href: '#'},
        {label: 'Portfolio', href: '#'}
    ];

    return (
    <Grommet theme={websiteDarkTheme}>
        <Header pad="small">
            <Nav direction="row">
              {items.map((item) => (
                <Anchor href={item.href} label={item.label} key={item.label} />
              ))}
            </Nav>
          </Header>
        <h1>Hello, I am Matt Marsico.</h1>
        <h3></h3>
        
    </Grommet>
    )
}

export default Homepage;