import { Box } from "@chakra-ui/react";
import AdminSidebar from "./components/AdminSidebar";

export default function AdminPage() {
  return (
    <>
      <Box>
        <Box display={"flex"} flexDirection={"row"} w={"100%"}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={"1em"}
            bgColor={"gray"}
            p="1em"
            w="20%"
          >
            <AdminSidebar />
          </Box>
          <Box
            bgColor={"black"}
            textAlign={"center"}
            p="1em"
            color="white"
            w="80%"
          >
            Display Menu
          </Box>
        </Box>
      </Box>
    </>
  );
}
