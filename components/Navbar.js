import Image from 'next/image';
import styled from 'styled-components';
import Container from './Container';
import CTA from './CTA';

const Navbar = props => {

    const {
        dataAos
    } = props;

    return (
        <StyledNavbar>
            <Container size={'large'} className={'navbar-inner-container'}>
                <Image src="/NavbarLogo.svg" alt="Decentraland" width={167} height={90} />
                <nav>
                    <ul>
                        <li>
                            <a href="#">ABOUT</a>
                        </li>
                        <li>
                            <a href="#">AGENDA</a>
                        </li>
                        <li>
                            <a href="#">MAP</a>
                        </li>
                    </ul>
                </nav>
            </Container>
        </StyledNavbar>
    )
}

const StyledNavbar = styled.section`
    height: 120px;
    z-index: 10;
    .navbar-inner-container {
        height: 120px;
        display: flex;
        align-items: center;
        position: relative;
        nav {
            margin-left: auto;
            position: fixed;
            top: 32px;
            right: 12vw;
            ul {
                display: flex;
                flex-direction: column;
                li {
                    margin-left: 62px;
                    font-size: 32px;
                    font-weight: 100;
                    text-align: right;
                    line-height: 40px;
                    a {
                        transition: 0.1s ease-in-out all;
                        text-shadow: -1px 1px 0 ${props => props.theme.color.gray500},
                            1px 1px 0 ${props => props.theme.color.gray500},
                            1px -1px 0 ${props => props.theme.color.gray500},
                            -1px -1px 0 ${props => props.theme.color.gray500};
                        color: white;
                        letter-spacing: 0.2em;
                        &:hover {
                            color: black;
                            text-shadow: -1px 1px 0 ${props => props.theme.color.white},
                                1px 1px 0 ${props => props.theme.color.white},
                                1px -1px 0 ${props => props.theme.color.white},
                                -1px -1px 0 ${props => props.theme.color.white};
                        }
                    }
                }
            }
        }
    }
`;

export default Navbar;