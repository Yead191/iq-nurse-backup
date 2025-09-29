import React, { useState } from 'react';
import { Dropdown, Menu, Button } from 'antd';
import { ChevronDown } from 'lucide-react';

const TrendingDropdown: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState('Trending');

  const menuItems = [
    { key: 'trending', label: 'Trending' },
    { key: 'recent', label: 'Recent' },
    { key: 'popular', label: 'Popular' },
    { key: 'top-rated', label: 'Top Rated' },
    { key: 'oldest', label: 'Oldest' },
  ];

  const handleMenuClick = (e: { key: string }) => {
    const selectedItem = menuItems.find(item => item.key === e.key);
    if (selectedItem) {
      setSelectedOption(selectedItem.label);
    }
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      {menuItems.map(item => (
        <Menu.Item key={item.key}>
          {item.label}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div className="md:pr-8 pr-0">
      <Dropdown overlay={menu} trigger={['click']}>
        <Button className="trending-dropdown-button">
          <span className="text-inherit">{selectedOption}</span>
          <ChevronDown className="w-5 h-5 ml-2" />
        </Button>
      </Dropdown>

    </div>
  );
};

export default TrendingDropdown;