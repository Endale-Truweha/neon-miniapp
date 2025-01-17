'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CircleAlert, CircleCheckBig, Plus } from 'lucide-react';

const Footer: React.FC = () => {
  const pathname = usePathname();

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
      href: '/',
      icon: <CircleCheckBig color="#12972c" />,
      label: 'Follow',
      isActive: pathname.includes('/follow'),
      activeColor: 'text-ethGray-100',
      inactiveColor: 'text-[#85827d]',
    },
  ];

  return (
    <div className="fixed bottom-0 w-full bg-[#272a2f] flex justify-around items-center z-50 rounded-3xl text-xs p-2">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className={`text-center w-1/5 ${
            item.isActive ? `bg-[#1c1f24] ${item.activeColor}` : item.inactiveColor
          } m-1 p-2 rounded-2xl`}
        >
          <Link href={item.href}>
            <button className="flex flex-col items-center">
              {item.icon}
              <span className="mt-1 text-lg font-extrabold">{item.label}</span>
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Footer;
