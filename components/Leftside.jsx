import React from "react";
import { useRouter } from "next/router";


const Leftside = () => {
 
  const router = useRouter();
  const isBiuro = router.pathname.startsWith("/biuro");

  const menuItems = isBiuro
    ? [
        { label: "Lista Umów", href: "/biuro" },
        { label: "Obsługa Umów", href: "/biuro/obsluga" },
      ]
    : [
        { label: "Moje Umowy", href: "/" },
        { label: "Utwórz Umowę", href: "/utworz" },
        { label: "Klienci", href: "/klienci" },
      ];

  return (
    <div className="leftside">
      {menuItems.map((item) => (
        <a key={item.label} href={item.href} className="leftside-item">
          {item.label}
        </a>
      ))}
    </div>
  );
};

export default Leftside;