"use client";

import { PrivatePage } from "@/components/PrivatePage";
import Link from "next/link";

export default function Me() {
  return (
    <PrivatePage>
      <div>Me</div>
      <Link href="/">home</Link>
    </PrivatePage>
  );
}
