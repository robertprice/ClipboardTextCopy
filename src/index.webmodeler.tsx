import React from 'react';

import { LinkButton } from './components/LinkButton';
import styleAsString from './style/style.scss';

interface PreviewProps {
  style: string;
  class: string;
  [key: string]: any;
}

export const preview = ({
  style,
  class: className,
  ...props
}: PreviewProps) => {
  const nextProps = {
    onClick: (event: React.MouseEvent<HTMLElement>) => {
      event.preventDefault();
      event.stopPropagation();
      event.nativeEvent.stopImmediatePropagation();
      return false;
    },
    className: className,
    labelCaption: props.labelCaption,
    tooltip: props.linkTitle,
    renderType: props.renderType,
    iconUrl: props.icon,
    buttonstyle: props.buttonstyle,
  };

  return <LinkButton {...nextProps} />;
};

export function getPreviewCss() {
  return styleAsString;
}
