import styled from 'styled-components';
import Container from './Container';

const EventSchedule = props => {
    return (
        <StyledEventSchedule size="full" flexDirection="column" className="schedule-info">
            <Container className="schedule-container"  size="large"
                flexDirection="column">
                <h2>SCHEDULE</h2>
                {/* <DaySelector /> */}
                {/* <DayEvents /> */}
            </Container>
        </StyledEventSchedule>
    )
}

const StyledEventSchedule = styled(Container)`
    .schedule-container {
        .schedule-block {
            h2 {
                font-size: 72px;
                line-height: 68px;
                letter-spacing: 0.1em;
                color: ${props => props.theme.color.gray200};
                padding-left: 120px;
                margin-bottom: 20px;
            }
        }
    }
`;

export default EventSchedule;