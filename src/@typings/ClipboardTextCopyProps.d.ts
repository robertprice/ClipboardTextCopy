import { Widget } from './Widget';

export interface ClipboardTextCopyProps extends Widget {
  targetClassName: string;
  labelCaption: string;
  linkTitle: string; //Tooltip
  renderType: 'button' | 'link';
  icon: any;
  buttonstyle: ButtonType;
  buttonClass: string;
}
