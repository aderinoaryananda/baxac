import { Box, Text } from "@chakra-ui/react";



export default function AdminSidebar() {
    return (
        <>
        <Box>
            <Text textAlign={'center'}>
              <strong>SIDEBAR</strong>
            </Text>
            <Box bgColor={'ghostwhite'}>
              <Text>Dashboard</Text>
              <Text>Order Settings</Text>
              <Text>Inbox</Text>
              <Text>News</Text>
              <Text>History Order</Text>
              <Text>Technicians</Text>
            </Box>
          </Box>
        </>
    )
}