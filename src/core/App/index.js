import { Globalstyle } from "./Globalstyle";
import { ThemeProvider } from "styled-components";
import { themeLight, themeDark } from "./theme";
import { useSelector } from "react-redux";
import { selectIsDarkTheme } from "../../common/themeSlice";
import { AboutMe } from "../../features/aboutme/AboutMe";

export const App = () => {
  const isDarkTheme = useSelector(selectIsDarkTheme);
  return (
    <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
      <Globalstyle />
      <AboutMe />
    </ThemeProvider>
  );
};

export default App;
