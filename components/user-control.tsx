"use client";

import { dark } from "@clerk/themes";
import { useCurrentTheme } from "@/hooks/use-current-theme";
import { UserButton } from "@clerk/nextjs";

interface Props {
    showName?: boolean;
}

export const UserControl = ({ showName }: Props) => {
    const currentTheme = useCurrentTheme();

    return (
        <UserButton
            showName={showName}
            appearance={{
                elements: {
                    userButtonBox: "rounded-md!",
                    // userButtonAvatarBox: "h-[48px] w-[48px]",
                    userButtonAvatarBox: "rounded-md! size-8!",
                    userButtonTrigger: "rounded-md!",
                },
                baseTheme: currentTheme === "dark" ? dark : undefined,
            }}
        />
    );
};
