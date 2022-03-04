import styled from 'styled-components';
import theme from '../utils/theme';
import Container from './Container';

const BrandBanner = props => {
    return (
        <StyledBrandBanner size="full">

        </StyledBrandBanner>
    )
}

const StyledBrandBanner = styled(Container)`
    height: 342px;
    background: ${props => props.theme.color.black};
`;

export default BrandBanner;