import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import image from "../Logo/Rlogo.jpeg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showicon, setShowicon] = useState(false);
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <Box as="section" pb={{ base: "12", md: "0", pb:"0" }}>
      <Box
        as="nav"
        bg="bg-surface"
        boxShadow={useColorModeValue("sm", "sm-dark")}
      >
        <Container py={{ base: "4", lg: "5" }}>
          <HStack spacing="10" justify="space-between">
            <img src={image} style={{ width: "152px" }} alt="" />
            {isDesktop ? (
              <Flex justify="space-between" flex="1">
                <ButtonGroup variant="link" spacing="8">
                  <Button
                    _hover={{
                      color: "blue.500",
                    }}
                  >
                    <Link to="/">Home</Link>
                  </Button>
                  <Button
                   _hover={{
                    color: "blue.500",}}
                  >
                    <Link to="/rent">Rent</Link>
                  </Button>
                  <Button
                    _hover={{
                      color: "blue.500",
                    }}
                  >
                    <Link to="/buy">Buy</Link>
                  </Button>
                  <Button
                    _hover={{
                      color: "blue.500",
                    }}
                  >
                    <Link to="/about">About</Link>
                  </Button>
                </ButtonGroup>
                <HStack spacing="3">
                  <Button variant="ghost">Sign in</Button>
                  <Button variant="primary">Sign up</Button>
                </HStack>
              </Flex>
            ) : (
              <IconButton
                variant="ghost"
                icon={<FiMenu fontSize="1.25rem" />}
                aria-label="Open Menu"
                onClick={() => {
                  !showicon ? setShowicon(true) : setShowicon(false);
                }}
              />
            )}
          </HStack>
          {showicon && !isDesktop && (
            <Flex justify="center" align="center" flexDirection="column">
              <ButtonGroup
                variant="link"
                gap={2}
                p={5}
                display="flex"
                flexDirection="column"
                justify="center"
                align="center"
              >
                <Button
                  _hover={{
                    color: "blue.500",
                  }}
                >
                  <Link to="/">Home</Link>
                </Button>
                <Button
                  _hover={{
                    color: "blue.500",
                  }}
                >
                  <Link to="/rent">Rent</Link>
                </Button>
                <Button
                  _hover={{
                    color: "blue.500",
                  }}
                >
                  <Link to="/buy">Buy</Link>
                </Button>
                <Button
                  _hover={{
                    color: "blue.500",
                  }}
                >
                  <Link to="/about">About</Link>
                </Button>
              </ButtonGroup>
              <HStack spacing="5">
                <Button variant="ghost">Sign in</Button>
                <Button variant="primary">Sign up</Button>
              </HStack>
            </Flex>
          )}
        </Container>
      </Box>
    </Box>
  );
};
export default Navbar;
