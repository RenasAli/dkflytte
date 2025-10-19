"use client";
import { Button } from "@chakra-ui/react";
import Link from "next/link";

interface NavButtonProps {
    onClose?: () => void;
    isActive: boolean;
    href: string;
    title: string;
}

const NavButton = ({onClose, isActive, href, title}: NavButtonProps) => {
  return (
    <Button
        as={Link}
        href={href}
        variant="ghost"
        _hover={{bg: "none", color: "secondary"}}
        fontWeight="bold"
        fontSize="md"
        color={isActive ? "accent" : "primary.500"}
        onClick={onClose}
    >
        {title}
    </Button>
  )
}

export default NavButton
