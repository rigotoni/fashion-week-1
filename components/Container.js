import styled, {ThemeProvider} from 'styled-components';

const Container = (props) => {
	const {
		size,
		padding,
		margin,
		flex,
		flexDirection,
		children,
		className,
		dataAos,
		id
	} = props;
	return (
		<StyledContainer 
			className={`${size} ${className}`} 
			padding={padding} 
			margin={margin} 
			flex={flex}
			flexDirection={flexDirection}
			dataAos={dataAos}
			id={id}
		>
				{props.children}
		</StyledContainer>
	)
}

Container.defaultProps = {
	size: 'full',
	className: '',
	padding: '0px',
	margin: '0px auto',
	flex: true,
	flexDirection: 'row',
}

const StyledContainer = styled.div`
	display: ${props => props.flex ? 'flex' : 'block'};
	flex-direction: ${props => props.flexDirection};
	margin: ${props => props.margin};
	padding: ${props => props.padding};
	&.full {
		width: 100%;
		margin: 0 auto;
	}
	&.large {
		width: 1120px;
	}
	&.medium {
		width: 920px;
	}
	@media screen and (max-width: ${props => props.theme.breakpoints.m}) {
		&.large {
			max-width: calc(100vw - 40px) !important;
			width: 100% !important;
		}
	}
`;

export default Container;

