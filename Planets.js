import React, { useEffect, useState } from 'react';
import Catalog from './Catalog';

export default function Planets() {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let active = true;

    async function fetchPlanets() {
      setLoading(true);
      setError('');
      try {
        let url = 'https://www.swapi.tech/api/planets';
        let items = [];
        // Follow the API's next link to include every page of planets.
        while (url) {
          const response = await fetch(url);
          if (!response.ok) throw new Error('Unable to fetch planets.');
          const data = await response.json();
          items = items.concat(data.results);
          url = data.next;
        }
        if (active) setPlanets(items);
      } catch (error) {
        if (active) setError('Could not load planets. Check your connection and try again.');
      } finally {
        if (active) setLoading(false);
      }
    }

    fetchPlanets();
    return () => { active = false; };
  }, [attempt]);

  return (
    <Catalog
      title="Planets"
      introduction="Explore worlds from across the Star Wars galaxy, provided by SWAPI."
      items={planets}
      loading={loading}
      error={error}
      onRetry={() => setAttempt(attempt + 1)}
    />
  );
}
