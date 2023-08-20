import { Box } from "@chakra-ui/react";
import Navbar from "@/components/common/Navbar";
import Newsletter from "@/components/organism/Newsletter";
import Footer from "@/components/common/Footer";
const DefaultLayout = ({ children }) => {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <main>{children}</main>
      <Box px={{ base: 4, md: 20 }} gap={8}>
        <Newsletter
          headingText={"Subscribe to Our Newsletter"}
          paraText={
            "Don't miss out on health updates! Dont worry we will not spam you."
          }
        />
        <Footer />
      </Box>
    </div>
  );
};

export default DefaultLayout;