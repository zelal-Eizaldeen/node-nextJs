import React from 'react';
// import { useParams } from 'react-router-dom';

import ProgramList from '../../components/programs/ProgramList';

const DUMMY_PROGRAMS = [
  {
    id: 'p1',
    title: 'Treadmill',
    description: 'Play 30minutes with speed 5',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',

    creator: 'u1',
  },
  {
    id: 'p2',
    title: 'Emp. State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',

    creator: 'u2',
  },
];

const UserPrograms = (props) => {
  const userId = props.id;

  const loadedPrograms = DUMMY_PROGRAMS.filter(
    (program) => program.creator === userId
  );
  return <ProgramList items={loadedPrograms} />;
};

UserPrograms.getInitialProps = async ({ query }) => {
  return query;
};
export default UserPrograms;
