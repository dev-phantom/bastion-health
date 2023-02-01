import { ReactNode } from 'react';

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
    <Text fontWeight={'500'} fontSize={'lg'} mb={2} fontFamily={"heldane"} >
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'20xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box>
              <Logo color={useColorModeValue('gray.700', 'white')} />
            </Box>
            <Text fontSize={'sm'} pr={15}>
              Our mission is to make good healthcare, accessible and affordable.
            </Text>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Helpful Links</ListHeader>
            <Link href={'#'}>Home</Link>
            <Link href={'#'}>About Us</Link>
            <Link href={'#'}>Contact</Link>
            <Link href={'#'}>Health Plans</Link>
            <Link href={'#'}>Wellness & Lifestyle</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Site Map</ListHeader>
            <Link href={'#'}>Our Mobile App</Link>
            <Link href={'#'}>Product Comparison</Link>
            <Link href={'#'}>Hospital Network</Link>
            <Link href={'#'}>Our Partners</Link>
            <Link href={'#'}>Terms and Conditions</Link>
          </Stack>
          <Stack >
            <ListHeader>Contact Us</ListHeader>
            <Typography paraText={"2nd Floor, Union Bank Building, 1 Adeola Odeku street. Victoria Island, Lagos. Nigeria."} /> 
            <SocialIcons />
            <Link href={'mailto:wecare@bastionhmo.com'}>
                wecare@bastionhmo.com
            </Link>

          </Stack>

        </SimpleGrid>
      </Container>
    </Box>
  );
}