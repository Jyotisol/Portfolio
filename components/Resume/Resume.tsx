import React from 'react';
import { navItems } from '@/data'; // Update the path accordingly

const Navigation: React.FC = () => {
  const handleClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <nav>
      <ul>
        {navItems.map((item, index) => (
          <li key={index}>
            <button onClick={() => handleClick(item.link)}>{item.name}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;