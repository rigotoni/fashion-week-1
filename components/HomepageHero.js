import styled, { keyframes } from 'styled-components';
import NextImage from './NextImage';
import Container from './Container';
import Countdown from './Countdown';

const HomepageHero = props => {

    const {
        dataAos
    } = props;

    return (
        <StyledHomepageHero data-aos={dataAos} >
            <Container size={'large'} flexDirection={'column'} className={'hero-inner-container'}>
                <span className="date">23 - 27 MARCH</span>
                <NextImage src="/MVFW.png" alt="Metaverse Fashion Week" width={800} height={300} />
                <h1>METAVERSE FASHION WEEK</h1>
                <div className="logos-container">
                    <span className="label">Pioneered by</span>
                    <div className="logo">
                        <NextImage src={'/unxd-black-transparent.png'} alt={'UNXD'} title={'UNXD'} width={120} height={22}/>
                    </div>
                    <div className="logo">
                        <NextImage src={'/VGA_LOGO.png'} width={120} height={80} alt={'Vogue Arabia'} title={'Vogue '}/>
                    </div>
                </div>
                <Countdown />
                <div className="down-arrows">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </Container>
        </StyledHomepageHero>
    )
}

const blink = keyframes`
    0% {opacity: 0.3}
    25% {opacity: 1}
    50% {opacity: 0.3}
    100% {opacity: 0.3}
`;


const StyledHomepageHero = styled.section`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    .down-arrows {
        margin-top: 32px;
        div {
            width: 30px;
            height: 30px;
            background: none;
            border-top: 1px solid black;
            border-left: 1px solid black;
            transform: rotate(-135deg);
            animation: ${blink} 1s ease-in-out infinite forwards;
            position: relative;
            &:nth-child(2) {
                top: -8px;
                animation-delay: 0.33s;
            }
            &:nth-child(3) {
                top: -16px;
                animation-delay: 0.66s;
            }
        }
    }
    .hero-inner-container {
        align-items: inherit;
        height: 100%;
        padding-top: 80px;
        min-height: 980px;
        .logos-container {
            /* margin-top: 12px; */
            display: flex;
            align-items: center;
            margin-bottom: 12px;
            .label {
                font-family: Inter;
                margin-right: 12px;
                font-size: 12px;
                opacity: 0.5;
            }
            .logo {
                margin-right: 12px;
            }
        }
        .date {
            font-size: 40px;
            letter-spacing: 0.2em;
        }
        h1 {
            font-size: 58px;
            line-height: 60px;
            margin: 0px auto 0px;
            letter-spacing: 0.2em;
            font-weight: 200;
        }
    }
    @media screen and (max-width: ${props => props.theme.breakpoints.m}) {
        .down-arrows {
            transform: scale(0.5);
        }
        .hero-inner-container {
            padding-top: 0px;
            min-height: unset;
            height: unset;
            .logos-container {
                .logo {
                    width: 80px;
                }
                .label {
                    font-size: 10px;
                }
            }
            .date {
                font-size: 20px;
            }
            h1 {
                text-align: center;
                font-size: 40px;
                line-height: 42px;
            }
        }
    }
`;

export default HomepageHero;