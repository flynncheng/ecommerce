import React from "react";

export default function FooterListDesktop() {
  const footerNavs = [
    {
      label: "Resources",
      items: [
        {
          href: "/",
          name: "Contact",
        },
        {
          href: "/",
          name: "Support",
        },
        {
          href: "/",
          name: "Documentation",
        },
        {
          href: "/",
          name: "Pricing",
        },
      ],
    },
    {
      label: "About",
      items: [
        {
          href: "/",
          name: "Terms",
        },
        {
          href: "/",
          name: "License",
        },
        {
          href: "/",
          name: "Privacy",
        },
        {
          href: "/",
          name: "About US",
        },
      ],
    },
    {
      label: "Explore",
      items: [
        {
          href: "/",
          name: "Showcase",
        },
        {
          href: "/",
          name: "Roadmap",
        },
        {
          href: "/",
          name: "Languages",
        },
        {
          href: "/",
          name: "Blog",
        },
      ],
    },
    {
      label: "Company",
      items: [
        {
          href: "/",
          name: "Partners",
        },
        {
          href: "/",
          name: "Team",
        },
        {
          href: "/",
          name: "Careers",
        },
      ],
    },
  ];
  return footerNavs.map((item, idx) => (
    <ul className="space-y-4 text-gray-600" key={idx}>
      <h4 className="font-semibold text-gray-800 sm:pb-2">{item.label}</h4>
      {item.items.map((el, idx) => (
        <li key={idx}>
          <a href={el.href} className="duration-150 hover:text-gray-800">
            {el.name}
          </a>
        </li>
      ))}
    </ul>
  ));
}
