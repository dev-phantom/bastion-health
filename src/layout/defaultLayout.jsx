import Head from "next/head";
import { Box } from "@chakra-ui/react";
import Navbar from "@/components/common/Navbar";
import Newsletter from "@/components/organism/Newsletter";
import Footer from "@/components/common/Footer";
const DefaultLayout = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar/>
      <main>
        {children}
      </main>
      <Newsletter
        headingText={"Subscribe to Our Newsletter"}
        paraText={"Don't miss out on health updates! Dont worry we will not spam you."} 
      />
      <Footer />
    </>
  );
};

export default DefaultLayout;