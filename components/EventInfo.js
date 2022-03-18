import styled, { keyframes } from 'styled-components';
import theme from '../utils/theme';
import Image from 'next/image';
import Container from './Container';

const EventInfo = props => {
    return (
        <StyledEventInfo size="full" flexDirection="column" className="event-info">
            <Container className="info-row"  size="full"
                flexDirection="column">
                <div className="floating-content">
                    <div className="floating-image floating-image-5 rellax" data-rellax-percentage="0.5"data-rellax-speed="-2" data-aos="fadeInUp">
                        <Image src="/Shoe.png" layout="fill" />
                    </div>
                </div>
                <Container size="large" flexDirection="column">
                    <div className="info-block">
                        <div className="event-info-content" data-aos="fadeInUp">
                            <h2>High Fashion Now on the Metaverse</h2>
                            <p>
                                FOUR DAYS FILLED WITH GREAT CONTENT FOR THE ONES WITH STYLE 
                            </p>
                            <a className="info-cta" href="#">
                                Learn More
                            </a>
                        </div>
                        <div className="relative-floating-content">
                            <div className="striped-circle"></div>
                            <div className="floating-image floating-image-1 rellax" 
                            data-aos="fadeInUp" 
                            data-rellax-percentage="0.5" data-rellax-speed="-1">
                                <Image layout='fill' src="/ClothingArtisant.png" />
                            </div>
                            <div className="floating-image floating-image-2 rellax" 
                            data-aos="fadeInUp" 
                            data-rellax-percentage="0.5"data-rellax-speed="-2" >
                                <Image src="/Helmet.jpg" layout="fill" />
                            </div>
                            <div className="floating-image floating-image-3 rellax" 
                            data-aos="fadeInUp" 
                            data-rellax-percentage="0.5"data-rellax-speed="-2" >
                                <Image src="/ClothingYellowBG.png" layout="fill" />
                            </div>
                            <div className="floating-image floating-image-4 rellax" 
                            data-aos="fadeInUp" 
                            data-rellax-percentage="0.5" data-rellax-speed="-2" >
                                <Image src="/ClothingBlackNeonBG.png" layout="fill" />
                            </div>

                            <div className="floating-image floating-image-6 rellax" 
                            data-aos="fadeInUp" 
                            data-rellax-percentage="0.5" data-rellax-speed="-2" >
                                <Image src="/Fashion_Killa_Galaxy_02.png" layout="fill" />
                            </div>
                            <div className="floating-image floating-image-7 rellax" 
                            data-aos="fadeInUp" 
                            data-rellax-percentage="0.5" data-rellax-speed="-2" />

                            <div className="floating-image floating-image-8 rellax" 
                            data-aos="fadeInUp" 
                            data-rellax-percentage="0.5" data-rellax-speed="-1" >
                                <Image src="/watch.png" layout="fill" />
                            </div>
                            <div className="floating-image floating-image-9 rellax" 
                            data-aos="fadeInUp" 
                            data-rellax-percentage="0.5" data-rellax-speed="-1" >
                                <Image src="/jacket.png" layout="fill" />
                            </div>
                            <div className="floating-image floating-image-10 rellax" 
                            data-aos="fadeInUp" 
                            data-rellax-percentage="0.5" data-rellax-speed="-1" >
                                <Image src="/venue.png" layout="fill" />
                            </div>
                        </div>
                    </div>
                </Container>
            </Container>
            <Container className="info-row"  size="full">
                <Container size="large" flexDirection="column">
                    <div className="info-block">
                        <div className="event-info-content" data-aos="fadeInUp">
                            <span className="content-copy">
                                <span className="top-content">FASHION <span>WITHOUT</span> LIMITS</span> 
                                <br/>
                                <span className="bottom-content">AS NEVER SEEN BEFORE</span>
                            </span>
                        </div>
                        <div className="floating-content" data-aos="fadeInUp">
                            <div className="striped-circle"></div>
                        </div>
                    </div>
                </Container>
            </Container>
        </StyledEventInfo>
    )
}

const stripedCircleRotate = keyframes`
    0% {transform: rotate(0deg)};
    100% {transform: rotate(360deg)};
`;

const StyledEventInfo = styled(Container)`
    .info-row {
        position: relative;
        &:nth-child(even) {
            .info-block {
                margin-left: auto;
            }
        }
        &:nth-child(2) {
            .info-block {
                .event-info-content {
                    display: flex;
                    flex-direction: column;
                    .content-copy {
                        font-size: 80px;
                        line-height: 80px;
                        .bottom-content {
                            color: ${props => props.theme.color.red}
                        }
                    }
                }
                .info-cta {
                    width: fit-content;
                }
            }
        }
        .floating-content {
            .floating-image {
                position: absolute;
                &.floating-image-5 {
                    width: 1097px;
                    height: 770px;
                    top: 100px;
                    right: -40vw;
                    z-index: 2;
                }
            }
        }
        .info-block {
            width: 600px;
            margin-bottom: 440px;
            .relative-floating-content {
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
                    animation: 10s infinite ${stripedCircleRotate} linear;
                }
            }
            &:first-child {
                .relative-floating-content {
                    .floating-image {
                        position: absolute;
                        box-shadow: 0px 4px 18px 0px rgba(0,0,0,0.2);
                    }
                    .floating-image-1 {
                        width: 280px;
                        height: 400px;
                        top: -214px;
                        left: -210px;
                    }
                    .floating-image-2 {
                        top: 200px;
                        left: -340px;
                        width: 300px;
                        height: 300px;
                        box-shadow: none;
                    }
                    .floating-image-3 {
                        width: 395px;
                        height: 432px;
                        top: 0px;
                        left: 700px;
                        z-index: 2;
                    }
                    .floating-image-4 {
                        width: 320px;
                        height: 500px;
                        top: 90px;
                        left: 1020px;
                        z-index: 0;
                    }
                    .floating-image-6 {
                        width: 454px;
                        height: 454px;
                        top: 680px;
                        left: 0px;
                        z-index: 1;
                        background: white;
                        border: 3px dashed violet;
                    }
                    .floating-image-7 {
                        width: 454px;
                        height: 454px;
                        background: linear-gradient(156.44deg, #FF6CF0 19.14%, #FEF8FF 84.82%);
                        top: 650px;
                        left: -30px;
                        z-index: 0;
                    }
                    .floating-image-8 {
                        width: 300px;
                        height: 300px;
                        top: -240px;
                        left: 980px;
                        z-index: 12;
                        box-shadow: none;
                    }
                    .floating-image-9 {
                        width: 300px;
                        height: 300px;
                        top: 820px;
                        left: 1080px;
                        z-index: 12;
                    }
                    .floating-image-10 {
                        width: 800px;
                        height: 500px;
                        top: 1020px;
                        left: -420px;
                        z-index: 0;
                    }
                }
            }
            .relative-floating-content {
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
                    font-size: 40px;
                    line-height: 56px;
                    margin-bottom: 48px;
                }
                .info-cta {
                    background: ${props => props.theme.color.gray900};
                    color: ${props => props.theme.color.white};
                    font-size: 32px;
                    letter-spacing: 0.1em;
                    padding: 12px 32px;
                    transition: 0.1s ease-in-out all;
                    position: relative;
                    &:hover {
                        background: white;
                        color: ${props => props.theme.color.black};
                        transform: translate(10px, -10px);
                        border: 1px solid ${props => props.theme.color.black};
                        box-shadow: -10px 10px 0px 0px ${props => props.theme.color.black};
                    }
                }
            }
        }
    }
`;

export default EventInfo;