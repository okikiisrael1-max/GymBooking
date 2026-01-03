import React from 'react';
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';

/**
 * ProtectedRoute
 * Wraps any component that should only be accessible by authenticated users.
 *
 * Usage:
 * <ProtectedRoute>
 *   <Dashboard />
 * </ProtectedRoute>
 */
export default function ProtectedRoute({ children }) {
  return (
    <>
      {/* Show content only if the user is signed in */}
      <SignedIn>{children}</SignedIn>

      {/* Redirect to sign-in if the user is not signed in */}
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
