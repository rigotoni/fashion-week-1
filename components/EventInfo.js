import styled, { keyframes } from 'styled-components';
import theme from '../utils/theme';
import Container from './Container';

const EventInfo = props => {
    return (
        <StyledEventInfo size="full" flexDirection="column" className="event-info">
            <Container className="info-container"  size="large"
                flexDirection="column">
                <div className="info-block" data-aos="fadeInUp">
                    <h2>High Fashion Now on the Metaverse</h2>
                    <p>
                        The world's greatest brands are coming to Decentraland on this fabulous event.  The world's greatest brands are coming to Decentraland on this fabulous event.  The world's greatest brands are coming to Decentraland on this fabulous event. 
                    </p>
                    <a className="info-cta" href="#">
                        Learn More
                    </a>
                    <div className="floating-content">
                        <div className="striped-circle"></div>
                    </div>
                </div>
                <div className="info-block" data-aos="fadeInUp">
                    <h2>High Fashion Now on the Metaverse</h2>
                    <p>
                        The world's greatest brands are coming to Decentraland on this fabulous event.  The world's greatest brands are coming to Decentraland on this fabulous event.  The world's greatest brands are coming to Decentraland on this fabulous event. 
                    </p>
                    <a className="info-cta" href="#">
                        Learn More
                    </a>
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
            &:first-child {
                .floating-content {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    .striped-circle {
                        width: 200px;
                        height: 200px;
                        border-radius: 100px;
                        border: dashed 1px ${props => props.theme.color.gray800};
                        position: absolute;
                        top: -100px;
                        right: -20;
                        animation: 20s infinite ${stripedCircleRotate};
                    }
                }
            }
            &:nth-child(even) {
                margin-left: auto;
            }
            h2 {
                font-size: 72px;
                line-height: 68px;
                letter-spacing: 0.1em;
                color: ${props => props.theme.color.gray900};
                padding-left: 120px;
                margin-bottom: 20px;
            }
            p {
                color: ${props => props.theme.color.gray800};
                font-family: Inter;
                font-weight: 200;
                font-size: 24px;
                line-height: 32px;
                margin-bottom: 40px;
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
`;

export default EventInfo;