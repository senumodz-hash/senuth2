"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 p-6 glass m-4">
      <div className="text-center mb-8">
        <img
          src="/24daccd6-c2be-4610-a3d2-7841d3f93ecc.jpeg"
          className="w-24 mx-auto rounded-xl"
          alt="SENU MODZ"
        />
        <h1 className="text-xl font-bold mt-3">SENU MODZ</h1>
        <p className="text-gray-300 text-sm">Powering WhatsApp Automation</p>
      </div>

      <nav className="flex flex-col gap-4 text-gray-200">
        <Link href="/">Dashboard</Link>
        <Link href="/bots">Bots</Link>
        <Link href="/buy">Buy Panel</Link>
        <Link href="/resources">Resources</Link>
        <Link href="/profile">Profile</Link>
      </nav>
    </aside>
  );
}
