import {React} from "react";
import './../App.css';
import ProfilePicture from "./../img/profile.png";
import { FaLinkedinIn, FaGithub, FaTwitter, FaYoutube, FaMapMarkerAlt} from "react-icons/fa";
const PersonBar = (props) => {
    return(
        <div className="titleProfile">
            <img className="profilePic"src={ProfilePicture}/>
            <div>
                <h2>Hugo Alberto Rivera Diaz</h2>
                <h4>💻Software Developer⚛️🐍</h4>
                <h5>Villahermosa, Tabasco🏡🐢</h5>
                <h6>
                    <a href="mailto:hugorivera.cool.player@gmail.com">
                        📧hugorivera.cool.player@gmail.com
                    </a>
                </h6>
            </div>
            <div className="social">
                <a
                    href="https://www.linkedin.com/in/hug0albert0/"
                    target="_blank"
                    className="socialLink"
                >
                    <FaLinkedinIn size="1.5em"/>
                </a>
                <a
                    href="https://github.com/Hug0Albert0"
                    target="_blank"
                    className="socialLink"
                >
                    <FaGithub size="1.5em"/>
                </a>
                <a
                    href="https://twitter.com/pozoldotpy"
                    target="_blank"
                    className="socialLink"
                >
                    <FaTwitter size="1.5em"/>
                </a>
                <a
                    href="https://www.youtube.com/channel/UCMZIbQSd0mwgssKJgwfIVJg"
                    target="_blank"
                    className="socialLink"
                >
                    <FaYoutube size="1.5em"/>
                </a>
            </div>
        </div>
    )
};

export default PersonBar;
