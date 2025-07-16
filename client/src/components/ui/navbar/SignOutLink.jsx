import { SignOutButton } from '@clerk/clerk-react';
import { Toaster, toast } from "sonner";

const SignOutLink = () => {
  const handleLogout = () => {
    toast.success("Logout successfully.");
  };

  return (
    <>
      <SignOutButton redirectUrl='/'>
        <button onClick={handleLogout}>Logout</button>
      </SignOutButton>
      <Toaster />
    </>
  );
};

export default SignOutLink;