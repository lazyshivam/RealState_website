import React from "react";
import { BsFilter } from "react-icons/bs";
import { Box, Flex, Text, Icon } from "@chakra-ui/react";
import { useState } from "react";
import SearchFilters from "./SearchFilters";
// import { useRoutes } from "react-router-dom";

const Search = () => {
  const [searchFilters, setSearchFilters] = useState(false);
//   const router=useRoutes();
  return (
    <div>
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
        {searchFilters&&<SearchFilters/>}
      </Box>
    </div>
  );
};

export default Search;
