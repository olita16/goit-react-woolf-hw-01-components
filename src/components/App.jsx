import React from 'react';
import Profile from '../components/Profile/Profile';
import userData from '../components/data/user.json';

import Statistics from '../components/Statistics/Statistics';
import data from '../components/data/data.json'

import FriendList from '../components/FriendList/FriendList';
import friends from '../components/data/friends.json';

import TransactionHistory from '../components/TransactionHistory/TransactionHistory';
import transactions from '../components/data/transactions.json';


const App = () => {
  return (
    <>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};


export default App;