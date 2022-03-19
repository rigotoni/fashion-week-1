import styled, { keyframes } from 'styled-components';
import Image from 'next/image';
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
                <Image src="/MVFW.png" alt="Metaverse Fashion Week" width={800} height={300} />
                <h1>METAVERSE FASHION WEEK</h1>
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
        .date {
            font-size: 40px;
            letter-spacing: 0.2em;
        }
        h1 {
            font-size: 58px;
            line-height: 60px;
            margin: 12px auto 40px;
            letter-spacing: 0.2em;
            font-weight: 200;
        }
    }
`;

export default HomepageHero;