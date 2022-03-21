import styled from 'styled-components';
import theme from '../utils/theme';
import Container from './Container';
import Marquee from 'react-fast-marquee';

const LowerBanner = props => {
    return (
        <StyledLowerBanner size="full">
            <Marquee
                gradient={false}
                speed={150}
            >
                <span>CATWALKS</span> | 
                <span>NFTS</span> | 
                <span>WEARABLES</span> | 
                <span>POAPS</span> /
                <span>AFTER-PARTIES</span> /
                <span>ARTISTS</span> /
                <span>DJS</span> /
                <span>DIGITAL FASHION</span> /
                <span>LUXURY BRANDS</span> /
                <span>UPCOMING DESIGNERS</span> /
                <span>DIGITAL + PHYSICAL IMMERSIVE EXPERIENCES</span> /
                <span>MAINSTREAM BRANDS AND MORE</span> / 
            </Marquee>
        </StyledLowerBanner>
    )
}

const StyledLowerBanner = styled(Container)`
    height: 120px;
    background: ${props => props.theme.color.red};
    font-size: 90px;
    color: white;
    letter-spacing: 0.05em;
    span {
        margin: 0 30px;
        color: ${props => props.theme.color.black};
    }
    @media screen and (max-width: ${props => props.theme.breakpoints.m}) {
        height: 64px;
        font-size: 32px;
    }
`;

export default LowerBanner;