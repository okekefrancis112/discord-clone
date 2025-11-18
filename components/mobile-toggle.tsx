import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { NavigationSidebar } from "@/components/navigation/navigation-sidebar"
import { ServerSidebar } from "@/components/server/server-sidebar"

export const MobileToggle = ({
    serverId
}: { serverId: string }) => {
    return (
        // ! TODO: TEST THIS MOBILE TOGGLE VERY WELL TO SEE IF THE HAMBUGER MENU WORKS PROPERLY
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 flex gap-0">
                <div className="w-[72px]">
                    <NavigationSidebar />
                </div>
                <ServerSidebar serverId={serverId} />
            </SheetContent>
        </Sheet>
    )
}

// export const MobileToggle = ({ serverId }: { serverId: string }) => {
//     return (
//         <Sheet>
//             <SheetTrigger asChild>
//                 <Button
//                     variant="ghost"
//                     size="icon"
//                     className="md:hidden hover:bg-zinc-200 dark:hover:bg-zinc-800" // Added hover states
//                     aria-label="Toggle navigation menu" // Accessibility
//                 >
//                     <Menu className="h-5 w-5" /> // Explicit icon sizing
//                 </Button>
//             </SheetTrigger>
//             <SheetContent
//                 side="left"
//                 className="p-0 flex gap-0 w-full"
//                 // overlayClassName="bg-black/10" // Optional: better overlay
//             >
//                 <div className="w-[72px] border-r border-zinc-200 dark:border-zinc-800">
//                     <NavigationSidebar />
//                 </div>
//                 <div className="flex-1 overflow-y-auto">
//                     <ServerSidebar serverId={serverId} />
//                 </div>
//             </SheetContent>
//         </Sheet>
//     )
// }