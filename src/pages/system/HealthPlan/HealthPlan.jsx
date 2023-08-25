import Main from "@/components/organism/Main";
import { Box } from "@chakra-ui/react";
import Plans from "@/components/organism/Plans";
import DefaultLayout from "@/layout/defaultLayout";

const HealthPlan = () => {
  return (
    <DefaultLayout>
      <Box px={{ base: 5, md: 20 }} gap={8}>
        <Main
          headingText={"Get Affordable Health Plans with Bastion"}
          paraText={
            "At Bastion, we have carefully designed an array of healthcare plans at different prices that adequately cater to your healthcare needs and those of your family, business and employees."
          }
          btnVisibility={"hidden"}
          imgLink={
            "https://res.cloudinary.com/phantom1245/image/upload/v1675097789/bastion-health/HERO_gib2ih.png"
          }
          imgAlt={"testin alt"}
        />
        <Plans />
      </Box>
    </DefaultLayout>
  );
};
 
export default HealthPlan;