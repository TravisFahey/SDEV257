import React from 'react';
import Catalog from './Catalog';
import { films } from './data';

export default function Films() {
  return (
    <Catalog
      title="Films"
      introduction="Follow the nine films of the Skywalker saga in episode order. Story summaries contain spoilers."
      items={films}
    />
  );
}
