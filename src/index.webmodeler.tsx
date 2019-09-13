import React from 'react';

import { ClipboardTextCopyProps } from './@typings';
import { LinkButton } from './components/LinkButton';
import styleAsString from './style/style.scss';

export const preview = (props: ClipboardTextCopyProps) => {
  const nextProps = {
    onClick: (event: React.MouseEvent<HTMLElement>) => {
      event.preventDefault();
      event.stopPropagation();
      event.nativeEvent.stopImmediatePropagation();
      return false;
    },
    labelCaption: props.labelCaption,
    tooltip: props.linkTitle,
    renderType: props.renderType,
    iconUrl: props.icon,
    buttonType: props.buttonstyle,
    tabIndex: props.tabIndex ? props.tabIndex : 0,
  };

  return <LinkButton {...nextProps} />;
};

export function getPreviewCss() {
  return styleAsString;
}
