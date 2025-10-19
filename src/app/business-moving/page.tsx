"use client";

import PageHero from "@/components/PageHero";
import { Box, Container, Heading, SimpleGrid, Text, Image, Button, Stack, Card, CardBody, CardHeader } from "@chakra-ui/react";
import { useEffect } from "react";

const BusinessMoving = () => {
    useEffect(() => {
        const scrollToId = sessionStorage.getItem('scrollToId');
        if (scrollToId) {
            const el = document.getElementById(scrollToId);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
            sessionStorage.removeItem('scrollToId');
        }
    }, []);
    const imgSrc = "/dkflytte_1.jpeg";
    const title = "Erhvervsflytning";
    const desc = "Skal du flytte til et nyt hjem? Vi forstår, at en privat flytning kan være både spændende og udfordrende. Hos DK Flytte er vi dedikerede til at gøre hele processen så problemfri som muligt.";
  return (
    <Box>
        <PageHero 
            imageSrc={imgSrc}
            title={title}
            desc={desc}
        />
        <Container maxW="container.xl" py={10} mt={{ base: 0, md: "100px" }}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                <Box>
                    <Heading color={"secondary"} mb={5}>
                        Erhvervsflytning
                    </Heading>
                    <Text my={5}>
                        Når det gælder erhvervsflytning, forstår vi hos Hammerflyt, hvor vigtigt det er at sikre en gnidningsfri og effektiv proces, så din virksomhed oplever minimal nedetid. Vores erfarne folk har ekspertisen til at håndtere komplekse firmaflytninger, uanset om det drejer sig om kontorer, butikker eller lagerfaciliteter. Vi arbejder sammen med dig for at planlægge og udføre flytningen på en måde, der passer til din tidsplan.
                    </Text>
                    <Text mb={5}>
                        Med vores professionelle flyttemænd og moderne udstyr sørger vi for, at dine kontormøbler, IT-udstyr og dokumenter transporteres sikkert til din nye placering. Vi har blandt andet hjulpet med flytning for erhverv rundt på Sjælland, eksempelvis i København og Nordsjælland, men vi hjælper gerne med netop din firmaflytning, uanset hvor i Danmark du skal flytte til og fra – også hvis det er i udlandet.
                    </Text>
                </Box>
                <Box >
                    <Image
                        src="/dkflytte_1.jpeg"
                        alt="dkflytte"
                        rounded="xl"
                    />
                </Box>
            </SimpleGrid>
        </Container>
        <Box bgColor="secondary" m={5} p={5} rounded={"3xl"}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                <Box>
                    <Image
                        src="/dkflytte_1.jpeg"
                        alt="dkflytte"
                        rounded={"xl"}
                    />
                </Box>
                <Box py={1}>
                    <Heading color={"white"} mb={5}>
                        Skræddersyet firmaflytning til din virksomheds behov
                    </Heading>
                    <Text my={5} color={"white"}>
                        Hos Hammerflyt forstår vi, at hver virksomhed er unik. Derfor tilbyder vi skræddersyede løsninger til erhvervsflytning, der er tilpasset din virksomheds specifikke behov. Vores flyttefolk arbejder tæt sammen med dig for at udarbejde en detaljeret plan, så overgangen til det nye kontor bliver så glat som muligt.
                    </Text>
                    <Text mb={5} color={"white"}>
                        Vi tager os af alle trin i processen med flytning for firmaer, herunder pakning, transport og udpakning på det nye sted, så du og dit personale hurtigt kan komme tilbage til jeres daglige arbejde. Vi kan desuden også være behjælpelige med flytterengøring, hvis du ifølge lejekontrakten skal efterlade de gamle lokaler i rengjort tilstand.
                    </Text>
                </Box>
            </SimpleGrid>
        </Box>
        <Container maxW="container.lg" py={10} id="10">
            <Card my={10} boxShadow=" 4px 0px 0px 0px rgba(0, 144, 200, 0.3)">
            <CardHeader>
                <Heading
                    color="secondary"
                    size="lg"
                    mt={5}
                >
                    Professionel kontorflytning uden stress og nedetid
                </Heading>
            </CardHeader>
            <CardBody>
                <Text fontSize="lg">
                    Skal din virksomhed flytte kontor uden afbrydelser i arbejdet? Hos DK Flytte tilbyder vi effektiv og sikker kontorflytning, hvor vi tager hånd om alle detaljer, så du og dine medarbejdere kan fokusere på arbejdet. Vi planlægger flytningen nøje for at sikre en glidende overgang og minimal forstyrrelse af dagligdagen.
                </Text>
                <Text fontSize="lg" mt={8}>
                    Vi håndterer kontormøbler, IT-udstyr og vigtige dokumenter med omhu og sørger for sikker transport til den nye adresse – uanset om flytningen er på Sjælland, i resten af Danmark eller til udlandet.
                </Text>
            </CardBody>
            </Card>
        </Container>
        <Container maxW="container.xl" py={10}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                <Box>
                    <Heading color={"secondary"} mb={5}>
                        Skræddersyet flytteservice til din virksomhed
                    </Heading>
                    <Text my={10}>
                        Uanset om du flytter til et større kontor eller blot skifter etager, tilpasser vi vores service præcist efter dine behov. Vores erfarne flyttemænd hjælper med nedpakning, transport og udpakning, så I hurtigt kan komme tilbage til arbejdet uden afbrydelser.
                    </Text>
                    <Text mb={10}>
                        Hos DK Flytte forstår vi, at tid er penge, og vi arbejder derfor for at minimere nedetid og gøre flytningen så effektiv som muligt. Udover kontorflytning hjælper vi også med andre erhvervsflytninger – fx butikker, klinikker, lagerhaller og andre erhvervslokaler.
                    </Text>
                    <Text mb={10}>
                        DK Flytte – din pålidelige partner til sikker og effektiv kontorflytning.
                    </Text>
                </Box>
                <Box id="11">
                    <Image
                        src="/moving_box_1.jpg"
                        alt="dkflytte"
                        h={"450px"}
                    />
                </Box>
            </SimpleGrid>
        </Container>
        <Box bgColor="secondary"> 
            <Container maxW="container.xl" py={10}>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                    <Image
                        src={"/moving_box_1.jpg"}
                        alt='dk-flytte'
                        h={"640px"}
                    />
                    <Box>
                        <Heading color={"white"} mb={5}>
                            Express transport – hurtig og pålidelig levering med DK Flytte
                        </Heading>
                        <Text fontSize="md" color="white">
                            Har du brug for hurtig og sikker levering? Hos DK Flytte tilbyder vi express transport, hvor dine ejendele når frem hurtigt og trygt. Vores erfarne flyttemænd og moderne køretøjer sikrer, at alt bliver håndteret forsvarligt under hele transporten.
                        </Text>
                        <Text fontSize="md" mt={8} color="white">
                            Vi planlægger ruten nøje for at minimere leveringstiden og reducere forsinkelser, uanset om det drejer sig om møbler, kontorudstyr eller andre vigtige genstande. Selvom vi har base på Sjælland og hurtigt kan servicere Nordsjælland og København, tilbyder vi vores hurtige og pålidelige transport i hele Danmark.
                        </Text>
                        <Heading color={"white"} mb={5}>
                            Akut og fleksibel express transport
                        </Heading>
                        <Text fontSize="md" color="white">
                            Express transport handler ofte om akutte behov, hvor fleksibilitet og tilgængelighed er altafgørende. Hos DK Flytte er vi tilgængelige 24/7 og kan rykke hurtigt ud, når du har brug for det.
                        </Text>
                        <Text fontSize="md" mt={8} color="white">
                            Vi tilpasser vores løsninger til dine specifikke behov og koordinerer med dig for at sikre, at ruten og leveringsplanen passer præcist til dine ønsker. Med vores forskellige flyttevogne kan vi håndtere både små og store transportopgaver og levere dine ting til tiden, hver gang.
                        </Text>
                        <Text fontSize="md" mt={8} color="white">
                            DK Flytte – din pålidelige partner til hurtig, sikker og fleksibel express transport.
                        </Text>
                    </Box>
                </SimpleGrid>
            </Container>
        </Box>
        <Container maxW="container.xl" py={10}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                <Box>
                    <Heading color={"secondary"} mb={5}>
                        Kontakt os for et uforpligtende tilbud på erhvervsflytning
                    </Heading>
                    <Text my={10}>
                        Planlægger du en erhvervsflytning, eksempelvis en butiks- eller kontorflytning? Lad Hammerflyt være din partner og sikre en problemfri firmaflytning. Kontakt os i dag for et uforpligtende tilbud.
                    </Text>
                    <Text mb={10}>
                        Vi er dedikerede til at hjælpe virksomheder med at flytte hurtigt og effektivt, og vi står klar til at hjælpe dig med alle aspekter af processen. Uanset hvor du skal flytte hen, og hvor meget der skal flyttes, sørger vi for en sikker og effektiv flytning.
                    </Text>
                    <Stack direction={{ base: 'column', md: 'row' }}  mt={5} align="center" justify={"center"} spacing={10}>
                        <Button size="lg" py={9} px={20} rounded="full" fontWeight="semibold" _hover={{bgColor: "whiteAlpha.500", color: "secondary", borderColor: "secondary"}}>Få et tilbud</Button>
                        <Button size="lg" py={9} px={20} variant="outline" textColor="secondary" borderColor={"secondary"} rounded="full" _hover={{bgColor: "blackAlpha.50"}}>Ring: 42 66 92 42</Button>
                    </Stack>
                </Box>
                <Box>
                    <Image
                        src="/moving_box_1.jpg"
                        alt="dkflytte"
                        h={"520px"}
                    />
                </Box>
            </SimpleGrid>
        </Container>
    </Box>
  )
}

export default BusinessMoving
