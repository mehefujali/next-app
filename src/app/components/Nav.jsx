import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <div>
      <nav className=" flex justify-between mx-6 items-center my-4">
        <h1 className=" text-2xl font-bold">Mehefuj A.</h1>
        <ul className=" flex gap-6 items-center">
          <Link href='/'><li className=" cursor-pointer select-none ">Home</li></Link>
          <Link href='/posts'><li className=" cursor-pointer select-none ">Posts</li></Link>
          <Link href="/aboutus">
            {" "}
            <li className=" cursor-pointer select-none ">About us</li>
          </Link>

          <Link href='/contact-us'><li className=" cursor-pointer select-none ">contact us</li></Link>
         <Link href='/faq'> <li className=" cursor-pointer select-none ">faq</li></Link>
         
        </ul>
      </nav>
    </div>
  );
}
