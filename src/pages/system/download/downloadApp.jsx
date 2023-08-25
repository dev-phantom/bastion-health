import Main from "@/components/organism/Main";
import { Box } from "@chakra-ui/react";
import DefaultLayout from "@/layout/defaultLayout";

const DownloadApp = () => {
  return (
    <DefaultLayout>
      <Box px={{ base: 5, md: 20 }} gap={8}>
        <Main
          headingText={"Bastion App Available for iOS & Android"}
          paraText={
            "Our app is an intuitive, user-friendly app for enrollees of Bastion HMO to access their healthcare information and services. The app connects you with doctors 24/7through the convenience of your smartphone."
          }
          btnGreentext={"Google Play"}
          btngreenLink={"/Healthplan"}
          btnAltLink={"/"}
          btnAlttext={"Apple Store"}
          btnVisibility={"visible"}
          imgLink={
            "https://res.cloudinary.com/phantom1245/image/upload/v1675356012/bastion-health/APPLICATION_OVERVIEW_tukwwm.png"
          }
          imgAlt={"testin alt"}
        />
      </Box>
    </DefaultLayout>
  );
};
 
export default DownloadApp;