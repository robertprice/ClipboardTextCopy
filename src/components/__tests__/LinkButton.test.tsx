import React from 'react';
import { create } from 'react-test-renderer';

import parseStyle from '../../utils/parseStyle';
import { LinkButton } from '../LinkButton';

const handleClick = (event: React.MouseEvent<HTMLElement>) => {
  event.preventDefault();
  event.stopPropagation();
  event.nativeEvent.stopImmediatePropagation();
  return false;
};

const sampleStyle = parseStyle(
  'border-style:solid;border-color:#39c;border-width:5px;'
);

describe('ClipboardTextCopy Component Test Unit', () => {
  it('should render button type correctly', () => {
    const props = {
      onClick: handleClick,
      className: 'awsomeClass',
      tabIndex: 2,
      style: sampleStyle,
      labelCaption: 'labelCaption',
      tooltip: 'buttonTitle',
      renderType: 'button',
      iconUrl: 'icon',
      buttonstyle: 'info',
      buttonClass: 'jumbotron',
    };
    const component = create(<LinkButton {...props} />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should render link type correctly', () => {
    const props = {
      onClick: handleClick,
      className: 'awsomeClass',
      tabIndex: 2,
      style: sampleStyle,
      labelCaption: 'labelCaption',
      tooltip: 'linkTitle',
      renderType: 'link',
      iconUrl: 'icon',
      buttonstyle: '',
    };
    const component = create(<LinkButton {...props} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
