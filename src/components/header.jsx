// import React from 'react'

import { Link } from "react-router-dom"
// import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react"
import { Button } from "./ui/button"

function Header() {
  return (
    <>
      <nav className="py-4 flex justify-between items-center">
        <Link>
          <img className="h-20" src="/logo.png" alt="hiring-logo" />
        </Link>
        <Button variant="outline" >Login</Button>

        {/* <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn> */}
      </nav>
    </>
  )
}

export default Header