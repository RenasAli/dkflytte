"use client";
import PageHero from "@/components/PageHero";
import { Box, Container, Heading, SimpleGrid, Text, Image, Button, Stack } from "@chakra-ui/react";
import { useEffect } from "react";

const LongDistanceMoving = () => {
    useEffect(() => {
        const scrollToId = sessionStorage.getItem('scrollToId');
        if (scrollToId) {
            const el = document.getElementById(scrollToId);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
            sessionStorage.removeItem('scrollToId');
        }
    }, [])
    const imgSrc = "/dkflytte_1.jpeg";
    const title = "Landsdækkende og internationale flytninger";
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
                <Box id="4">
                    <Heading color={"secondary"} mb={5}>
                        Flytning mellem Sjælland og Jylland – nemt, sikkert og effektivt
                    </Heading>
                    <Text mt={5}>
                        Skal du flytte fra Sjælland til Jylland – eller den anden vej? Hos DK Flytte sørger vi for en problemfri flytning over Storebælt, uanset om du flytter som privatperson eller virksomhed.
                    </Text>
                    <Text mb={5}>
                        Med vores mange års erfaring i landsdækkende flytninger håndterer vi hele processen fra start til slut. Vi pakker dine ejendele forsvarligt, transporterer dem sikkert og sørger for, at alt kommer frem i god stand – uanset afstanden.
                    </Text>
                    <Text mb={5}>
                        Vores flytteteam planlægger flytningen effektivt, så du slipper for stress og tunge løft. Du vælger selv, hvor meget du vil stå for – vi kan hjælpe med nedpakning, transport og udpakning, alt efter dit behov.
                    </Text>
                    <Text mb={5}>
                        Hos DK Flytte ved vi, at hver flytning er forskellig. Derfor tilpasser vi vores service til dine ønsker, så du får præcis den hjælp, du har brug for.
                        Uanset om turen går fra Sjælland til Jylland eller fra Jylland til Sjælland, garanterer vi en tryg og effektiv flytteoplevelse.
                    </Text>
                    <Text mb={5}>
                        DK Flytte – dit pålidelige flyttefirma på tværs af Danmark.
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
                <Box py={1} id="5">
                    <Heading color={"white"} mb={5}>
                        Udlandsflytning og international flytning – trygt og professionelt
                    </Heading>
                    <Text my={5} color={"white"}>
                        Skal du flytte til udlandet eller tilbage til Danmark? Hos DK Flytte sørger vi for en problemfri og sikker international flytning for både private og virksomheder.
                    </Text>
                    <Text mb={5} color={"white"}>
                        Vi ved, at en flytning over landegrænser kan virke uoverskuelig. Derfor står vores erfarne flyttemænd klar til at hjælpe dig hele vejen – fra nedpakning og transport til udpakning på din nye adresse. Vi sørger for, at alt planlægges og håndteres professionelt, så du kan fokusere på det, der virkelig betyder noget.
                    </Text>
                    <Text mb={5} color={"white"}>
                        Uanset om det gælder privatflytning eller erhvervsflytning, kan du stole på, at DK Flytte leverer en tryg, effektiv og professionel oplevelse – fra dør til dør, i Danmark og internationalt.
                    </Text>
                    <Text mb={5} color={"white"}>
                        DK Flytte – dit pålidelige flyttefirma til udlandsflytning og international transport.
                    </Text>
                </Box>
            </SimpleGrid>
        </Box>
        <Container maxW="container.xl" py={10}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                <Box id="6">
                    <Heading color={"secondary"} mb={5}>
                        Sikker flytteopbevaring og lageropbevaring hos DK Flytte
                    </Heading>
                    <Text my={5}>
                        Mangler du midlertidig plads til dine ejendele i forbindelse med en flytning? Hos DK Flytte tilbyder vi sikker og fleksibel flytteopbevaring, der beskytter dine ting, indtil du er klar til at modtage dem igen.
                    </Text>
                    <Text mb={5}>
                        Vores moderne og overvågede lagerrum giver dig fuld tryghed – uanset om du skal opbevare møbler, flyttekasser, tøj eller værdigenstande. Vi sørger for, at alt står tørt, sikkert og organiseret, så du kan fokusere på din flytning uden bekymringer.
                    </Text>
                    <Text mb={5}>
                        DK Flytte hjælper både private og erhvervskunder i hele Danmark, men mange af vores kunder kommer fra København og Nordsjælland, hvor vores lagerrum er ideelt placeret.
                        Vi tilbyder desuden møbelopbevaring og erhvervsopbevaring, så du nemt kan opbevare kontorinventar, arkiver eller produkter i kortere eller længere perioder.
                    </Text>
                    <Text mb={5}>
                        Har du brug for hjælp til afhentning af dine ting, klarer vi naturligvis også transporten. Vi kan endda rykke hurtigt ud ved akutte behov med express transport – 24/7.
                    </Text>
                    <Text mb={5}>
                        DK Flytte – sikker, fleksibel og professionel opbevaring til både private og virksomheder.
                    </Text>
                    <Stack direction={{ base: 'column', md: 'row' }}  mt={5} align="center" justify={"center"} spacing={10}>
                        <Button size="lg" py={9} px={20} rounded="full" fontWeight="semibold" _hover={{bgColor: "whiteAlpha.500", color: "secondary", borderColor: "secondary"}}>Få et tilbud</Button>
                        <Button size="lg" py={9} px={20} variant="outline" textColor="secondary" borderColor={"secondary"} rounded="full" _hover={{bgColor: "blackAlpha.50"}}>Ring: 42 66 92 42</Button>
                    </Stack>
                </Box>
                <Box>
                    <Image
                        src="/moving_box_2.jpg"
                        alt="dkflytte"
                        h={"700px"}
                    />
                </Box>
            </SimpleGrid>
        </Container>
    </Box>
  )
}

export default LongDistanceMoving
