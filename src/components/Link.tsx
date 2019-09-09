import classNames from 'classnames';
import React from 'react';

export interface LinkProps {
  label: string;
  onClickAction: (event: React.MouseEvent<HTMLElement>) => void;
  iconUrl: string;
  className?: string;
  tooltip: string;
}

export const Link = (props: LinkProps) => {
  const classes = classNames('clipboardTextCopy mx-link', props.className);
  return (
    <span className={classes} title={props.tooltip}>
      {props.iconUrl ? (
        <img className="clipboardTextCopy-img" src={props.iconUrl}></img>
      ) : null}
      <a href="" onClick={props.onClickAction}>
        {props.label}
      </a>
    </span>
  );
};
