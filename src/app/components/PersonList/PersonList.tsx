import React from 'react';
import { Person } from '@/app/types/person';
import { sortByProperty } from '@/app/helpers/sortHelpers';

// create person objects
const rockyObj: Person = {
  Name: 'Rocky',
  'Favorite Food': 'Sushi',
  'Favorite Movie': 'Back to The Future',
  Status: 'Inactive'
};

const miroslavObj: Person = {
  Name: 'Miroslav',
  'Favorite Food': 'Sushi',
  'Favorite Movie': 'American Psycho',
  Status: 'Active'
};

const donnyObj: Person = {
  Name: 'Donny',
  'Favorite Food': 'Singapore chow mei fun',
  'Favorite Movie': 'The Princess Bride',
  Status: 'Inactive'
};

const mattObj: Person = {
  Name: 'Matt',
  'Favorite Food': 'Brisket Tacos',
  'Favorite Movie': 'The Princess Bride',
  Status: 'Active'
};

const kevObj: Person = {
  Name: 'Kevin',
  'Favorite Food': 'Sushi',
  'Favorite Movie': 'Back to The Future',
  Status: 'Active'
}

// Create an array of objects
const people: Person[] = [rockyObj, miroslavObj, donnyObj, mattObj, kevObj];

// Add the current date to each object
const currentDate = new Date().toISOString().split('T')[0];
people.forEach(person => {
  if (person) {
    person.Date = currentDate;
  }
});

const PersonList: React.FC = () => {
  // Filter active records
  const activePeople = people.filter(person => person.Status === 'Active');

  return (
    <div className='p-3'>
      {activePeople.length > 0 ? (
        sortByProperty(activePeople, 'Name').map((person, index) => (
          <div key={index} className='my-3'>
            <p>Name: {person.Name}</p>
            <p>Date: {person.Date}</p>
            <p>Favorite Movie: {person['Favorite Movie']}</p>
          </div>
        ))
      ) : (
        <p>No Active records found</p>
      )}
    </div>
  );
}

export default PersonList;