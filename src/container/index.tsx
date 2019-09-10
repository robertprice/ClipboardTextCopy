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
  const target = findElement(document.body, params.targetClassName);
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
    buttonClass: params.buttonClass,
    tabIndex: parent.tabIndex,
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
  let target;
  let targetParent = parent;
  while (!target && !!targetParent && targetParent != document.body) {
    if (!targetParent.parentElement) break;

    targetParent = targetParent.parentElement;
    target = findElement(targetParent, targetClassName);
  }

  if (!target) {
    showError(targetClassName, id, parent);
    return;
  }
  const text = !!(target as HTMLInputElement).value
    ? (target as HTMLInputElement).value
    : target.innerText;
  if (!!text) copyToClipboard(text);
};

const findElement = (parent: HTMLElement, targetClassName: string) => {
  let target =
    parent.querySelector('.' + targetClassName + ' input') ||
    parent.querySelector('.' + targetClassName + ' textarea') ||
    parent.querySelector('.' + targetClassName + ' .form-control-static') ||
    parent.querySelector('.' + targetClassName);

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
