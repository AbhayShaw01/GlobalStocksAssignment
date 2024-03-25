
import React from 'react';
import MarketCard from './MarketCard';
import { marketSection } from '@/constants/data';


export default function MarketStories() {
  return (
    <div className='py-4 px-8  '>
      {marketSection.map((item, id) => (
        <MarketCard 
          key={id}
          {...item}
        />
      ))}
    </div>
  );
}
