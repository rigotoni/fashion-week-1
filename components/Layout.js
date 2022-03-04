import styled, {ThemeProvider} from 'styled-components';
import theme from './../utils/theme';

const StyledLayout = styled.div`

`;

const Layout = (props) => {
  return (
    <ThemeProvider theme={theme}>
        {props.children}
    </ThemeProvider>
  )
}

export default Layout;
