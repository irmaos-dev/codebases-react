import Header from "Components/Header/Header";
import GlobalState from "Global/GlobalState";
import Details from "Pages/DetailsPage/Details";
import Home from "Pages/Home/Home";
import SearchPage from "Pages/SearchPage/SearchPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "Styles/ColorTheme";
import GlobalStyles from "Styles/Global";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalState>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detalhes/:id" element={<Details />} />
            <Route path="/pesquisa" element={<SearchPage />} />
          </Routes>
        </BrowserRouter>
        <GlobalStyles />
      </GlobalState>
    </ThemeProvider>
  );
}

export default App;
