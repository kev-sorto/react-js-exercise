/* 
   Author: Kevin Sorto
   Date of Development: 2024-06-07
   Purpose of Script: Manage and display user data with added date and sorting functionality.
*/

import React from 'react';
import PersonList from './components/PersonList/PersonList';

// Functional component to display the data
const App: React.FC = () => {

  return (
    <div>
      <PersonList />
    </div>
  );
}

export default App;
