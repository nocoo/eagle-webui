import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

// Parse allowed emails from environment variable (comma-separated)
function getAllowedEmails(): string[] {
  const emails = process.env.ALLOWED_EMAILS || "";
  return emails
    .split(",")
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean);
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/login",
    error: "/login",
  },
  callbacks: {
    signIn({ user }) {
      const allowedEmails = getAllowedEmails();

      // If no whitelist configured, deny all logins for security
      if (allowedEmails.length === 0) {
        console.warn(
          "ALLOWED_EMAILS not configured. Denying login for security.",
        );
        return false;
      }

      const userEmail = user.email?.toLowerCase();
      if (!userEmail || !allowedEmails.includes(userEmail)) {
        console.warn(`Login denied for email: ${userEmail}`);
        return false;
      }

      return true;
    },
    authorized({ auth }) {
      return !!auth?.user;
    },
  },
});
