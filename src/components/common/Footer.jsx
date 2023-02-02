import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  Image
} from '@chakra-ui/react';
import SocialIcons from '../molecules/SocialIcons';
import Typography from '../molecules/Typography';



const Logo = () => {
  return (
        <Image 
            src="https://res.cloudinary.com/phantom1245/image/upload/v1675097787/bastion-health/logo_1_n854bv.png"
            alt="logo"
            width={"115px"}
            height={"32px"}
        />
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} color={"#141414"} fontSize={'lg'} mb={2} fontFamily={"heldane"} >
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      color={useColorModeValue('gray.700', 'gray.200')}
      w={"full"}
       >
      <Container as={Stack} maxW={'40xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr ' }}
          >
          <Stack spacing={6}>
            <Box>
              <Logo color={useColorModeValue('gray.700', 'white')} />
            </Box>
            <Text fontSize={'sm'} >
              Our mission is to make good <br /> healthcare, accessible and affordable.
            </Text>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Helpful Links</ListHeader>
            <Link href={'/'} _hover={{textDecoration:"none"}}>Home</Link>
            <Link href={'#'} _hover={{textDecoration:"none"}}>About Us</Link>
            <Link href={'#'} _hover={{textDecoration:"none"}}>Contact</Link>
            <Link href={'/Healthplan'} _hover={{textDecoration:"none"}}>Health Plans</Link>
            <Link href={'#'} _hover={{textDecoration:"none"}}>Wellness & Lifestyle</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Site Map</ListHeader>
            <Link href={'#'} _hover={{textDecoration:"none"}}>Our Mobile App</Link>
            <Link href={'#'} _hover={{textDecoration:"none"}}>Product Comparison</Link>
            <Link href={'#'} _hover={{textDecoration:"none"}}>Hospital Network</Link>
            <Link href={'#'} _hover={{textDecoration:"none"}}>Our Partners</Link>
            <Link href={'#'} _hover={{textDecoration:"none"}}>Terms and Conditions</Link>
          </Stack>
          <Stack >
            <ListHeader>Contact Us</ListHeader>
            <Typography paraWidth={"100%"} paraText={"2nd Floor, Union Bank Building, 1 Adeola Odeku street. Victoria Island, Lagos. Nigeria."} /> 
            <SocialIcons />
            <Link _hover={{textDecoration:"none"}} href={'mailto:wecare@bastionhmo.com'}>
                wecare@bastionhmo.com
            </Link>

          </Stack>

        </SimpleGrid>
      </Container>
    </Box>
  );
}