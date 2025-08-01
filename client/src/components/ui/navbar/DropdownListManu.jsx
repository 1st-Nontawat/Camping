import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { AlignLeft } from "lucide-react";
import Usericon from "./Usericon";
import { Button } from "../button";
import { publicLinks,privateLinks } from "@/utils/link";
import { Link } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";
import SignOutLink from "./SignOutLink";

const DropdownListManu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <AlignLeft />
          <Usericon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {publicLinks.map((Item, index) => (
          <DropdownMenuItem key={index} asChild>
            <Link to={Item.href}>{Item.label}</Link>
          </DropdownMenuItem>
        ))}

        <DropdownMenuSeparator />
        <SignedOut>
        <DropdownMenuItem>
            <SignInButton mode="modal">Login</SignInButton>  
        </DropdownMenuItem>
        <DropdownMenuItem>
            <SignUpButton mode="modal">Register</SignUpButton>
        </DropdownMenuItem>
        </SignedOut>


       
      <SignedIn>
      {privateLinks.map((Item, index) => (
          <DropdownMenuItem key={index} asChild>
            <Link to={Item.href}>{Item.label}</Link>
          </DropdownMenuItem>
        ))}
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        {/* <UserButton /> */}
        <SignOutLink />
      </DropdownMenuItem>
      </SignedIn> 

      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default DropdownListManu;
