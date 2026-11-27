import React, { useEffect, useState } from 'react';
import Catalog from './Catalog';

const imageSource = {
  uri: 'https://lumiere-a.akamaihd.net/v1/images/Star-Wars-New-Hope-IV-Poster_c217085b.jpeg?region=43%2C231%2C583%2C328',
};

export default function Films() {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let active = true;

    async function fetchFilms() {
      setLoading(true);
      setError('');
      try {
        const response = await fetch('https://www.swapi.tech/api/films');
        if (!response.ok) throw new Error('Unable to fetch films.');
        const data = await response.json();
        const items = data.result.map((film) => ({
          uid: film.uid,
          name: film.properties.title,
          facts: [
            `Episode: ${film.properties.episode_id}`,
            `Director: ${film.properties.director}`,
            `Released: ${film.properties.release_date}`,
          ],
          description: film.properties.opening_crawl,
          episode: film.properties.episode_id,
        }));
        items.sort((a, b) => a.episode - b.episode);
        if (active) setFilms(items);
      } catch (error) {
        if (active) setError('Could not load films. Check your connection and try again.');
      } finally {
        if (active) setLoading(false);
      }
    }

    fetchFilms();
    return () => { active = false; };
  }, [attempt]);

  return (
    <Catalog
      title="Films"
      imageSource={imageSource}
      imageLabel="Star Wars: A New Hope poster artwork"
      introduction="Browse the films available from SWAPI in episode order. Opening crawls contain spoilers."
      items={films}
      loading={loading}
      error={error}
      onRetry={() => setAttempt(attempt + 1)}
    />
  );
}
