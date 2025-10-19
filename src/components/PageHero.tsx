"use client";

import { Box, SimpleGrid, Flex, Heading, Divider, Stack, Button, Image, Text } from "@chakra-ui/react";

interface PageHeroProps {
    imageSrc: string,
    title: string,
    desc?: string
}

const PageHero = ({imageSrc, title, desc}: PageHeroProps) => {
  return (
    <Box bgColor={"primary.500"} w="100%" p={10} alignItems={"center"}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={1} mt={1}>
            <Box >
                <Image
                    src={imageSrc}
                    alt="dkflytte"
                    maxH={"50vh"}
                    mb={{ base: 0, md: "-100px" }}
                    rounded="xl"
                    zIndex={20}
                />
            </Box>
            <Flex alignItems={"end"}>
                <Box>
                    <Heading color={"white"} fontSize={"6xl"}>{title}</Heading>
                    <Text my={5} color="white">{desc ?? ""}</Text>
                    <Divider/>
                    <Stack direction={{ base: 'column', md: 'row' }}  mt={5} align="center" justify={"center"} spacing={10}>
                        <Button size="lg" py={9} px={20} rounded="full" fontWeight="semibold" bgColor="white" color="primary.500" _hover={{bg: "whiteAlpha.500", color: "white"}}>Få et tilbud</Button>
                        <Button size="lg" py={9} px={20} variant="outline" rounded="full" color="white" _hover={{ bg: "whiteAlpha.500"}}>Ring: 42 66 92 42</Button>
                    </Stack>
                </Box>
            </Flex>
        </SimpleGrid>
    </Box>
  )
}

export default PageHero
