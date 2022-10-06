import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Provider  from "react";
import { ChakraProvider, Flex, Container, Stack, Text } from "@chakra-ui/react";
import { theme } from "@chakra-ui/pro-theme";
import "@fontsource/inter/variable.css";
import Buy from "./components/Buy";
import Rent from "./components/Rent";
import Home from "./components/Home";
import About from "./components/About";

// import Search from "./components/Search";

function App() {
  // const myTheme = extendTheme(
  //   {
  //     colors: { ...theme.colors, brand: theme.colors.purple },
  //   },
  //   theme
  // );
  return (
    <ChakraProvider theme={theme}>
        <div style={{minHeight: "100%" }}>
      <Router>
          <Navbar />
          {/* <Search/> */}
        
            <Flex
              flexWrap="wrap"
              justifyContent="center"
              alignItems="center"
              m="10"
              
            >
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/buy" element={<Buy />} />
                <Route exact path="/rent" element={<Rent />} />
                <Route exact path="/about" element={<About/>} />
              </Routes>
            </Flex>
         
       
      </Router>
      <hr />
      <Container
        as="footer"
        role="contentinfo"
        py={{
          base: "12",
          md: "16",
        }}
      >
        <Stack
          spacing={{
            base: "4",
            md: "5",
          }}
          justifyContent="center"
          alignItems="center"
        >
          <Text fontSize="1.0rem" color="subtle">
            &copy; {new Date().getFullYear()} RealState, Inc. All rights
            reserved.
          </Text>
        </Stack>
      </Container>
      </div>
    </ChakraProvider>
  );
}

export default App;
