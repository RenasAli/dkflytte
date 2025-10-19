"use client";
import { Box, Container, Heading, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, SimpleGrid } from '@chakra-ui/react'

const faqs = [
  { q: 'Hvordan sikrer I skrøbelige genstande under flytningen?', a: 'Vi anvender specialiserede emballageteknikker og sikrer ekstra beskyttelse med polstring, så dine skrøbelige genstande når sikkert frem til destinationen.' },
  { q: 'Er der specifikke genstande, I ikke transporterer?', a: 'Vi undlader transport af farlige materialer og genstande, og vi informerer tydeligt om eventuelle begrænsninger for at sikre sikkerhed og overholdelse af lovgivningen.' },
  { q: 'Hvordan håndterer I store møbler eller specielle genstande?', a: 'Vores erfarne team bruger avanceret udstyr og teknikker til at håndtere store og usædvanlige genstande forsvarligt, og vi sikrer, at de transporteres sikkert til din nye destination.' },
  { q: 'Hvad gør I i tilfælde af forsinkelser eller uforudsete hændelser?', a: 'Vi har nødplaner og kommunikerer proaktivt for at håndtere uventede situationer, og vi arbejder altid for at levere en pålidelig service inden for den aftalte tidsramme.' },
  { q: 'Hvad er jeres politik for forsikring af ejendele under flytningen?', a: 'Vi tilbyder forsikringsmuligheder for at beskytte dine ejendele mod eventuelle skader under flytningen, og vores team vejleder dig gerne om de tilgængelige dækninger.' },
  { q: 'Hvor lang tid i forvejen skal jeg booke flytningen?', a: 'Vi anbefaler at booke din flytning mindst et par dage i forvejen for at sikre tilgængelighed og give tilstrækkelig tid til planlægning og forberedelse.' },
]

export default function FAQ(){
  return (
    <Container maxW="container.lg" py={10}>
      <Heading mb={10} textAlign="center" color="secondary">Ofte stillede spørgsmål</Heading>
      <Accordion allowMultiple borderWidth={0}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacingX={6}>
          <Box>
            {faqs.map((f, i) => {
              if(i%2 != 0) return;
              return(
                <AccordionItem key={i} borderWidth={1} m={1} bg="#f6f7fb" minH={20}>
                  <Heading bg="#f6f7fb" py={2}>
                    <AccordionButton _hover={{bg: "none"}}>
                      <Box flex="1" textAlign="left">{f.q}</Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </Heading>
                  <AccordionPanel pb={4}>{f.a}</AccordionPanel>
                </AccordionItem>
              )
            })}
          </Box>
          <Box>
            {faqs.map((f, i) => {
              if(i%2 == 0) return;
              return(
                <AccordionItem key={i} borderWidth={1} m={1} bg="#f6f7fb" minH={20}>
                  <Heading bg="#f6f7fb" py={2}>
                    <AccordionButton _hover={{bg: "none"}}>
                      <Box flex="1" textAlign="left">{f.q}</Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </Heading>
                  <AccordionPanel pb={4}>{f.a}</AccordionPanel>
                </AccordionItem>
              )
            })}
          </Box>
        </SimpleGrid>
      </Accordion>
    </Container>
  )
}
