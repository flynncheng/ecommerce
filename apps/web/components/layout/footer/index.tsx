import FooterInputForm from "./FooterInputForm";
import FooterListMobile from "./FooterListMobile";
import FooterListDesktop from "./FooterListDesktop";
import FooterCopyright from "./FooterCopyright";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-100 lg:mt-28">
      <div className="mx-auto max-w-7xl space-y-10 p-6 sm:space-y-16 lg:max-w-screen-2xl lg:p-8">
        <FooterInputForm />
        <div className="sm:hidden w-full text-sm text-gray-700 ">
          <FooterListMobile />
        </div>
        <div className="hidden max-w-7xl flex-1 justify-between space-y-6 text-sm text-gray-700 sm:flex sm:space-y-0 lg:max-w-screen-2xl">
          <FooterListDesktop />
        </div>
        <FooterCopyright />
      </div>
    </footer>
  );
}
