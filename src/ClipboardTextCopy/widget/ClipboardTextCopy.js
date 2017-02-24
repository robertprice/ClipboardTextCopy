/*global logger*/
// Required module list. Remove unnecessary modules, you can always get them back from the boilerplate.
define([
    "dojo/_base/declare",
    "mxui/widget/_WidgetBase",
    "dijit/_TemplatedMixin",

    "mxui/dom",
    "dojo/dom",
    "dojo/dom-prop",
    "dojo/dom-class",
    "dojo/dom-style",
    "dojo/dom-construct",
    "dojo/_base/array",
    "dojo/_base/lang",
    "dojo/text",
    "dojo/html",
    "dojo/_base/event",
    "dojo/query",
    
    "dojo/text!ClipboardTextCopy/widget/template/ClipboardTextCopy.html"
], function(declare, _WidgetBase, _TemplatedMixin, dom, dojoDom, dojoProp, dojoClass, dojoStyle, dojoConstruct, dojoArray, dojoLang, dojoText, dojoHtml, dojoEvent, dojoQuery, widgetTemplate) {
    "use strict";

    // Declare widget's prototype.
    return declare("ClipboardTextCopy.widget.ClipboardTextCopy", [ _WidgetBase, _TemplatedMixin ], {
        // _TemplatedMixin will create our dom node using this HTML template.
        templateString: widgetTemplate,

        // DOM elements
        copyClipboardButtonNode: null,

        // Parameters configured in the Modeler.
        labelCaption: "",
        targetClassName: "",


        // Internal variables. Non-primitives created in the prototype are shared between all widget instances.
        _handles: null,
        _contextObj: null,
        _alertDiv: null,
        
        _targetElement: null,

        // dojo.declare.constructor is called to construct the widget instance. Implement to initialize non-primitive properties.
        constructor: function() {
            // Uncomment the following line to enable debug messages
            //logger.level(logger.DEBUG);
            logger.debug(this.id + ".constructor");
            this._handles = [];
        },

        // dijit._WidgetBase.postCreate is called after constructing the widget. Implement to do extra setup work.
        postCreate: function() {
            logger.debug(this.id + ".postCreate");
                        
            this._setupEvents();
        },

        

        // mxui.widget._WidgetBase.update is called when context is changed or initialized. Implement to re-render and / or fetch data.
        update: function(obj, callback) {
            logger.debug(this.id + ".update");

            callback();
        },


        // Attach events to HTML dom elements
        _setupEvents: function() {
            logger.debug(this.id + "._setupEvents");

            this.connect(this.copyClipboardButtonNode, "click", dojoLang.hitch(this, function(e) {
                this._targetElement = dojoQuery("."+this.targetClassName+" input")[0];
                
                if(!this._targetElement) {
                    this._targetElement = dojoQuery("."+this.targetClassName+" textarea")[0];
                }
                
                if (!this._targetElement) {
                    this._targetElement = dojoQuery("."+this.targetClassName)[0];
                }

                if(this._targetElement) {
                 
                    this._targetElement.select();

                    try {
                        var successful = document.execCommand('copy');
                        var msg = successful ? 'successful' : 'unsuccessful';
                        console.log('Copying text command was ' + msg);
                    } catch (err) {
                        console.log('Oops, unable to copy');
                    }
                }
                else {
                    console.error('No element found with class: ' + this.targetClassName);
                }
            }));
        }

    });
});

require(["ClipboardTextCopy/widget/ClipboardTextCopy"], function() {
    "use strict";
});
