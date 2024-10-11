'use client';
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/" passHref>
            <Image 
              src="/images/Logo_psp.png"
              alt="logo"
              width={128}
              height={38}
            />
        </Link>

        <p>&copy; {new Date().getFullYear()} Hospital Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;