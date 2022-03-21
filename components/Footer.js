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
                            <span className="separator">/</span>
                            <li>
                                <a href="#">Contact Form</a>
                            </li>
                            <span className="separator">/</span>
                            <li>
                                <a href="#">Press</a>
                            </li>
                            <span className="separator">/</span>
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>
                            <span className="separator">/</span>
                            <li>
                                <a href="#">Code of Ethics</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-links social-icons">
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
    @media screen and (max-width: ${props => props.theme.breakpoints.m}) {
        .footer-content {
            .footer-top-content {
                flex-direction: column;
                .footer-links {
                    width: 100%;
                    ul {
                        width: 100%;
                        flex-direction: column;
                        justify-content: center;
                        width: unset;
                        li {
                            margin: 0;
                            padding: 0;
                            margin-bottom: 8px;
                            text-align: center;
                        }
                        .separator {
                            display: none;
                        }
                    }
                }
                .social-icons {
                    margin-top: 40px;
                    display: flex;
                    justify-content: center;
                    ul {
                        flex-direction: row;
                        width: unset;
                        li {
                            margin: 0 8px;
                        }
                    }
                }
            }
        }
	}
`;

export default Footer;