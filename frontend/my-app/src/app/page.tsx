"use client";
// import { SignIn } from "@/components/SignIn";
import { CldUploadButton } from "next-cloudinary";

export default function Home() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 items-center justify-items-center min-h-screen  font-[family-name:var(--font-inter-sans)]">
      <div className="max-w-md w-full space-y-8">
        {/* <SignIn /> */}
        <CldUploadButton uploadPreset="foods-photo" />
      </div>
    </div>
  );
}
