import React from 'react';
import EndGame from './EndGame';

const Page = ({ game }: any) => {
  return (
    <div>
      <EndGame status={game} />
    </div>
  );
};

export default Page;
