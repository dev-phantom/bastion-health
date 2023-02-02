import { Button, HStack,  } from '@chakra-ui/react'

const Buttons = ({btnAltLink, btnAlttext, btnGreentext, btngreenLink, bgColor, btnColor, btnVisibility}) => {
    return ( 
        <HStack gap={10} pt={1}>
            <Button as={"a"} borderRadius={"100px"} visibility={btnVisibility} href={btngreenLink} bg={bgColor} color={btnColor} variant='solid' py={3} px={5}>
                {btnGreentext}
            </Button>
            <Button as={"a"} href={btnAltLink} colorScheme='teal' variant='link'>
                {btnAlttext}
            </Button>
        </HStack>
     );
}
 
export default Buttons;