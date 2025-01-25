import React, { FC } from 'react';
import PetDetail from './PetDetail.tsx';
import MorePetsList from './MorePetsList.tsx';
import CustomerList from './CustomerList.tsx';
const PetDetails: FC = () => {
  return (
    <>
      <PetDetail />
      <CustomerList />
      <MorePetsList />
    </>
  );
};

export default PetDetails;
