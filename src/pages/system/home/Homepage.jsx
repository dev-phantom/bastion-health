import Main from "@/components/organism/Main";
import SectionTwo from "@/components/organism/SectionTwo";
import SectionThree from "@/components/organism/SectionThree";
import { Box } from "@chakra-ui/react";
import DefaultLayout from "@/layout/defaultLayout";

const Homepage = () => {
  return ( 
    <DefaultLayout>
      <Box px={{ base: 20 }} gap={8}>
        <Main 
          headingText={"Get health insurance that just makes sense"}
          paraText={"At Bastion we are working towards a healthier Nigeria, bringing greater convenience to healthcare access. We have carefully designed an array of healthcare plans that ensures there is something for everyone."}
          btnGreentext={"See Our Plans"}
          btngreenLink={"/Healthplan"}
          btnAlttext={"Read our Blog"}
          btnAltLink={"/Blogs"}
          btnVisibility={"visible"}
          imgLink={"https://res.cloudinary.com/phantom1245/image/upload/v1675097789/bastion-health/HERO_gib2ih.png"}
          imgAlt={"testin alt"}
        />
        <SectionTwo 
          headingText={"Affordable Health Plans For Families & Employee"}
          paraText={"Our affordable range of plans are designed to fit the unexpected healthcare cost of your family & employees and bring everyone peace of mind. Express your care by subscribing to our quality health plans."}
          btnGreentext={"Buy Now"}
          btngreenLink={"#"}
        />
        <SectionThree 
          headingText={"Find the closest provider near you."}
          paraText={"Our affordable range of plans are designed to fit the unexpected healthcare cost of your family & employees and bring everyone peace of mind. Express your care by subscribing to our quality health plans."}
          btnGreentext={"Get Started"}
          btngreenLink={"#"}
        />
        
      </Box>
    </DefaultLayout>
  );
};
 
export default Homepage;