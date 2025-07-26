// "use client";

// import { useEffect, useState } from "react";
// import { CreateServerModal } from "@/components/modals/create-server-modal";

// export const ModalProvider = () => {
//     const [isMounted, setIsMounted] = useState(false);

//     useEffect(() => {
//         setIsMounted(true);
//     }, []);

//     if (!isMounted) {
//         return null;
//     }

//     return (
//         <>
//             <CreateServerModal />
//         </>
//     )
// }

// components/providers/modal-provider.tsx
"use client";

import { useEffect, useState } from "react";
import { CreateServerModal } from "@/components/modals/create-server-modal";
import { useModal } from "@/hooks/use-modal-store";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { type, isOpen } = useModal();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      {isOpen && type === "createServer" && <CreateServerModal />}
      {/* Add placeholders for other modals */}
      {isOpen && type === "editServer" && <div>EditServerModal Placeholder</div>}
      {isOpen && type === "createChannel" && <div>CreateChannelModal Placeholder</div>}
    </>
  );
};