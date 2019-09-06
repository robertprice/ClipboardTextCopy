import classNames from 'classnames';
import React from 'react';

export interface LinkProps {
  label: string;
  onClickAction: (event: React.MouseEvent<HTMLElement>) => void;
  iconUrl: string;
  className?: string;
  style?: React.CSSProperties;
  tooltip: string;
}

export const Link = (props: LinkProps) => {
  const classes = classNames('mx-link', props.className);
  return (
    <span className={classes} title={props.tooltip}>
      <img src={props.iconUrl}></img>{' '}
      <a href="" onClick={props.onClickAction}>
        {props.label}
      </a>{' '}
    </span>
  );
};
