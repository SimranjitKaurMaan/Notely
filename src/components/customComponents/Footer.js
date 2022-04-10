import {Link} from 'react-router-dom';

export const Footer = () => {
    return <><footer>
    <div className="footer-content flex-row-wrap-space-around">
        <div className="logo-container footer-logo">
            <Link to="/">
                <h1>Notely
                </h1>
            </Link>
        </div>
        <div className="flex-col-wrap-start">
            <h2 className="footer-heading">Location</h2>
            <div>121 14241 NE</div>
            <div>Windoville Road, 90072</div>
        </div>
        <div className="flex-col-wrap-start">
            <h2 className="footer-heading">Get in touch</h2>
            <div>info@artstore</div>
            <div>simranjitk@gmail.com</div>
        </div>
        <div className="flex-col-wrap-start">
            <h2 className="footer-heading">Company</h2>
            <a href="/" rel="noreferrer">Terms and conditions</a>
            <a href="/" rel="noreferrer">Privacy policy</a>
        </div>
        <div className="flex-col-wrap-start">
            <h2 className="footer-heading">Follow us</h2>
            <div className="flex-row-wrap-space-around">
            <a target="_blank" rel="noreferrer" href="https://github.com/SimranjitKaurMaan">
                <i className="fab fa-github fa-2x" aria-hidden="true"></i>
            </a>
            <a target="_blank" rel="noreferrer" href="https://in.linkedin.com/in/simranjitkaurmec">
                <i className="fab fa-linkedin fa-2x" aria-hidden="true"></i>
            </a>
            <a target="_blank" rel="noreferrer" href="https://twitter.com/Simranjit1994">
                <i className="fab fa-twitter fa-2x" aria-hidden="true"></i>
            </a>
            </div>
        </div>
    </div>
</footer></>
}