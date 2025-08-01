import { cn } from "@/lib/utils";
// components/user-avartar.tsx

import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

// …rest of file unchanged…

interface UserAvatarProps {
    src?: string;
    className?: string;
}

export const UserAvatar = ({
    src,
    className
}: UserAvatarProps) => {
    return (
        <Avatar className={cn(
            "h-7 w-7 md:h-10 md:w-10",
            className
        )}>
            <AvatarImage src={src} />
+            <AvatarFallback>
+                User
+            </AvatarFallback>
        </Avatar>
    )
}