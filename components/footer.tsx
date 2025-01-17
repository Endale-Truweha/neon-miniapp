'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { CircleAlert, CircleCheckBig, Plus } from 'lucide-react';

const Footer: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  const menuItems = [
    {
      href: '/protected',
      icon: <CircleAlert color="#12972c" />,
      label: 'Status',
      isActive: pathname.endsWith('/protected'),
      activeColor: 'text-ethYellow-600',
      inactiveColor: 'text-ethYellow-300',
    },
    {
      href: '/protected/compleat',
      icon: <Plus color="#12972c" />,
      label: 'Compleat',
      isActive: pathname.includes('/compleat'),
      activeColor: 'text-ethGray-100',
      inactiveColor: 'text-[#85827d]',
    },
    {
      href: '/protected/follow',
      icon: <CircleCheckBig color="#12972c" />,
      label: 'Follow',
      isActive: pathname.includes('/follow'),
      activeColor: 'text-ethGray-100',
      inactiveColor: 'text-[#85827d]',
    },
  ];

  const handleNavigation = (href: string) => {
    router.push(href);
  };

  return (
    <div className="fixed bottom-0 w-full bg-[#272a2f] flex justify-around items-center z-50 rounded-3xl text-xs p-2">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className={`text-center w-1/5 ${
            item.isActive ? `bg-[#1c1f24] ${item.activeColor}` : item.inactiveColor
          } m-1 p-2 rounded-2xl`}
        >
          <button
            onClick={() => handleNavigation(item.href)}
            className="flex flex-col items-center w-full hover:bg-ethLightBlue-300"
          >
            {item.icon}
            <span className="mt-1 text-lg font-extrabold">{item.label}</span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Footer;
