import styled from 'styled-components';
import theme from '../utils/theme';
import Container from './Container';

const Zones = props => {
    return (
        <StyledZones size="full">
            <Container size="large" className="zones-container">
                <h2>ZONES</h2>
            </Container>
        </StyledZones>
    )
}

const StyledZones = styled(Container)`
    height: 342px;
    background: ${props => props.theme.color.black};
    .zones-container {
        padding: 80px 0;
        h2 {
            color: white;
            font-size: 80px;
            letter-spacing: 0.1em;
        }
    }
`;

export default Zones;