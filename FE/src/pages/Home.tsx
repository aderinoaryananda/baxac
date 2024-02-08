import { Box, Button, Link, Text } from "@chakra-ui/react";


export default function Home() {
    return (
        <>
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} m='1em' p='1em'>
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} p='2em'>
            <Text>BAX - AC Service</Text>
            <Box display={'flex'} flexDirection={'row'} alignItems={'center'} gap={'3em'} justifyContent={'space-between'} width={'100%'} mt='1em' >
                <Text>Go To :</Text>
                <Box display={'flex'} flexDirection={'column'} gap={'1em'}>
                    <Link href={'/teknisi'}><Button>Teknisi Login</Button></Link>
                    <Link href={'/admin'}><Button>Admin Login</Button></Link>
                    <Link href={'/customer'}><Button>Customer Login</Button></Link>
                </Box>
            </Box>
        </Box>
        </Box>
        </>
    )
}