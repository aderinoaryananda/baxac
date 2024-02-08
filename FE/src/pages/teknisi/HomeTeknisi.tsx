import { Box, Link, Text } from "@chakra-ui/react";


export default function HomeTeknisi() {
    return (
        <>
        <Box display={'flex'} flexDirection={'row'}>
            <Box display={'flex'} gap='2em' flexDirection={'column'} p='1.3em'>
                <Link href="/" bgColor='gray' p='1em'>
                    <Text>HOME</Text>
                </Link>
                <Box display={'flex'} gap='2em' flexDirection={'column'} p='1.3em'>
                    <Link bgColor={'blue'} p='1em'>Dashboard</Link>
                    <Link bgColor={'red'} p='1em'>History</Link>
                    <Link bgColor={'yellow'} p='1em'>Active Order</Link>
                    <Link bgColor={'green'} p='1em'>Cashflow</Link>
                    <Link bgColor={'purple'} p='1em'>NEWS</Link>
                </Box>
            </Box>
        </Box>
        </>
    )
}