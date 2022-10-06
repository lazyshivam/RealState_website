import React from 'react'
import { Flex,Box,Select} from '@chakra-ui/react'
// import { filterData, getFilterValues } from '../uitils/filterData'

const SearchFilters = (props) => {

 

  return (
   
     <Flex bg='gray.100' p='4' justifyContent='center' flexWrap='wrap'>
      <Box key='rentFreuqency'>
          <Select  placeholder='Rent Frequency' w='fit-content' p='2' 
           onChange={(e)=>{props.setRentFrequency(e.target.value)

        }} >
            
              <option value='daily' key='daily'>
               Daily
              </option>
              <option value='weekly' key='weekly'>
               Weekly
              </option>
              <option value='monthly' key='monthly'>
               Monthly
              </option>
              <option value='yearly' key='yearly'>
               Yearly
              </option>
         
          </Select>
        </Box>
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
          <Select  placeholder='Min-Price' w='fit-content' p='2'
           onChange={(e)=>{props.setMinPrice(e.target.value)

           }} >
            
              <option value='100000' key='100000'>
               100000
              </option>
              <option value='200000' key='200000'>
               200000
              </option>
              <option value='300000' key='300000'>
               300000
              </option>
              <option value='400000' key='400000'>
               400000
              </option>
              <option value='500000' key='500000'>
               500000
              </option>
              <option value='600000' key='600000'>
               600000
              </option>
              
              <option value='1000000' key='1000000'>
               1000000
              </option>
              <option value='1500000' key='1500000'>
               1500000
              </option>
              <option value='2000000' key='2000000'>
               2000000
              </option>
              <option value='3000000' key='3000000'>
               3000000
              </option>
         
          </Select>
        </Box>
   
          
    </Flex>
  )
}

export default SearchFilters
