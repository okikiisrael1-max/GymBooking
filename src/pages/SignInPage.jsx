import React from "react";
import { SignIn } from "@clerk/clerk-react";

export default function SignInPage() {
  return (
    <div className="flex justify-center mt-20">
      <SignIn afterSignInUrl="/dashboard" />
    </div>
  );
}
