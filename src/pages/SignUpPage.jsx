import React from "react";
import { SignUp } from "@clerk/clerk-react";

export default function SignUpPage() {
  return (
    <div className="flex justify-center mt-20">
      <SignUp afterSignUpUrl="/dashboard" />
    </div>
  );
}
