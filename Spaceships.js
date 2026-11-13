import React, { useEffect, useState } from 'react';
import Catalog from './Catalog';

export default function Spaceships() {
  const [spaceships, setSpaceships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let active = true;

    async function fetchSpaceships() {
      setLoading(true);
      setError('');
      try {
        let url = 'https://www.swapi.tech/api/starships';
        let items = [];
        // Follow the API's next link to include every page of starships.
        while (url) {
          const response = await fetch(url);
          if (!response.ok) throw new Error('Unable to fetch spaceships.');
          const data = await response.json();
          items = items.concat(data.results);
          url = data.next;
        }
        if (active) setSpaceships(items);
      } catch (error) {
        if (active) setError('Could not load spaceships. Check your connection and try again.');
      } finally {
        if (active) setLoading(false);
      }
    }

    fetchSpaceships();
    return () => { active = false; };
  }, [attempt]);

  return (
    <Catalog
      title="Spaceships"
      introduction="Discover ships from Rebel starfighters to Imperial warships, provided by SWAPI."
      items={spaceships}
      loading={loading}
      error={error}
      onRetry={() => setAttempt(attempt + 1)}
    />
  );
}
