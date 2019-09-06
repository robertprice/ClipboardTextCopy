import _widgetBase from 'MxWidgetBase';
import declare from 'dojoBaseDeclare';
import { initWidget } from './container';
import { widgetName } from '../package.json';

export default declare(`${widgetName}.widget.${widgetName}`, [_widgetBase], {
  constructor() {
    this.subscriptionHandles = [];
    this.keyword = '';
  },
  postCreate() {
    console.debug(`${this.id} >> postCreate`);
  },
  update(contextObject: mendix.lib.MxObject, callback: () => void) {
    console.debug(`${this.id} >> update`);
    initWidget(this.id, this.params, this.domNode);
    callback();
  },
});
