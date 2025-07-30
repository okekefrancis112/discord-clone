import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { NavigationAction } from "./navigation-action";
import { Separator } from "../ui/separator";
import { ScrollArea } from "../ui/scroll-area";
import { NavigationItem } from "./navigation-item";
import { ModeToggle } from "../mode-toggle";
import { UserControl } from "../user-control";

// export const NavigationSidebar = async () => {
//     const profile = await currentProfile();

//     if(!profile) {
//         return redirect("/");
//     }

//     const servers = await db.server.findMany({
//         where: {
//             members: {
//                 some: {
//                     profileId: profile.id
//                 }
//             }
//         }
//     });

//     return (
//         <div
//             className="space-y-4 flex flex-col items-center h-full text-primary w-full dark:bg-[#1E1F22] py-3"
//         >
//             <NavigationAction />
//             <Separator
//                 className="h-[2px] bg-zinc-300 dark:bg-zinc-700 rounded-md w-10 mx-auto"
//             />
//             <ScrollArea className="flex-1 w-full">
//                 {servers.map((server) => (
//                     <div key={server.id} className="mb-4">
//                         <NavigationItem
//                             id={server.id}
//                             name={server.name}
//                             imageUrl={server.imageUrl}
//                         />
//                     </div>
//                 ))}
//             </ScrollArea>
//             <div className="pb-3 mt-auto flex items-center flex-col gap-y-4">
//                 <ModeToggle />
//                 <UserControl />
//             </div>
//         </div>
//     );
// };

// components/navigation-sidebar.tsx

export const NavigationSidebar = async () => {
  let profile;
  try {
    profile = await currentProfile();
  } catch (error) {
    console.error("NavigationSidebar: Error fetching profile:", error);
    return (
      <div className="space-y-4 flex flex-col items-center h-full text-primary w-full dark:bg-[#1E1F22] py-3">
        <p className="text-red-500 text-sm">Error loading profile</p>
      </div>
    );
  }

  if (!profile) {
    console.log("NavigationSidebar: No profile found, redirecting to /");
    return redirect("/"); // Ensure redirect works in layout context
  }

  type Server = {
    id: string;
    name: string;
    imageUrl: string;
    // Add other fields if needed
  };

  let servers: Server[] = [];
  try {
    servers = await db.server.findMany({
      where: {
        members: {
          some: {
            profileId: profile.id,
          },
        },
      },
    });
  } catch (error) {
    console.error("NavigationSidebar: Error fetching servers:", error);
  }

  return (
    <div className="space-y-4 flex flex-col items-center h-full text-primary w-full dark:bg-[#1E1F22] py-3">
      <NavigationAction />
      <Separator className="h-[2px] bg-zinc-300 dark:bg-zinc-700 rounded-md w-10 mx-auto" />
      <ScrollArea className="flex-1 w-full">
        {servers.length === 0 ? (
          <p className="text-center text-zinc-500 text-sm">No servers found</p>
        ) : (
          servers.map((server: Server) => (
            <div key={server.id} className="mb-1">
              <NavigationItem id={server.id} name={server.name} imageUrl={server.imageUrl} />
            </div>
          ))
        )}
      </ScrollArea>
      <div className="pb-3 mt-auto flex items-center flex-col gap-y-4">
        <ModeToggle />
        <UserControl />
      </div>
    </div>
  );
};