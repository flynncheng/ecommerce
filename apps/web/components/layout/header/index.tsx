import { Pause, X } from "lucide-react";
import React from "react";

import { Button } from "@workspace/ui/components/button";
import { Link } from "@/lib/i18n/routing";

export default function Header() {
  return (
    <header className="h-10 bg-gray-100/75">
      <div className="mx-auto flex items-center justify-between px-4 sm:px-6 lg:max-w-screen-2xl lg:px-8">
        <Button variant="ghost" className="p-2 lg:relative lg:-left-3">
          <Pause strokeWidth={1} />
          <span className="sr-only">Stop</span>
        </Button>
        <p className="text-center text-sm font-[350]">
          New Arrivals: Timeless Sparkle. Elevate your everyday look.
          <Link href="#">
            <span className="pl-1 underline underline-offset-2">Shop now.</span>
          </Link>
        </p>
        <Button variant="ghost" className="p-2">
          <X strokeWidth={1} />
          <span className="sr-only">Close</span>
        </Button>
      </div>
    </header>
  );
}
