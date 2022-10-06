import React from "react";
import image from "../image/home12.jpg";
import { Box, Text,Flex, Button } from "@chakra-ui/react";
import {Link} from 'react-router-dom'
import {ArrowForwardIcon} from '@chakra-ui/icons'
const Resources = () => {
  return (
    <>
     
    <Flex flexWrap="wrap" flexDir='column' align='center'  height="700px" width='100%' backgroundRepeat="no-repeat"  backgroundSize='cover' color='blue.400'
 backgroundImage={image}  zIndex='1'>

   
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
      <Box paddingTop="40px">
      <Button
            rightIcon={<ArrowForwardIcon />}
            colorScheme="blue"
           
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
