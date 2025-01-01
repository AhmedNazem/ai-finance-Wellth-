import { currentUser } from "@clerk/nextjs/server";
import { db } from "./prisma";

export const checkUser = async () => {
  const user = await currentUser();
  if (!user) {
    return null;
  }
  try {
    const loggedInUser = await db.user.findUnique({
      where: {
        clerkUserId: user.id, // Corrected field name
      },
    });

    if (loggedInUser) {
      return loggedInUser;
    }

    const name = `${user.firstName} ${user.lastName}`;
    const newUser = await db.user.create({
      data: {
        clerkUserId: user.id, // Corrected field name
        name,
        imageUrl: user.imageUrl, // Corrected field name
        email: user.emailAddresses[0].emailAddress,
      },
    });

    return newUser; // Make sure to return the newly created user
  } catch (error) {
    console.error("Error creating or fetching user:", error.message);
    throw new Error("Failed to create or fetch the user.");
  }
};
