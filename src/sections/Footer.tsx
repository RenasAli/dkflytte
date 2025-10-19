"use client";
import { Box } from "@chakra-ui/react";
import Link from "next/link";

export default function Footer() {
  return (
    <Box bg="secondary" py={6} mt={20}>
      <div className="container mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="font-bold text-lg mb-2">DK Flytte</h3>
          <p>CVR: 45235196</p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">Hurtige links</h3>
          <ul>
            <li><Link href="/" className="hover:underline">Forside</Link></li>
            <li><Link href="/about" className="hover:underline">Om os</Link></li>
            <li><Link href="/#services" className="hover:underline">Ydelser</Link></li>
            <li><Link href="/#pricing" className="hover:underline">Priser</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">Kontakt</h3>
          <p>Email: support@dkflytte.dk</p>
          <p>Telefon: +45 42 66 92 42</p>
        </div>
      </div>
    </Box>
  );
}
