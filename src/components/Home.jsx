import React from "react";
import image from "../image/img.jpg";
import { Box, Text, Flex, Button } from "@chakra-ui/react";
import {Link} from 'react-router-dom'
import {ArrowForwardIcon} from '@chakra-ui/icons'
const Resources = () => {
  return (
    <>
    <Flex flexWrap="wrap" flexDir="column" justify="cneter" align='center' height="600px" width='100%' backgroundImage={image} >

   
      <Box justifyContent="center" textAlign="center" paddingTop="150px" >
        <Text
          style={{
            fontSize: "30px",
            fontWeight: "bold",
            padding: "10px",
            marginBottom: "20px",
          }}
        >
          Find Your Best Property
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolore
          eaque temporibus vero magni porro aliquam necessitatibus rem
          voluptates accusamus!
        </Text>
        
      </Box>
      <Box paddingTop="20px">
      <Button
            rightIcon={<ArrowForwardIcon />}
            colorScheme="teal"
           
            // variant="outline"
          >
             <Link to="/rent">GO</Link>
          </Button>
      </Box>
      </Flex>
    </>
  );
};

export default Resources;
