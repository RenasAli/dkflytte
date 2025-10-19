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
      
      {/* <NavButton onClose={onClose} href="/privatflytning" isActive={isActive("/privatflytning")} title="PRIVATFLYTNING"/> */}

      <PrivateMovingNavButton isActive={isActive("/privatflytning")} onClose={onClose}/>
      <BussinessMovingNavButton isActive={isActive("/erhvervsflytning")} onClose={onClose}/>
      {/* <NavButton onClose={onClose} href="/erhvervsflytning" isActive={isActive("/erhvervsflytning")} title="ERHVERVSFLYTNING"/> */}

      <NavButton onClose={onClose} href="/about" isActive={isActive("/about")} title="OM DK-FLYTTE"/>
      <NavButton onClose={onClose} href="/pricing" isActive={isActive("/pricing")} title="PRICING"/>

      <NavButton onClose={onClose} href="/contact" isActive={isActive("/contact")} title="KONTAKT"/>
    </>
  )
}

export default NavLinks;