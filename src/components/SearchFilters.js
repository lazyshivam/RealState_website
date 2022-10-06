import React from 'react'
import { Flex,Box,Select} from '@chakra-ui/react'
// import { filterData, getFilterValues } from '../uitils/filterData'

const SearchFilters = (props) => {


  return (
   
     <Flex bg='gray.100' p='4' justifyContent='center' flexWrap='wrap'>
     
        <Box key='roomsMin'>
          <Select  placeholder='Min-Rooms' w='fit-content' p='2' 
           onChange={(e)=>{props.setRoomsMin(e.target.value)

        }} >
            
              <option value='1' key='1'>
               1
              </option>
              <option value='2' key='2'>
               2
              </option>
              <option value='3' key='3'>
               3
              </option>
              <option value='4' key='4'>
               4
              </option>
              <option value='5' key='5'>
               5
              </option>
         
          </Select>
        </Box>
        <Box key='bathssMin'>
          <Select  placeholder='Min-Baths' w='fit-content' p='2' 
           onChange={(e)=>{props.setBathsMin(e.target.value)

           }}>
            
              <option value='1' key='1'>
               1
              </option>
              <option value='2' key='2'>
               2
              </option>
              <option value='3' key='3'>
               3
              </option>
              <option value='4' key='4'>
               4
              </option>
              <option value='5' key='5'>
               5
              </option>
         
          </Select>
        </Box>
        <Box key='areaMax'>
          <Select  placeholder= 'Max-Area(sqft)' w='fit-content' p='2' 
           onChange={(e)=>{props.setAreaMax(e.target.value)

           }}>
            
              <option value='100' key='100'>
               100
              </option>
              <option value='200' key='200'>
               200
              </option>
              <option value='300' key='300'>
               300
              </option>
              <option value='400' key='400'>
               400
              </option>
              <option value='500' key='5000'>
               500
              </option>
         
          </Select>
        </Box>
        <Box key='maxPrice'>
          <Select  placeholder='Max-Price' w='fit-content' p='2'
           onChange={(e)=>{props.setMaxPrice(e.target.value)

           }} >
            
              <option value='10000' key='10000'>
               10000
              </option>
              <option value='20000' key='20000'>
               20000
              </option>
              <option value='30000' key='30000'>
               30000
              </option>
              <option value='40000' key='40000'>
               40000
              </option>
              <option value='50000' key='50000'>
               50000
              </option>
         
          </Select>
        </Box>
   
          
    </Flex>
  )
}

export default SearchFilters
