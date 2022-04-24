import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export const usePostId = (postId) => {
  const { savedPosts } = useSelector((state) => state.post);
  return savedPosts?.find((item) => item._id === postId);
};

export const useUserId = (userId) => {
  const { allUsers } = useSelector((state) => state.user);
  return allUsers?.find((item) => item._id === userId);
};

export const useOutsideClick = (ref) => {
  const [outsieClick, setOutsideClick] = useState(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!ref.current.contains(e.target)) {
        setOutsideClick(true);
      } else {
        setOutsideClick(false);
      }

      setOutsideClick(null);
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  return outsieClick;
};

const getSearchParams = () => {
  if (typeof window === 'undefined') {
    return {};
  }
  const params = new URLSearchParams(window.location.search);
  return new Proxy(params, {
    get(target, prop, receiver) {
      return target.get(prop) || undefined;
    }
  });
};

export const useQueryParams = () => {
  const [searchParams, setSearchParams] = useState(getSearchParams());
  const win = typeof window === 'undefined' ? 'once' : window.location.search;
  useEffect(() => {
    setSearchParams(getSearchParams());
  }, [win]);

  return searchParams;
};
