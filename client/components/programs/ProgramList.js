import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import ProgramItem from './ProgramItem';
import Button from '../../shared/components/FormElements/Button';

const ProgramList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No programs found. Maybe create one?</h2>
          <Button to="/programs/new">Share Program</Button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="place-list">
      {props.items.map((place) => (
        <ProgramItem
          key={place.id}
          id={place.id}
          image={place.imageUrl}
          title={place.title}
          description={place.description}
          // address={place.address}
          creatorId={place.creator}
          // coordinates={place.location}
        />
      ))}
    </ul>
  );
};

export default ProgramList;
