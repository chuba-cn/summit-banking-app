import MobileNav from "@/components/MobileNav";
import SideBar from "@/components/SideBar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedInUser = { firstName: 'Chuba', lastName: 'Nigel'}

  return (
    <main className="flex h-screen w-full font-inter">
      <SideBar user={loggedInUser}/>
      <div className="flex flex-col size-full">
        <div className="root-layout">
          <Image
            src="/icons/logo.svg"
            alt="menu icon"
            width={30}
            height={30}
          />

          <div>
            <MobileNav user={loggedInUser}/>
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
