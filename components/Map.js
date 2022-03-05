import styled from 'styled-components';
import theme from '../utils/theme';
import Container from './Container';

const Map = props => {
    return (
        <StyledMap size="full">
            <Container size="large" className="map-container">
                <h2>MAP</h2>
            </Container>
        </StyledMap>
    )
}

const StyledMap = styled(Container)`
    height: 342px;
    background: ${props => props.theme.color.black};
    .map-container {
        padding: 80px 0;
        h2 {
            color: white;
            font-size: 80px;
            letter-spacing: 0.1em;
        }
    }
`;

export default Map;