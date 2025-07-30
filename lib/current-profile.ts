import { auth } from "@clerk/nextjs/server";
import { db } from "./db";

export const currentProfile = async () => {
    const authResult = await auth();
    const userId = authResult.userId;

    if (!userId) {
        return null;
    }

    const profile = await db.profile.findUnique({
        where: {
            userId
        }
    });

    return profile;
}