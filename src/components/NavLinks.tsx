"use client";
import { usePathname } from "next/navigation";
import NavButton from "./NavButton";
import PrivateMovingNavButton from "./PrivateMovingNavButton";
import BussinessMovingNavButton from "./BusinessMovingNavButton";


interface NavLinksProps {
  onClose?: () => void;
}

const NavLinks = ({onClose}: NavLinksProps) => {
    const pathname = usePathname();
    const isActive = (path: string) => pathname === path;
  return (
    <>
      <NavButton onClose={onClose} href="/" isActive={isActive("/")} title="FORSIDE"/>
      <PrivateMovingNavButton isActive={isActive("/privatflytning")} onClose={onClose}/>
      <BussinessMovingNavButton isActive={isActive("/erhvervsflytning")} onClose={onClose}/>
      <NavButton onClose={onClose} href="/om-os" isActive={isActive("/om-os")} title="OM DK-FLYTTE"/>
      <NavButton onClose={onClose} href="/priser" isActive={isActive("/priser")} title="PRISER"/>
      <NavButton onClose={onClose} href="/kontakt" isActive={isActive("/kontakt")} title="KONTAKT"/>
    </>
  )
}

export default NavLinks;