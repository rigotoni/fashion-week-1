import styled, { keyframes } from 'styled-components';
import theme from '../utils/theme';
import Container from './Container';

const EventInfo = props => {
    return (
        <StyledEventInfo size="full" flexDirection="column" className="event-info">
            <Container className="info-container"  size="large"
                flexDirection="column">
                <div className="info-block" data-aos="fadeInUp">
                    <div className="event-info-content">
                        <h2>High Fashion Now on the Metaverse</h2>
                        <p>
                            The world's greatest brands are coming to Decentraland on this fabulous event.  The world's greatest brands are coming to Decentraland on this fabulous event.  The world's greatest brands are coming to Decentraland on this fabulous event. 
                        </p>
                        <a className="info-cta" href="#">
                            Learn More
                        </a>
                    </div>
                    <div className="floating-content">
                        <div className="striped-circle"></div>
                    </div>
                </div>
                <div className="info-block" data-aos="fadeInUp">
                    <div className="event-info-content">
                        <h2>High Fashion Now on the Metaverse</h2>
                        <p>
                            The world's greatest brands are coming to Decentraland on this fabulous event.  The world's greatest brands are coming to Decentraland on this fabulous event.  The world's greatest brands are coming to Decentraland on this fabulous event. 
                        </p>
                        <a className="info-cta" href="#">
                            Learn More
                        </a>
                    </div>
                    <div className="floating-content">
                        <div className="striped-circle"></div>
                    </div>
                </div>
            </Container>
        </StyledEventInfo>
    )
}

const stripedCircleRotate = keyframes`
    0% {transform: rotate(0deg)};
    100% {transform: rotate(360deg)};
`;

const StyledEventInfo = styled(Container)`
    .info-container {
        .info-block {
            width: 600px;
            margin-bottom: 440px;
            .floating-content {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                .striped-circle {
                    width: 200px;
                    height: 200px;
                    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='%238B8B8BFF' stroke-width='1' stroke-dasharray='10%25%2c 10%25' stroke-dashoffset='12' stroke-linecap='butt'/%3e%3c/svg%3e");
                    border-radius: 100px;
                    position: absolute;
                    top: -100px;
                    right: -20;
                    animation: 10s infinite ${stripedCircleRotate};
                }
            }
            &:nth-child(even) {
                margin-left: auto;
            }
            .floating-content {
                z-index: 1;
            }
            .event-info-content {
                z-index: 2;
                position: relative;
                h2 {
                    font-size: 72px;
                    line-height: 68px;
                    letter-spacing: 0.1em;
                    color: ${props => props.theme.color.gray900};
                    padding-left: 120px;
                    margin-bottom: 24px;
                }
                p {
                    color: ${props => props.theme.color.gray800};
                    font-family: Inter;
                    font-weight: 200;
                    font-size: 24px;
                    line-height: 32px;
                    margin-bottom: 48px;
                }
                .info-cta {
                    background: ${props => props.theme.color.gray900};
                    color: ${props => props.theme.color.white};
                    font-size: 32px;
                    letter-spacing: 0.1em;
                    padding: 12px 32px;
                }
            }
        }
    }
`;

export default EventInfo;