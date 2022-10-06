import React from "react";
import { useGetPropertiesForRentQuery } from "../services/RstateApi";
import { Box, Badge, Image, Flex,Spinner} from "@chakra-ui/react";
import millify from 'millify';
import {FaBed,FaBath} from 'react-icons/fa'
import {BsGridFill} from 'react-icons/bs'
import {GoVerified}  from 'react-icons/go'
import { useState } from "react";
import { BsFilter } from "react-icons/bs";
import { Text, Icon } from "@chakra-ui/react";
import SearchFilters from "./SearchFilters";
import svg from '../Logo/No-data-amico.svg'


const Rent = () => {
  // const [propertyForRent,setPropertyForRent]=useState([]);
  
 
  const [searchFilters, setSearchFilters] = useState(false);
  const [roomsMin,setRoomsMin]=useState(0);
  const [bathsMin,setBathsMin]=useState(0);
  const [areaMax,setAreaMax]=useState(2000);
  const [minPrice,setMinPrice]=useState(20000);
  const [rentFrequency,setRentFrequency]=useState('Monthly')

  
  const { data, isFetching } = useGetPropertiesForRentQuery({roomsMin,bathsMin,areaMax,minPrice,rentFrequency});
 
  // console.log(roomsMin);
  

  if(isFetching) return <Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
  marginTop='300px'
  marginBottom='300'
/>;
  const property=data?.hits;
  // console.log(property);
  if(property.length===0) return (<Image src={svg}
    width='400px' marginBottom='20' marginTop='40'/> )
  return (
    <>
  
  <Box>
        <Flex
          cursor="pointer"
          bg="gray.100"
          borderBottom="1px"
          borderColor="gray.200"
          p="2"
          fontWeight="black"
          fontSize="lg"
          justifyContent="center"
          alignItems="center"
          onClick={() => {
            !searchFilters?setSearchFilters(true):setSearchFilters(false)
          }}
        >
          <Text>Search Property By Filters</Text>
          <Icon paddingLeft="2" w="7" as={BsFilter} />
        </Flex>
        {searchFilters&&  <SearchFilters setRoomsMin={setRoomsMin} setBathsMin={setBathsMin} setAreaMax={setAreaMax} setMinPrice={setMinPrice} setRentFrequency={setRentFrequency}/>        }
        

       
     
    </Box>
   
      <Flex flexWrap="wrap" justify='center'>
    {property.map((property)=>(

      
      <Flex justifyContent="center" alignItems="center" flexWrap="wrap" gap={5} m={5} key={property.coverPhoto.externalID}>
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" >
          <Image src={property.coverPhoto.url} alt="houseImage" width={400} height={250} />

          <Box p="6">
            <Box display="flex" alignItems="baseline">
              <Badge borderRadius="full" px="2" colorScheme="teal">
               {property.isVerified?<GoVerified/>:null}
              </Badge>
              <Flex  
                alignItems='center' p='1' 
                justifyContent='space-between'
                w='250px'
                color='blue.400'
              >
                {property.rooms} <FaBed/>  | {property.baths}{"  "} <FaBath/> | {millify(`${property.area}`)}sqft <BsGridFill/>
              </Flex>
            </Box>

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              noOfLines={1}
            >
              {property.agency.name}
            </Box>

            <Box>
              {millify(property.price)}
              <Box as="span" color="gray.600" fontSize="sm">
                /{property.rentFrequency}
              </Box>
            </Box>

          </Box>
        </Box>
      </Flex>
       ))}
      
       </Flex>
    </>
  );
};

export default Rent;
