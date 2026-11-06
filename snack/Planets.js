import React from 'react';
import Catalog from './Catalog';
import { planets } from './data';

export default function Planets() {
  return (
    <Catalog
      title="Planets"
      introduction="Explore six worlds from across the Star Wars galaxy."
      items={planets}
    />
  );
}
