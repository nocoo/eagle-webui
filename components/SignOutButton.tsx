"use client";

import { Text, UnstyledButton } from "@mantine/core";
import { IconLogout } from "@tabler/icons-react";
import { signOut } from "next-auth/react";
import classes from "./AppNabbar/MainLink.module.css";

type SignOutButtonProps = {
  label: string;
};

export function SignOutButton({ label }: SignOutButtonProps) {
  const handleSignOut = () => {
    signOut({ callbackUrl: "/login" });
  };

  return (
    <UnstyledButton className={classes.button} onClick={handleSignOut}>
      <IconLogout className={classes.icon} size={20} stroke={1} />
      <Text size="sm" className={classes.label}>
        {label}
      </Text>
    </UnstyledButton>
  );
}
