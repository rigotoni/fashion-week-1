import Image from 'next/image';
import styled from 'styled-components';
import theme from '../utils/theme';
import Container from './Container';
import CTA from './CTA';

const Navbar = props => {

    const {
        dataAos
    } = props;

    return (
        <StyledNavbar>
            <Container size={'large'} className={'navbar-inner-container'}>
                <Image className="logo" src="/NavbarLogo.png" alt="Decentraland" width={167} height={42} />
                <nav>
                    <ul>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Agenda</a>
                        </li>
                        <li>
                            <a href="#">Zones</a>
                        </li>
                    </ul>
                </nav>
            </Container>
        </StyledNavbar>
    )
}

const StyledNavbar = styled.section`
    height: 80px;
    z-index: 10;
    position: fixed;    
    top: 0;
    width: 100%;
    backdrop-filter: blur(15px);
    background: rgba(255,255,255, 0.8);
    /* box-shadow: 0 2px 10px 0px rgba(0,0,0,0.2); */
    .navbar-inner-container {
        height: inherit;
        display: flex;
        align-items: center;
        position: relative;
        nav {
            margin-left: auto;
            ul {
                display: flex;
                li {
                    margin-left: 62px; 
                    font-size: 16px;
                    font-weight: 500;
                    text-align: right;
                    line-height: 40px;
                    font-family: Inter;
                    a {
                        transition: 0.1s ease-in-out all;
                        color: ${props => props.theme.color.black};
                        letter-spacing: 0em;
                        position: relative;
                        &:after {
                            position: absolute;
                            content: '';
                            height: 1px;
                            width: 0;
                            left: 0;
                            bottom: -6px;
                            background: ${props => props.theme.color.red};
                            transition: 0.25s ease-in-out all;
                        }
                        &:hover {
                            &:after {
                                width: 100%;
                            }
                        }
                    }
                }
            }
        }
    }
`;

export default Navbar;