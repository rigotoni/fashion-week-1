import styled from 'styled-components';
import theme from '../utils/theme';
import Container from './Container';
import Marquee from 'react-fast-marquee';

const TextBanner = props => {
    return (
        <StyledTextBanner size="full">
            <Marquee
                gradient={false}
                speed={150}
            >
                <span>+ 60 FASHION BRANDS</span> /
                <span>+ 500 LOOKS</span> /
                <span>+ 4 AFTER PARTIES</span> /
                <span>MANY ARTISTS</span> / 
            </Marquee>
        </StyledTextBanner>
    )
}

const StyledTextBanner = styled(Container)`
    height: 120px;
    background: ${props => props.theme.color.red};
    font-size: 90px;
    span {
        margin: 0 25px;
    }
`;

export default TextBanner;