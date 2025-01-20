import React, { FC } from 'react';
import TopBanner from './TopBanner.tsx';
import PetList from './PetList.tsx';

const Home: FC = () => {
    return (
        <div>
            <TopBanner />
            <PetList />
        </div>
    )
}

export default Home;