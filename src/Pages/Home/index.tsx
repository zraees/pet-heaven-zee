import React, { FC } from 'react';
import TopBanner from './TopBanner.tsx';
import PetList from './PetList.tsx';
import BottomBanner from './BottomBanner.tsx';

const Home: FC = () => {
    return (
        <div>
            <TopBanner />
            <PetList />
            <BottomBanner />
        </div>
    )
}

export default Home;