import { Box, Button, Input, Link, Text } from "@chakra-ui/react";

export default function Login() {
  return (
    <>
      <Box display="flex" flexDirection={"row"} w="100%">
        <Box
          display={"flex"}
          flexDirection={"column"}
          w="40%"
          justifyContent={"center"}
          alignItems={"center"}
          p="2em"
        >
          <Text>Design</Text>
        </Box>
        <Box
          p="2em"
          display={"flex"}
          flexDirection={"column"}
          w="60%"
          justifyContent={"center"}
          alignItems={"center"}
        >
          {/* ============================================================= */}
          <Box
            display={"flex"}
            p="1em"
            border={"1px solid gray"}
            borderRadius={"10px"}
            boxShadow={"2px 3px 2px 2px gray"}
            bgColor={"whitesmoke"}
            flexDirection={"column"}
            gap="1em"
            w="50%"
            justifyContent={"center"}
            textAlign={"center"}
          >
            <Text>Form Login</Text>
            <Box
              display={"flex"}
              flexDirection={"row"}
              gap="1em"
              w="100%%"
              justifyContent={"center"}
              alignContent="center"
              textAlign={"center"}
            >
              <Text display={"flex"} w="30%">
                Email
              </Text>
              <Box display={"flex"} w="70%" flexDirection={"row"} gap={"2em"}>
                <Text>:</Text>
                <Input boxShadow={"2px 2px 4px 1px gray"} />
              </Box>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"row"}
              gap="1em"
              w="100%%"
              justifyContent={"center"}
              alignContent="center"
              textAlign={"center"}
            >
              <Text display={"flex"} w="30%">
                Password
              </Text>
              <Box display={"flex"} w="70%" flexDirection={"row"} gap={"2em"}>
                <Text>:</Text>
                <Input boxShadow={"2px 2px 4px 1px gray"} />
              </Box>
            </Box>
            <Link href="/technician">
              <Button bgColor={"green.600"} _hover={{ bgColor: "green.300" }}>
                Submit
              </Button>
            </Link>
          </Box>
          {/* ============================================================= */}
        </Box>
      </Box>
    </>
  );
}
