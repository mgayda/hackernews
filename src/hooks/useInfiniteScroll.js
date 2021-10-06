
import { useState, useEffect } from 'react';
import { STORY_INCREMENT, MAX_STORIES } from '../constants';
import { debounce } from 'debounce';

export const useInfiniteScroll = () => {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(STORY_INCREMENT);

  const handleScroll = debounce(() => { //dont need debounce but timeouts scroll for better feel
    console.log({count});
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      loading
    ) {
      return false;
    }

    setLoading(true);
  }, 500);

  handleScroll();

  useEffect(() => {
    if (!loading) return;

    if (count + STORY_INCREMENT >= MAX_STORIES) {
      setCount(MAX_STORIES); // if number is 500 or more set count to 500
    } else {
      setCount(count + STORY_INCREMENT); // if number is less than 500 set to + 30
    }

    setLoading(false);
  }, [loading]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { count };
};  