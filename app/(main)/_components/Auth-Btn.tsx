import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { buttonVariants } from "@/components/ui/button";

function AuthBtn() {
  return (
    <><SignedOut>
                <SignInButton mode="modal" >
                    <button className={`${buttonVariants({ variant: "default" })}`}>Sign In</button>
                </SignInButton>
                <SignUpButton mode="modal">
                    <button className={`${buttonVariants({ variant: "secondary" })}`}>
                        Sign Up
                    </button>
                </SignUpButton>
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn></>
  )
}

export default AuthBtn