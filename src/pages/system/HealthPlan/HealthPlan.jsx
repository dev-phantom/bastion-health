import Main from "@/components/organism/Main";

import Navbar from "@/components/common/Navbar";
import { Flex, Spacer, Box, Heading, ButtonGroup, Button } from "@chakra-ui/react";
import Newsletter from "@/components/organism/Newsletter";
import Footer from "@/components/common/Footer";
import Plans from "@/components/organism/Plans";
const HealthPlan = () => {
  return ( 
    <Box>
      <Navbar/>
      <Box px={{ base: 20 }} gap={8}>
        <Main 
          headingText={"Get Affordable Health Plans with Bastion"}
          paraText={"At Bastion, we have carefully designed an array of healthcare plans at different prices that adequately cater to your healthcare needs and those of your family, business and employees."}
          btnVisibility={"hidden"}
          imgLink={"https://res.cloudinary.com/phantom1245/image/upload/v1675097789/bastion-health/HERO_gib2ih.png"}
          imgAlt={"testin alt"}
        />
        <Plans />
        <Newsletter
          headingText={"Subscribe to Our Newsletter"}
          paraText={"Don't miss out on health updates! Dont worry we will not spam you."} 
        />
        <Footer />
      </Box>
    </Box>
  );
};
 
export default HealthPlan;