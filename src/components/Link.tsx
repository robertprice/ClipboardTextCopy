import React from 'react';

export interface LinkProps {
  label: string;
  onClickAction: (event: React.MouseEvent<HTMLElement>) => void;
  iconUrl: string;
  tooltip: string;
  tabIndex: number;
}

export const Link = (props: LinkProps) => {
  return (
    <span className={'clipboardTextCopy mx-link'} title={props.tooltip}>
      {props.iconUrl ? (
        <img className="clipboardTextCopy-img" src={props.iconUrl}></img>
      ) : null}
      <a href="" onClick={props.onClickAction} tabIndex={props.tabIndex}>
        {props.label}
      </a>
    </span>
  );
};
