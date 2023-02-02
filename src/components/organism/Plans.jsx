import { SimpleGrid, Box, Heading, Text, Flex, Button } from '@chakra-ui/react'
import { plans } from '@/data/Data';
import { ArrowForwardIcon } from '@chakra-ui/icons';

const Plans = () => {
    
    return ( 
        <SimpleGrid columns={[2, null, 3]} spacing='40px' mt={20}>
            {plans.map((plan) => {
                return(
                    <Box key={plan.id} bg={plan.bgColor} w={"full"} px={10} pt={5} h={"500px"} borderRadius={"10px"}>
                        <Heading 
                            as={'h3'} 
                            color={plan.color}
                            fontSize={"36px"} 
                            fontWeight={"400"}
                            lineHeight={"50px"} 
                            fontFamily={"heldane"} 
                            className={"font-primary"}
                        >
                            {plan.heading}
                        </Heading>
                        <Text as={"p"} color={plan.color} lineHeight={"30px"} py={5} >{plan.paragraph}</Text>
                        <Flex justify={"start"} align={"center"}>
                            <Button as={"a"} _hover={{textDecoration:"none"}} rightIcon={<ArrowForwardIcon />} href={plan.btnlink} color={plan.color} variant='link'>
                                Learn more
                            </Button>
                        </Flex>
                        
                    </Box>
                )
            } )}
        </SimpleGrid>
     );
}
 
export default Plans;