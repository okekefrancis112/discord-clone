"use client";

import { UploadDropzone } from "@/lib/uploadthing";
import Image from "next/image";

import "@uploadthing/react/styles.css";
import { X } from "lucide-react";

interface FileUploadProps {
  onChange: (url: string) => void;
  value: string;
  endpoint: "messageFile" | "serverImage";
}

export const FileUpload = ({
  onChange,
  value = "",
  endpoint
}: FileUploadProps) => {
  const fileType = value?.split(".").pop();

  const handleRemove = () => {
    onChange(""); // Clear the value
  };

  if (value && fileType !== "pdf") {
    return (
      <div className="relative h-20 w-20">
        <Image
          fill
          src={value}
          alt="Upload"
          className="rounded-full"
          sizes="80px" // Added sizes prop
        />
        <button
          onClick={handleRemove}
          className="bg-rose-500 text-white p-1 rounded-full absolute top-0 right-0 shadow-sm"
          type="button"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    );
  }

  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        onChange(res?.[0]?.url || res?.[0]?.ufsUrl || "");
      }}
      onUploadError={(error: Error) => {
        console.error("Upload error:", error);
        // Optionally call onChange("") here if you want to reset on error
      }}
    />
  );
};