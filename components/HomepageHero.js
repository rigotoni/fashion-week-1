import styled from 'styled-components';
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
                <span className="date">24 - 27 MARCH</span>
                <Image src="/MVFWWhiteBg.png" alt="Metaverse Fashion Week" width={800} height={300} />
                <h1>METAVERSE FASHION WEEK</h1>
                <Countdown />
            </Container>
        </StyledHomepageHero>
    )
}

const StyledHomepageHero = styled.section`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
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