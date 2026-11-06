import React from 'react';
import Catalog from './Catalog';
import { spaceships } from './data';

export default function Spaceships() {
  return (
    <Catalog
      title="Spaceships"
      introduction="Discover six ships, from Rebel starfighters to Imperial warships."
      items={spaceships}
    />
  );
}
