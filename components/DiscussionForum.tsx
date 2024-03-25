
import React from 'react';
import Card from './Card';
import { discussionData } from '@/constants/data';


export default function DiscussionForum() {
  return (
    <div className='sm:py-2 pb-5 px-4 sm:mt-10  '>
      {discussionData.map((item, index: number) => (
        <Card key={index} {...item} />
      ))}
    </div>
  );
}