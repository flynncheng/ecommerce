import { Search } from "lucide-react";
import Account from "./Account";
import Cart from "./cart";
import Logo from "./Logo";
import Menus from "./menus";

export default function Nav() {
  return (
    <nav
      aria-label="Top"
      className="sticky top-0 z-50 border-b border-gray-100 bg-white"
    >
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between px-4 py-2 sm:px-6 lg:h-16 lg:max-w-screen-2xl lg:px-8 lg:pb-0">
        <Menus />
        <div className="flex lg:order-first">
          <Logo />
        </div>
        <div className="flex items-center lg:order-last">
          <div className="flex lg:ml-6">
            <Account />
          </div>
          <Cart />
        </div>
        {process.env.NEXT_PUBLIC_FEATURE_SEARCH_ENABLED === "true" && (
          <Search />
        )}
      </div>
    </nav>
  );
}
