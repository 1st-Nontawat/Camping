import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { AlignLeft } from 'lucide-react';
import Usericon from "./Usericon";
import { Button } from "../button";
import { links } from "@/utils/link";
import { Link } from "react-router-dom";

const DropdownListManu = () => {
  return (
    <DropdownMenu>
    <DropdownMenuTrigger asChild>

      <Button variant="outline" >
      <AlignLeft  />
      <Usericon />
    </Button>

  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />

  {
  links.map((Item, index) => (
    <DropdownMenuItem key={index} asChild>
      <Link to={Item.href}>{Item.label}</Link>
    </DropdownMenuItem>
  )
  )}

    
  </DropdownMenuContent>
</DropdownMenu>
  )
}
export default DropdownListManu