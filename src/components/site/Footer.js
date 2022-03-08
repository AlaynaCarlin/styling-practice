import {Row} from 'reactstrap';

const Footer = () => {

    return(
        <footer>
            <Row>
                <p>&copy; Alayna Carlin 2022</p>
                <a href='https://github.com/AlaynaCarlin' target={blank}>GitHub</a>
                <a href='https://www.linkedin.com/in/alayna-carlin-865326221/' target={blank}>LinkedIn</a>
                <a href='https://alaynacarlin.github.io/'>Portfolio</a>
            </Row>
        </footer>
    );

};

export default Footer;