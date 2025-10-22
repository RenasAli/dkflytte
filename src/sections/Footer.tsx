"use client";
import { Box, Heading, SimpleGrid, Image, Text, Link as ChakraLink } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box bg="secondary" py={6} mt={20} color="white">
        <SimpleGrid columns={[1, null, 4]} spacing={6} mt={5} maxW="6xl" mx="auto" px={5}>
          <Box mt={"-30px"} zIndex={20}>
            <Image
              w={"200px"}
              src={"/logo.png"}
              alt='dk-flytte'
            />
          </Box>
          <Box>
            <Heading size="lg"  fontWeight={"semibold"}>DK Flytte</Heading>
            <Box px={3} mt={5}>
              <Text>
                testvej 35
              </Text>
              <Text>
                4600 Køge
              </Text>
              <Text>CVR: 40 40 40 40</Text>
            </Box>
          </Box>
          <Box>
            <Heading size="md" color="primary" fontWeight={"semibold"}>Kontakt os</Heading>
            <Box px={3} mt={5}>
              <Text>
                Email:{" "}
                <ChakraLink href={`mailto:kundeservice@dkflytte.dk`} _hover={{textDecoration: "underline"}} textColor="secondary.500">
                  kundeservice@dkflytte.dk
                </ChakraLink>
              </Text>
              <Text>
                Telefon:{" "}
                <ChakraLink href={`tel:+4552698285`} _hover={{textDecoration: "underline"}} textColor="secondary.500">
                  +45 52 69 82 85
                </ChakraLink>
              </Text>
            </Box>
          </Box>
          <Box>
            <Heading size="md" color="primary" fontWeight={"semibold"}>Læs mere</Heading>
            <Box px={3} mt={5} fontSize="sm">
              <Text>
                <ChakraLink href="/flytteservice" _hover={{textDecoration: "underline"}} textColor="secondary.500">
                    Flytteservice
                </ChakraLink>
              </Text>
              <Text>
                <ChakraLink href="/landsdaekkende-og-internationale-flytninger" _hover={{textDecoration: "underline"}} textColor="secondary.500">
                    Landsdækkende og internationale flytninger
                </ChakraLink>
              </Text>
              <Text>
                <ChakraLink href="/extra-services" _hover={{textDecoration: "underline"}} textColor="secondary.500">
                    Ekstra services & Tryghedspakker
              </ChakraLink>
              </Text>
            </Box>
          </Box>
        </SimpleGrid>
        <Box textAlign="center" mt={5}>
          <Text>&copy; {new Date().getFullYear()} DK Flytte — Alle rettigheder forbeholdes.</Text>
        </Box>
    </Box>
  );
}
