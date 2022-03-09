import styled from "styled-components";
import Container from "./Container";
import { FaDiscord, FaRedditAlien, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = props => {
    return (
        <StyledFooter>
            <Container size="large" className="footer-content" flexDirection="column">
                <div className="footer-top-content">
                    <div className="footer-links">
                        <ul>
                            <li>
                                <a href="#">FAQ</a>
                            </li>
                            /
                            <li>
                                <a href="#">Contact Form</a>
                            </li>
                            /
                            <li>
                                <a href="#">Press</a>
                            </li>
                            /
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>
                            /
                            <li>
                                <a href="#">Code of Ethics</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-links">
                        <ul>
                            <li>
                                <a href="#">
                                    <FaDiscord/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <FaGithub/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <FaRedditAlien/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <FaTwitter/>    
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <FaInstagram/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-lower-content">
                    Decentraland® 2022
                </div>
            </Container>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    background: ${props => props.theme.color.red};
    .footer-content {
        padding: 32px 0;
        .footer-top-content {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .footer-links {
                display: flex;
                justify-content: center;
                ul {
                    display: flex;
                    font-family: Inter;
                    li {
                        margin: 0 12px;
                        a {
                            color: ${props => props.theme.color.white};
                            font-weight: 600;
                        }
                        &:first-child {
                            margin-left: 0;
                        }
                        &:last-child {
                            margin-right: 0;
                        }
                        &.copyright {
                            font-weight: 200;
                            color: ${props => props.theme.color.white};

                        }
                    }
                }
            }
        }
    }
    .footer-lower-content {
        align-items: center;
        justify-content: center;
        width: 100%;
        text-align: center;
        font-family: Inter;
        margin-top: 30px;
        color: white; 
        opacity: 0.7;
        font-size: 12px; 
    }
`;

export default Footer;