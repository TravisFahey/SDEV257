import React, { useEffect, useState } from 'react';
import Catalog from './Catalog';

const imageSource = {
  uri: 'https://lumiere-a.akamaihd.net/v1/images/millennium-falcon-main-tlj-a_7cf89d3a.jpeg?region=0%2C0%2C1280%2C720',
};

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
      imageSource={imageSource}
      imageLabel="Millennium Falcon traveling through hyperspace"
      introduction="Discover ships from Rebel starfighters to Imperial warships, provided by SWAPI."
      items={spaceships}
      loading={loading}
      error={error}
      onRetry={() => setAttempt(attempt + 1)}
    />
  );
}
