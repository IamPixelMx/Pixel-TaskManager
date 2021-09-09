import React from 'react';
import { useRouter, history } from 'router';

type Props = {
  to: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<Element, MouseEvent>) => void;
};

const Link = ({ to, children, onClick, ...props }: Props) => {
  const { route } = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (route.path === to) {      
      // If it's not a valid path function will not trigger.
      return;
    }
    if (onClick) {
      onClick(e);
    }
    history.push(to);
  };

  return (
      <a className="pointer" {...props} onClick={handleClick}>
        {children}
      </a>
  );
}

export default Link;