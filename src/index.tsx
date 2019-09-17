import declare from 'dojoBaseDeclare';
import _widgetBase from 'MxWidgetBase';

import { widgetName } from '../package.json';
import { initWidget } from './container';

export default declare(`${widgetName}.widget.${widgetName}`, [_widgetBase], {
  constructor() {},
  postCreate() {
    console.debug(`${this.id} >> postCreate`);
  },
  update(contextObject: mendix.lib.MxObject, callback: () => void) {
    console.debug(`${this.id} >> update`);
    initWidget(this.id, this.params, this.domNode);
    callback();
  },
});
