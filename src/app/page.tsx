"use client";
import { Box, Container, Heading, Text, Stack, Button, SimpleGrid, Flex, ListItem, UnorderedList, Image, Card, CardHeader, CardBody, Link } from '@chakra-ui/react';
import FAQ from '../components/FAQ';
import MovingPackages from '@/components/MovingPackages';
import BrandJsonLd from '@/components/BrandJsonLd';


export default function Home(){
  return (
    <>
      <BrandJsonLd />
      {/* HERO */}
      <Box position="relative" minH={{ base: '60vh', md: '85vh' }} overflow="hidden">
        <video
          autoPlay loop muted playsInline
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          src={"/dkflytte_hero.mov"}
          onError={(e)=> { e.currentTarget.style.display='none' }}
        />
        {/* fallback image */}
        {/* <Image src={"/dkflytte_1.jpg"} alt="flytning" position="absolute" inset={0} w="100%" h="100%" objectFit="cover" /> */}

        <Box position="absolute" inset={0} bgGradient="linear(to-b, rgba(0,0,0,0.55), rgba(0,0,0,0.75))" />
          <Flex maxW="container.2xl" minH={{ base: '60vh', md: '85vh' }}  position="relative" zIndex="5"  align="center" justify="center">
            <Box>
              <Heading fontSize={{ base: '2xl', md: '4xl', lg: "6xl" }} lineHeight="1.05" color="white" textAlign="center" my={10}>FTS FLYTTE & TRANSPORT SERVICE</Heading>
              <Stack spacing={6} color="white" p={5} m={5} bg="blackAlpha.200">
                <Text fontSize="lg" textAlign="center">Dit pålidelige flyttefirma – hver gang til tiden</Text>
                <Text fontSize="lg">Leder du efter et flyttefirma, der dukker op, passer på dine ting og får dig godt i mål – uden stress?<br/>Hos os er tid, tryghed og kvalitet drivkraften bag hver eneste opgave. Vi hjælper både med privatflytning, erhvervsflytning og akutte flytninger, når det skal gå stærkt.</Text>
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
                <Text fontSize="lg">Få et hurtigt og uforpligtende tilbud – kontakt os i dag, så lægger vi en plan, der passer til din tidsplan og dit budget.</Text>
                <Stack direction={{ base: 'column', md: 'row' }}  mt={5} align="center" justify={"center"} spacing={10}>
                  <Button as={Link} href='/kontakt' size="lg" py={9} px={20} rounded="full" fontWeight="semibold" _hover={{bgColor: "whiteAlpha.500"}}>Få et tilbud</Button>
                  <Button as={Link} href={`tel:+4552698285`} size="lg" py={9} px={20} variant="outline" textColor="white" rounded="full" _hover={{bgColor: "whiteAlpha.500"}}>Ring: +45 52 69 82 85</Button>
                </Stack>
              </Stack>
            </Box>
          </Flex>
      </Box>

      <Container maxW="container.xl" py={10}>
        <Heading color="primary.500" textAlign="center" mb={10}>Dit fleksible flyttefirma på hele Sjælland</Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          <Stack direction={{ base: 'column', md: 'row' }} py={5} borderWidth={1} boxShadow="md" align="center" justify={"center"}>
            <Image
              w={"100PX"}
              src={"/business_moving.gif"}
              alt='dk-flytte'
              ml={{ base: 0, md: 5 }}
            />
            <Box p={5}>
              <Heading fontSize="md" color="secondary">Erhvervsflytning</Heading>
              <Text fontSize="sm">
                Skal virksomheden flytte, sørger vores erfarne flyttemænd og sikre opbevaringsløsninger for en nem og tryg erhvervsflytning – med skræddersyede flyttetilbud til konkurrencedygtige priser.
              </Text>
            </Box>
          </Stack>
          <Stack direction={{ base: 'column', md: 'row' }} py={5} borderWidth={1} boxShadow="md" align="center" justify={"center"}>
            <Image
              w={"100PX"}
              src={"/private_moving.gif"}
              alt='dk-flytte'
              ml={{ base: 0, md: 5 }}
            />
            <Box p={5}>
              <Heading fontSize="md" color="secondary">Privatflytning</Heading>
              <Text fontSize="sm">
               Planlægger du at flytte, sørger vores erfarne flyttemænd og sikre opbevaringsløsninger for en nem, tryg og problemfri privatflytning – med attraktive tilbud til konkurrencedygtige priser.
              </Text>
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>

      <MovingPackages />

      <Box bgColor="secondary"> 
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
              <Image
                src={"/dkflytte_sqr_1.jpg"}
                alt='dk-flytte'
                h={"100%"}
              />
              <Box py={5}>
                <Heading color="white" mb={10}>
                  Professionelt flyttefirma for private og erhverv
                </Heading>
                <Text fontSize="md" color="white">
                  Hos DK Flytte får du en pålidelig partner, der tager ansvar for hele flyttedagen – fra planlægning til sidste kasse. Som velrenommeret flyttefirma med erfarne flyttemænd løser vi alle typer opgaver for både private og virksomheder og tilpasser altid flytteservicen til dine behov.
                </Text>
                <Text fontSize="md" mt={8} color="white">
                  Vores team er trænet i sikker og effektiv håndtering af dine ejendele. Med en komplet løsning – nedpakning, transport og udpakning – undgår du stress og spildtid. Vi hjælper kunder på hele Sjælland, herunder København og Nordsjælland, og udfører også flytninger i resten af Danmark.
                </Text>
                <Stack direction={{ base: 'column', md: 'row' }}  mt={5} align="center" justify={"center"} spacing={10}>
                  <Button as={Link} href='/kontakt' size="lg" py={9} px={20} rounded="full" fontWeight="semibold" bgColor="white" color="primary.500" _hover={{bg: "whiteAlpha.500", color: "white"}}>Få et tilbud</Button>
                  <Button as={Link} href={`tel:+4552698285`} size="lg" py={9} px={20} variant="outline" rounded="full" color="white" _hover={{ bg: "whiteAlpha.500"}}>Ring: +45 52 69 82 85</Button>
                </Stack>
              </Box>
          </SimpleGrid>
        </Container>
      </Box>
      <Container maxW="container.lg" py={10}>
         <Card my={10} boxShadow=" 4px 0px 0px 0px rgba(0, 144, 200, 0.3)">
            <CardHeader>
              <Heading
                color="secondary"
                size="lg"
                mt={5}
              >
                Pålideligt flyttefirma til privat- og erhvervsflytning
              </Heading>
            </CardHeader>
            <CardBody>
              <Text fontSize="lg">
                Gennem årene har vi hjulpet både privatpersoner og virksomheder sikkert i mål med alt fra små lejligheder og store huse til komplette butik- og kontorflytninger. Den erfaring har givet os en solid forståelse for de forskellige krav og behov, der kan opstå under en flytning.
              </Text>
              <Text fontSize="lg" mt={8}>
                Uanset om omfanget er lille eller stort, tager vores erfarne flyttemænd hånd om dine ejendele med omhu og respekt og leverer en sammenhængende flytteservice, der gør processen problemfri fra første planlægning til sidste kasse. Har du brug for professionelle flyttefolk til din næste privatflytning eller erhvervsflytning, står vi klar til at hjælpe.
              </Text>

            </CardBody>
         </Card>
      </Container>
      <FAQ/>
    </>
  )
}
