import Image from 'next/image';
import styled from 'styled-components';
import Container from './Container';
import CTA from './CTA';

const Navbar = props => {

    const {
        dataAos
    } = props;

    return (
        <StyledNavbar data-aos={dataAos}>
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
    z-index: 1;
    .navbar-inner-container {
        height: 120px;
        display: flex;
        align-items: center;
        position: relative;
        nav {
            margin-left: auto;
            position: absolute;
            top: 32px;
            right: 0;
            ul {
                display: flex;
                flex-direction: column;
                li {
                    margin-left: 62px;
                    font-family: Tourney;
                    font-size: 32px;
                    font-weight: 100;
                    text-align: right;
                    line-height: 40px;
                    a {
                        transition: 0.1s ease-in-out font-weight;
                        &:hover {
                            font-weight: 300;
                        }
                    }
                }
            }
        }
    }
`;

export default Navbar;