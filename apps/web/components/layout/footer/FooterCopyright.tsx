import React from "react";
import { Facebook, Instagram, X } from "lucide-react";

export default function FooterCopyright() {
  return (
    <div className="items-center justify-between py-10 sm:flex sm:border-t">
      <p className="text-gray-600">
        © 2024 Oneosoft Inc. All rights reserved.
      </p>
      <div className="mt-6 flex items-center gap-x-6 text-gray-400 sm:m-0">
        <a href="/">
          <Facebook className="duration-150 hover:text-gray-500" />
        </a>
        <a href="/">
          <X size={28} className="duration-150 hover:text-gray-500" />
        </a>
        <a href="/">
          <Instagram className="duration-150 hover:text-gray-500" />
        </a>
      </div>
    </div>
  );
}
