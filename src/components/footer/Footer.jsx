import { Flex, Link, Text } from '@chakra-ui/react'

const Footer = () => {
    const originalDsaSheetLink =
        'https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/'
    const originalAuthorLinkedInLink = 'https://in.linkedin.com/in/rajarvp'
    const gitHubLink = 'https://github.com/aditya-190/a2zdsa'

    return (
        <Flex
            className={''}
            bg={''}
            w={''}
            px={4}
            py={1}
            flexGrow={''}
            flexDirection={''}
            alignItems={''}
            justifyContent={''}
            userSelect={''}
        >
            <Text
                fontWeight={''}
                fontSize={''}
                fontFamily={''}
                fontStyle={''}
                color={''}
                textAlign={''}
            >
                {' '}
                {
                    <a
                        href={originalDsaSheetLink}
                        target={'_blank'}
                        rel="noreferrer"
                    >
                        <b></b>
                    </a>
                }{' '}
                {' '}
                {
                    <a
                        href={originalAuthorLinkedInLink}
                        target={'_blank'}
                        rel="noreferrer"
                    >
                        <b></b>
                    </a>
                }
                
            </Text>

            <Link
                href={gitHubLink}
                target={'_blank'}
                _hover={{}}
                display={{ base: 'none', md: 'flex' }}
            >
                <Text
                    w={''}
                    h={''}
                    px={4}
                    py={1}
                    bg={''}
                    borderRadius={''}
                    fontWeight={''}
                    fontSize={''}
                    fontFamily={''}
                    fontStyle={''}
                    color={''}
                >
                    
                </Text>
            </Link>
        </Flex>
    )
}

export default Footer
