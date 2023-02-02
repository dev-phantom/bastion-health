import { Flex, Spacer, Box, Heading, ButtonGroup, Grid, GridItem } from '@chakra-ui/react'
import Images from '../atoms/Images';

const ImageSlider = () => {
    return ( 
        <Box
         w={"full"}
        >
            <Box className={"de"} w={"full"}></Box>
            <Grid 
            templateColumns='repeat(6, 1fr)' 
            gap={6}
            overflowX={"scroll"}
            >
                
                <GridItem 
                backgroundImage={"https://res.cloudinary.com/phantom1245/image/upload/v1675356024/bastion-health/Rectangle_23_1_kjcouo.png"}
                backgroundRepeat={"no-repeat"}
                backgroundSize={"cover"}
                height={"550px"}
                width={"402px"}

                >
                    test
                </GridItem>
                <GridItem 
                backgroundImage={"https://res.cloudinary.com/phantom1245/image/upload/v1675356024/bastion-health/Rectangle_23_t4nm5m.png"}
                backgroundRepeat={"no-repeat"}
                backgroundSize={"cover"}
                height={"550px"}
                width={"402px"}

                >
                    test
                </GridItem>
                
                <GridItem 
                backgroundImage={"https://res.cloudinary.com/phantom1245/image/upload/v1675356026/bastion-health/COVER_vvhg11.png"}
                backgroundRepeat={"no-repeat"}
                backgroundSize={"cover"}
                height={"550px"}
                width={"402px"}

                >
                    test
                </GridItem>
                
                <GridItem 
                backgroundImage={"https://res.cloudinary.com/phantom1245/image/upload/v1675356024/bastion-health/Rectangle_23_1_kjcouo.png"}
                backgroundRepeat={"no-repeat"}
                backgroundSize={"cover"}
                height={"550px"}
                width={"402px"}

                >
                    test
                </GridItem>
                
                <GridItem 
                backgroundImage={"https://res.cloudinary.com/phantom1245/image/upload/v1675356024/bastion-health/Rectangle_23_1_kjcouo.png"}
                backgroundRepeat={"no-repeat"}
                backgroundSize={"cover"}
                height={"550px"}
                width={"402px"}

                >
                    test
                </GridItem>
                
                <GridItem 
                backgroundImage={"https://res.cloudinary.com/phantom1245/image/upload/v1675356024/bastion-health/Rectangle_23_1_kjcouo.png"}
                backgroundRepeat={"no-repeat"}
                backgroundSize={"cover"}
                height={"550px"}
                width={"402px"}

                >
                    test
                </GridItem>
            </Grid>
            <Box className={"des"} w={"full"}></Box>

        </Box>
     );
}
 
export default ImageSlider;