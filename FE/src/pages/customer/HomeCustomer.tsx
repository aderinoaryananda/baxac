import { Box, Link, Text } from "@chakra-ui/react";


export default function HomeCustomer() {
    return (
        <>
        <Box display={'flex'} flexDirection={'row'}>
            <Box display={'flex'} gap='2em' flexDirection={'column'} p='1.3em'>
                <Link href="/" bgColor='gray' p='1em'>
                    <Text>HOME</Text>
                </Link>
                <Box display={'flex'} gap='2em' flexDirection={'column'} p='1.3em'>
                    <Link bgColor={'blue'} p='1em'>AC News</Link>
                    <Link bgColor={'red'} p='1em'>History Reparasi</Link>
                    <Link bgColor={'yellow'} p='1em'>Unit AC</Link>
                    <Link bgColor={'purple'} p='1em'>NEWS</Link>
                </Box>
            </Box>
        </Box>
        </>
    )
}