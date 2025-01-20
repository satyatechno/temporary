import React from 'react';
import EndGame from './EndGame';

const Page = ({ params: { game } }: any) => {
  return (
    <div>
      <EndGame status={game} />
    </div>
  );
};

export default Page;
