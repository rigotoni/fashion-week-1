import styled from 'styled-components';

const CTA = props => {
    const {
        href,
        children
    } = props;

    return (
        <StyledCTA href={href} className="cta">
            {children}
        </StyledCTA>
    )
}

const StyledCTA = styled.a`
    background: ${props => props.theme.color.red};
    color: ${props => props.theme.color.white};
    padding: 22px 32px;
    font-size: 22px;
    letter-spacing: 0.1em;
`;

export default CTA;