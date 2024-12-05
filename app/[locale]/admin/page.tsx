import React from 'react';
import { LogoutButton } from "@/components/buttons.component";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";

async function page() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin");
  }


  return (
    <>
      <div className="flex items-center flex-col justify-center min-h-screen px-4">
        <Link
          href="/admin/create"
        
          className="py-[18px] px-[50px] h-[66px]  flex items-center justify-center text-base uppercase  font-semibold  text-white bg-black"
        >
          Upload new Image
        </Link>

        <Link
          href="/admin/list"
        
          className="py-[18px] px-[50px] mt-12 h-[66px] w-64 flex items-center justify-center text-base uppercase  font-semibold  text-white bg-black"
        >
          Image List
        </Link>

        <Link
          href="/admin/booking"
        
          className="py-[18px] px-[50px] mt-12 h-[66px] w-64 flex items-center justify-center text-base uppercase  font-semibold  text-white bg-black"
        >
          Booking List
        </Link>

        <LogoutButton />
      </div>
    </>
  );
}

export default page;
