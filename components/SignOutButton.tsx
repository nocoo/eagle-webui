"use client";

import { Button } from "@mantine/core";
import { IconLogout } from "@tabler/icons-react";
import { signOut } from "next-auth/react";

type SignOutButtonProps = {
  label: string;
};

export function SignOutButton({ label }: SignOutButtonProps) {
  const handleSignOut = () => {
    signOut({ callbackUrl: "/login" });
  };

  return (
    <Button
      variant="subtle"
      color="gray"
      size="compact-sm"
      leftSection={<IconLogout size={16} stroke={1.5} />}
      onClick={handleSignOut}
      fullWidth
      justify="flex-start"
    >
      {label}
    </Button>
  );
}
