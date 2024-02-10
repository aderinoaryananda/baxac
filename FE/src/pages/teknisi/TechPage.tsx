import { Box } from "@chakra-ui/react";
import BodyTech from "./components/BodyTech";
import FooterTech from "./components/FooterTech";
import HeaderTech from "./components/HeaderTech";

export default function TechPage() {
  return (
    <>
      <Box display={"flex"} flexDirection={"column"} w="100%" h="100vh">
        <Box display={"flex"} bgColor={"red"} flexDirection={"column"} h="8%">
          <HeaderTech/>
        </Box>
        <Box
          display={"flex"}
          bgColor={"yellow"}
          flexDirection={"column"}
          h="84%"
        >
          <BodyTech/>
        </Box>
        <Box
          display={"flex"}
          bgColor={"green"}
          flexDirection={"column"}
          h="8%"
        >
          <FooterTech/>
        </Box>
      </Box>
    </>
  );
}
