"use client";

import PageHero from "@/components/PageHero";
import { Box, Container, Heading, SimpleGrid, Text, Image, Button, Stack, Card, CardBody, CardHeader, Link } from "@chakra-ui/react";
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
    const imgSrc = "/dkflytte_6.jpg";
    const title = "Erhvervsflytning";
    const desc = "Skal virksomheden flytte til nye lokaler? Hos DK Flytte sørger vi for en effektiv og sikker erhvervsflytning med minimal nedetid, så jeres kontorflytning bliver problemfri fra planlægning til drift.";
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
                        Erhvervsflytning – effektiv kontorflytning med minimal nedetid
                    </Heading>
                    <Text my={5}>
                        Hos DK Flytte ved vi, at en erhvervsflytning skal være gnidningsfri og effektiv, så driften påvirkes mindst muligt. Vores erfarne team planlægger flytningen i tæt samarbejde med jer og håndterer alt fra kontorer og butikker til lagerfaciliteter – altid tilpasset jeres tidsplan og behov.
                    </Text>
                    <Text mb={5}>
                        Med professionelle flyttemænd og moderne udstyr transporterer vi kontormøbler, IT-udstyr og arkiv sikkert til den nye adresse. Vi hjælper virksomheder på hele Sjælland – særligt i København og Nordsjælland – og udfører firmaflytninger i resten af Danmark samt internationalt.
                    </Text>
                </Box>
                <Box >
                    <Image
                        src="/image_12.jpg"
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
                        src="/image_5.jpg"
                        alt="dkflytte"
                        rounded={"xl"}
                    />
                </Box>
                <Box py={1}>
                    <Heading color={"white"} mb={5}>
                        Skræddersyet erhvervsflytning – planlagt efter jeres behov
                    </Heading>
                    <Text my={5} color={"white"}>
                        Hos DK Flytte ved vi, at hver virksomhed er unik. Derfor skræddersyr vi firmaflytning og kontorflytning efter jeres specifikke krav, tidsplan og budget. Vores erfarne flyttefolk planlægger i tæt dialog med jer, så overgangen til nye lokaler bliver glidende og med minimal nedetid.
                    </Text>
                    <Text mb={5} color={"white"}>
                        Vi håndterer hele processen – professionel pakning, sikker transport og effektiv udpakning på den nye adresse – så jeres team hurtigt er i drift igen. Efter behov kan vi også stå for flytterengøring, så de fraflyttede lokaler afleveres i rengjort stand.
                    </Text>
                </Box>
            </SimpleGrid>
        </Box>
        <Container maxW="container.lg" py={10} id="10">
            <Card my={10} boxShadow="4px 0px 0px 0px rgba(0, 144, 200, 0.3)">
                <CardHeader>
                    <Heading color="secondary" size="lg" mt={5}>
                    Kontorflytning uden stress – effektiv og driftssikker
                    </Heading>
                </CardHeader>
                <CardBody>
                    <Text fontSize="lg">
                    Skal virksomheden flytte kontor uden at stoppe driften? DK Flytte leverer effektiv og sikker kontorflytning, hvor vi håndterer planlægning og detaljer, så jeres medarbejdere kan fokusere på arbejdet. Vi tilrettelægger forløbet nøje for en glidende overgang og minimal forstyrrelse af hverdagen.
                    </Text>
                    <Text fontSize="lg" mt={8}>
                    Vi tager os omhyggeligt af kontormøbler, IT-udstyr og vigtige dokumenter og sørger for sikker transport til den nye adresse – på Sjælland, i resten af Danmark eller internationalt.
                    </Text>
                </CardBody>
            </Card>
        </Container>
        <Container maxW="container.xl" py={10}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
               <Box>
                    <Heading color={"secondary"} mb={5}>
                        Skræddersyet erhvervsflytning – effektiv service til jeres virksomhed
                    </Heading>
                    <Text my={10}>
                        Uanset om I flytter til større lokaler eller blot skifter etage, tilpasser vi flytteservicen præcist efter jeres behov. Vores erfarne flyttemænd håndterer nedpakning, sikker transport og udpakning, så teamet hurtigt kan fortsætte arbejdet uden afbrydelser.
                    </Text>
                    <Text mb={10}>
                        Hos DK Flytte ved vi, at nedetid koster. Derfor planlægger vi forløbet stramt og udfører kontorflytning så effektivt som muligt. Vi hjælper også med andre erhvervsflytninger – fx butikker, klinikker, lagerhaller og andre erhvervslokaler.
                    </Text>
                    <Text mb={10}>
                        DK Flytte – din pålidelige partner til sikker, effektiv og skånsom kontorflytning.
                    </Text>
                </Box>
                <Box id="11">
                    <Image
                        src="/image_10.jpg"
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
                        src={"/image_4.jpeg"}
                        alt='dk-flytte'
                    />
                    <Box>
                        <Heading color={"white"} mb={5}>
                            Express transport – hurtig, sikker levering i hele Danmark
                        </Heading>
                        <Text fontSize="md" color="white">
                            Har du brug for lynhurtig og pålidelig levering? DK Flytte tilbyder express transport, hvor erfarne chauffører og moderne køretøjer sikrer forsvarlig håndtering og hurtig fremkomst af møbler, kontorudstyr og andre vigtige genstande.
                        </Text>
                        <Text fontSize="md" mt={8} color="white">
                            Vi planlægger ruten nøje for at minimere leveringstid og undgå forsinkelser. Med base på Sjælland kan vi hurtigt servicere København og Nordsjælland – og vi kører naturligvis express i hele Danmark.
                        </Text>
                        <Heading color={"white"} mb={5}>
                            Akut express – fleksibel 24/7-transport
                        </Heading>
                        <Text fontSize="md" color="white">
                            Når behovet er akut, er fleksibilitet afgørende. DK Flytte er tilgængelig 24/7 og rykker hurtigt ud, så dine leverancer når frem til tiden – også uden for normal arbejdstid.
                        </Text>
                        <Text fontSize="md" mt={8} color="white">
                            Vi tilpasser løsningen til dine krav og koordinerer rute og tidsplan med dig. Vores forskellige flyttevogne håndterer både små og store opgaver, så du får express transport, der er hurtig, sikker og præcis – hver gang.
                        </Text>
                        <Text fontSize="md" mt={8} color="white">
                            DK Flytte – din pålidelige partner til akut, sikker og fleksibel express transport.
                        </Text>
                    </Box>
                </SimpleGrid>
            </Container>
        </Box>
        <Container maxW="container.xl" py={10}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                <Box>
                    <Heading color={"secondary"} mb={5}>
                        Få et uforpligtende tilbud på erhvervsflytning
                    </Heading>
                    <Text my={10}>
                        Planlægger du kontor- eller butikflytning? Lad DK Flytte stå for en gnidningsfri firmaflytning med minimal nedetid. Kontakt os i dag for et skræddersyet, uforpligtende tilbud.
                    </Text>
                    <Text mb={10}>
                        Vi hjælper virksomheder med hurtig og effektiv erhvervsflytning – fra planlægning til sidste kasse. Uanset destination og omfang sørger vores erfarne flyttemænd for en sikker og effektiv proces.
                    </Text>
                    <Stack direction={{ base: 'column', md: 'row' }}  mt={5} align="center" justify={"center"} spacing={10}>
                        <Button as={Link} href='/kontakt' size="lg" py={9} px={20} rounded="full" fontWeight="semibold" _hover={{bgColor: "whiteAlpha.500", color: "secondary", borderColor: "secondary"}}>Få et tilbud</Button>
                        <Button as={Link} href={`tel:+4552698285`} size="lg" py={9} px={20} variant="outline" textColor="secondary" borderColor={"secondary"} rounded="full" _hover={{bgColor: "blackAlpha.50"}}>Ring: +45 52 69 82 85</Button>
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
