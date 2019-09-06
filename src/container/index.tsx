import '../style/style.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import { ClipboardTextCopyProps } from '../@typings';
import { Error } from '../components/Error';
import { LinkButton, LinkButtonProps } from '../components/LinkButton';
import parseStyle from '../utils/parseStyle';

export const initWidget = (
  id: string,
  params: ClipboardTextCopyProps,
  parent: HTMLElement
) => {
  const target = findElement(params.targetClassName);
  if (!target) {
    showError(params.targetClassName, id, parent);
    return;
  }
  render(id, params, parent);
};

const render = (
  id: string,
  params: ClipboardTextCopyProps,
  parent: HTMLElement
) => {
  const props: LinkButtonProps = {
    style: parseStyle(params.style as string),
    className: params.className,
    labelCaption: params.labelCaption,
    tooltip: params.linkTitle,
    renderType: params.renderType,
    iconUrl: params.icon,
    buttonstyle: params.buttonstyle,
    onClick: (event: React.MouseEvent<HTMLElement>) => {
      handleClick(params.targetClassName, id, parent);
      event.preventDefault();
      event.stopPropagation();
      event.nativeEvent.stopImmediatePropagation();
      return false;
    },
  };
  ReactDOM.render(<LinkButton {...props} />, parent);
};

const handleClick = (
  targetClassName: string,
  id: string,
  parent: HTMLElement
) => {
  const target = findElement(targetClassName);
  if (!target) {
    showError(targetClassName, id, parent);
    return;
  }
  const text = !!(target as HTMLInputElement).value
    ? (target as HTMLInputElement).value
    : target.innerText;
  if (!!text) copyToClipboard(text);
};

const findElement = (targetClassName: string) => {
  let target = document.querySelector('.' + targetClassName + ' input');

  if (!target) {
    target = document.querySelector('.' + targetClassName + ' textarea');
  }

  if (!target) {
    target = document.querySelector(
      '.' + targetClassName + ' .form-control-static'
    );
  }

  if (!target) {
    target = document.querySelector('.' + targetClassName);
  }
  return target as HTMLElement;
};

const copyToClipboard = (text: string) => {
  var dummy = document.createElement('textarea');
  document.body.appendChild(dummy);
  dummy.innerHTML = text;
  dummy.select();
  document.execCommand('copy');
  document.body.removeChild(dummy);
};

const showError = (
  targetClassName: string,
  id: string,
  parent: HTMLElement
) => {
  ReactDOM.render(<Error targetClassName={targetClassName} id={id} />, parent);
};
