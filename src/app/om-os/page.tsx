"use client";

import { Box, Button, Flex, Heading, Link, ListItem, Stack, UnorderedList, Image, Text, Container, SimpleGrid } from "@chakra-ui/react";

const About = () => {
  return (
    <Box>
        {/* HERO */}
        <Box position="relative" minH={{ base: '60vh', md: '85vh' }} overflow="hidden">
            <Image src={"/dkflytte_3.jpg"} alt="flytning" position="absolute" inset={0} w="100%" h="100%" objectFit="cover" />
            <Box position="absolute" inset={0} bgGradient="linear(to-b, rgba(0,0,0,0.55), rgba(0,0,0,0.75))" />
            <Flex maxW="container.2xl" minH={{ base: '60vh', md: '85vh' }}  position="relative" zIndex="5"  align="center" justify="center">
            <Box>
                <Heading fontSize={{ base: '2xl', md: '4xl', lg: "6xl" }} lineHeight="1.05" color="white" textAlign="center" my={10}>
                    Om DK Flytte
                </Heading>
                <Stack spacing={6} color="white" p={5} m={5} bg="blackAlpha.200">
                    <Text fontSize="lg" textAlign="center">
                        Dit pålidelige flyttefirma – hver gang til tiden
                    </Text>
                    <Text fontSize="lg">
                        Leder du efter et flyttefirma, der dukker op, passer på dine ting og får dig godt i mål – uden stress?<br/>Hos os er tid, tryghed og kvalitet drivkraften bag hver eneste opgave. Vi hjælper både med privatflytning, erhvervsflytning og akutte flytninger, når det skal gå stærkt.
                    </Text>
                    <Text fontSize="lg">Hvorfor vælge os?</Text>
                    <UnorderedList spacing={3} pl={5} styleType={`'-  '`}>
                        <ListItem>
                            <Text><Text as={"span"} fontWeight={"semibold"}>Punktlighed i top:</Text> vi leverer til aftalt tid i stort set alle opgaver (dokumenteret punktlighed på 99%).</Text>
                        </ListItem>
                        <ListItem>
                            <Text><Text as={"span"} fontWeight={"semibold"}>Erfarne flyttefolk:</Text>  dine ejendele håndteres sikkert, professionelt og skånsomt.</Text>
                        </ListItem>
                        <ListItem>
                            <Text><Text as={"span"} fontWeight={"semibold"}>Akut flytning 24/7:</Text>  ring, og vi rykker ud, når behovet opstår.</Text>
                        </ListItem>
                        <ListItem>
                            <Text><Text as={"span"} fontWeight={"semibold"}>Flyttegaranti:</Text>  vi sørger for tryg og forsvarlig transport fra A til B.</Text>
                        </ListItem>
                    </UnorderedList>
                    <Text fontSize="lg">
                        Få et hurtigt og uforpligtende tilbud – kontakt os i dag, så lægger vi en plan, der passer til din tidsplan og dit budget.
                    </Text>
                    <Stack direction={{ base: 'column', md: 'row' }}  mt={5} align="center" justify={"center"} spacing={10}>
                        <Button as={Link} href='/kontakt' size="lg" py={9} px={20} rounded="full" fontWeight="semibold" _hover={{bgColor: "whiteAlpha.500"}}>
                            Få et tilbud
                        </Button>
                        <Button as={Link} href={`tel:+4552698285`} size="lg" py={9} px={20} variant="outline" textColor="white" rounded="full" _hover={{bgColor: "whiteAlpha.500"}}>
                            Ring: +45 52 69 82 85
                        </Button>
                    </Stack>
                </Stack>
            </Box>
            </Flex>
        </Box>
        <Container maxW="container.xl" py={10}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                <Box id="4">
                    <Heading color={"secondary"} mb={5}>
                        Hvem er DK flytte?
                    </Heading>
                    <Text mt={5}>
                        Hos DK flytte er vi dedikerede til at gøre din flytning så nem, tryg og effektiv som muligt. Vi ved, at en flytning ofte markerer starten på et nyt kapitel i livet – og derfor skal den være en god oplevelse. Med mange års erfaring i branchen og en ægte passion for service er vi stolte af at være din stabile og professionelle flyttepartner.
                    </Text>
                    <Text mb={5}>
                        For os handler en flytning ikke blot om at transportere ejendele fra ét sted til et andet – det handler om at skabe en glidende overgang, hvor alt foregår sikkert, hurtigt og uden stress. Vores dygtige flytteteam arbejder tæt sammen med dig for at forstå dine behov og levere skræddersyede løsninger, der passer præcist til din situation.
                    </Text>
                    <Text mb={5}>
                        Vi lægger vægt på kvalitet, punktlighed og tryghed i alt, hvad vi laver. Hos DKflyt får du en personlig og engageret service, uanset om du skal bruge hjælp til privatflytning, erhvervsflytning, opbevaring, nedpakning eller tunge løft. Intet er for stort eller småt – vi tilpasser altid opgaven efter dine ønsker og dit budget.
                    </Text>
                    <Text mb={5}>
                        Vores mål er enkelt: At give dig en flytteoplevelse, der er glat, sikker og bekymringsfri. Derfor arbejder vi med klare aftaler, faste priser og fuld gennemsigtighed, så du altid ved, hvad du får.
                    </Text>
                    <Text mb={5}>
                        Hos DKflyt tror vi på, at tillid og god kommunikation er nøglen til et godt samarbejde. Vi møder hver kunde med respekt, omhu og et smil – og vi går først, når du er tilfreds.
                    </Text>
                    <Text mb={5}>
                        Vælg DK flytte som din flyttepartner, og lad os sammen gøre din næste flytning til en behagelig, effektiv og mindeværdig oplevelse.
                    </Text>
                </Box>
                <Box >
                    <Image
                        src="/dkflytte_7.jpeg"
                        alt="dkflytte"
                        h={"650px"}
                    />
                </Box>
            </SimpleGrid>
        </Container>
        <Box bgColor="secondary" m={5} p={5} rounded={"3xl"}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                <Box>
                    <Image
                        src="/image_9.jpg"
                        alt="dkflytte"
                        rounded={"xl"}
                    />
                </Box>
                <Box py={1}>
                    <Heading color={"white"} mb={5}>
                        Vores vision
                    </Heading>
                    <Text my={5} color={"white"}>
                        Hos DK Flytte drømmer vi om at gøre flytning enkel, tryg og problemfri – hver gang.
                    </Text>
                    <Text mb={5} color={"white"}>
                        Vores mål er at skabe en flytteoplevelse, hvor professionalisme, omtanke og personlig service går hånd i hånd.Uanset om du flytter privat eller erhverv, skal du føle dig i sikre hænder fra første kontakt til sidste kasse.
                    </Text>
                    <Text mb={5} color={"white"}>
                        Vi vil være det flyttefirma, danskerne stoler på og anbefaler, når livet flyttes.
                        Hver flytning er unik, og derfor tilpasser vi vores løsninger efter dine behov.
                        Fra planlægning og pakning til transport og opstilling tager vi hånd om detaljerne.
                    </Text>
                    <Text mb={5} color={"white"}>
                        Vores dygtige team arbejder altid med respekt for dine ejendele og fokus på kvalitet og sikkerhed.
                        Vi kombinerer moderne metoder med personlig service og omtanke.
                        Vores mål er at gøre flytningen til en positiv oplevelse – uanset størrelse eller kompleksitet.
                    </Text>
                    <Text mb={5} color={"white"}>
                        Hos DK FLYT skaber vi tryghed og tillid, så du kan fokusere på dit nye hjem eller kontor.
                    </Text>
                </Box>
            </SimpleGrid>
        </Box>
        <Container maxW="container.xl" py={10}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                <Box id="6">
                    <Heading color={"secondary"} mb={5}>
                        Vores mission
                    </Heading>
                    <Text my={5}>
                        Hos DK Flytte drømmer vi om at gøre flytning enkel, tryg og problemfri – hver gang.
                    </Text>
                    <Text mb={5}>
                        Vores mål er at skabe en flytteoplevelse, hvor professionalisme, omtanke og personlig service går hånd i hånd.
                        Uanset om du flytter privat eller erhverv, skal du føle dig i sikre hænder fra første kontakt til sidste kasse.
                    </Text>
                    <Text mb={5}>
                        Vi vil være det flyttefirma, danskerne stoler på og anbefaler, når livet flyttes.
                        Hver flytning er unik, og derfor tilpasser vi vores løsninger efter dine behov.
                        Fra planlægning og pakning til transport og opstilling tager vi hånd om detaljerne.
                    </Text>
                    <Text mb={5}>
                        Vores dygtige team arbejder altid med respekt for dine ejendele og fokus på kvalitet og sikkerhed.
                        Vores mission er at levere pålidelige og skræddersyede flytteservices, hvor kundens behov altid er i centrum.Vi ønsker, at hver flytning bliver en positiv oplevelse, der skaber tryghed og tilfredshed.
                    </Text>
                    <Text mb={5}>
                        Hos DK Flytte gør vi livet lettere – fra første kontakt til sidste flyttekasse. 
                    </Text>
                    <Stack direction={{ base: 'column', md: 'row' }}  mt={5} align="center" justify={"center"} spacing={10}>
                        <Button as={Link} href='/kontakt' size="lg" py={9} px={20} rounded="full" fontWeight="semibold" _hover={{bgColor: "whiteAlpha.500", color: "secondary", borderColor: "secondary"}}>Få et tilbud</Button>
                        <Button as={Link} href={`tel:+4552698285`} size="lg" py={9} px={20} variant="outline" textColor="secondary" borderColor={"secondary"} rounded="full" _hover={{bgColor: "blackAlpha.50"}}>Ring: +45 52 69 82 85</Button>
                    </Stack>
                </Box>
                <Box>
                    <Image
                        src="/dkflytte_8.jpeg"
                        alt="dkflytte"
                        h={"550px"}
                    />
                </Box>
            </SimpleGrid>
        </Container>
    </Box>
  )
}

export default About
