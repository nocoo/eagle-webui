"use client";

import {
  Button,
  Center,
  Container,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconBrandGoogle } from "@tabler/icons-react";
import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";
  const error = searchParams.get("error");

  const handleSignIn = () => {
    signIn("google", { callbackUrl });
  };

  return (
    <Container size="xs">
      <Center h="100vh">
        <Paper radius="md" p="xl" withBorder w="100%">
          <Stack align="center" gap="lg">
            <Title order={2}>Eagle WebUI</Title>
            <Text c="dimmed" ta="center">
              Sign in to access your Eagle library
            </Text>

            {error && (
              <Text c="red" size="sm" ta="center">
                {error === "AccessDenied"
                  ? "Access denied. Your email is not in the allowed list."
                  : "An error occurred during sign in. Please try again."}
              </Text>
            )}

            <Button
              fullWidth
              size="md"
              variant="default"
              leftSection={<IconBrandGoogle size={20} />}
              onClick={handleSignIn}
            >
              Sign in with Google
            </Button>
          </Stack>
        </Paper>
      </Center>
    </Container>
  );
}
