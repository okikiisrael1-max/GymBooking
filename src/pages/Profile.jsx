import React from "react";
import { UserProfile } from "@clerk/clerk-react";

export default function Profile() {
  return (
    <div className="flex justify-center mt-10">
      <UserProfile />
    </div>
  );
}
