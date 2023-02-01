import { Flex, InputGroup, InputRightElement,  } from "@chakra-ui/react";
import Buttons from "../atoms/Buttons";
import Inputs from "../atoms/Inputs";

const InputField = ({placeholder, btnGreentext, btngreenLink}) => {
    return ( 
        <InputGroup size='md'>
            <Inputs
                placeholder={placeholder}
            />
            <InputRightElement width='4.5rem' py={"auto"}>
                <Flex justify={"center"} align={"center"} mt={2.5} >
                    <Buttons
                        btnGreentext={btnGreentext} 
                        btngreenLink={btngreenLink}
                        bgColor={"#0E563F"}
                        btnColor={"white"} 
                    /> 
                </Flex>
            </InputRightElement>
        </InputGroup>
     );
}
 
export default InputField;