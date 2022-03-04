import styled from "styled-components";
import Container from "./Container";
import { FaDiscord, FaRedditAlien, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = props => {
    return (
        <StyledFooter>
            <Container size="large" className="footer-content">
                <div className="footer-lower-content">
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
                            /
                            <li className="copyright">
                                2022 Decentraland®
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
            </Container>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    background: ${props => props.theme.color.red};
    .footer-content {
        padding: 32px 0;
        .footer-lower-content {
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
`;

export default Footer;