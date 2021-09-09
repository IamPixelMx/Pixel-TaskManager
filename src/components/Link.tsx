import React from 'react';
import { useRouter, history } from 'router';

type Props = {
  to: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<Element, MouseEvent>) => void;
  className?: string;
};

const Link = ({ to, children, onClick, className, ...props }: Props) => {
  const { route } = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    // If it's not a valid new path the function will not trigger.
    if (route.path === to) return;

    if (onClick) onClick(e);

    // add route to history
    history.push(to);
  };

  return (
    <a className={`pointer ${className}`}{...props} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;