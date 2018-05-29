define([
    "dojo/_base/declare",
    "mxui/widget/_WidgetBase",
    "dojo/_base/lang",
    "dojo/dom-construct",
    "dojo/query",
], function (declare, _WidgetBase, dojoLang, dojoConstruct, dojoQuery) {
    "use strict";

    return declare("ClipboardTextCopy.widget.ClipboardTextCopy", [ _WidgetBase ], {
        // Parameters configured in the Modeler.
        targetClassName: "",
        labelCaption: "",
        linkTitle: "",
        renderType: "button", // or link
        icon: "",
        targetClassName: "",
        buttonstyle: "",

        postCreate: function() {
            if (this.findElement()) {
                this.updateRendering();
            } else {
                var message = "modeler configuration error no element found with class: " + this.targetClassName;
                this.showError("Clipboard Text Copy widget: " + message);
                logger.error(this.friendlyId || this.id, message);
            }
        },

        updateRendering: function() {
            var btnStyleClass = this.renderType === "link" ? "" : " btn-" + this.buttonstyle;
            this.button = new mxui.widget._Button({
                caption: this.labelCaption,
                title: this.linkTitle,
                iconUrl: this.icon,
                onClick: dojoLang.hitch(this, this.onclickEvent),
                renderType: this.renderType,
                cssStyle: this.style,
                cssClasses: this.classes + btnStyleClass
            });
            dojoConstruct.place(this.button.domNode, this.domNode);
        },

        findElement: function() {
            var target = dojoQuery("." + this.targetClassName + " input")[0];

            if (!target) {
                target = dojoQuery("." + this.targetClassName + " textarea")[0];
            }

            if (!target) {
                target = dojoQuery("." + this.targetClassName + " .form-control-static")[0];
            }

            if (!target) {
                target = dojoQuery("." + this.targetClassName)[0];
            }
            return target;
        },

        onclickEvent: function () {
            var element = this.findElement();

            if (element) {
                var value = element.value !== undefined 
                    ? element.value
                    : element.innerText;
                this.copyToClipboard(value);
            }
        },

        copyToClipboard: function(text){
            var dummy = document.createElement("textarea");
            document.body.appendChild(dummy);
            dummy.innerHTML = text;
            dummy.select();
            document.execCommand("copy");
            document.body.removeChild(dummy);
        },

        uninitialize() {
           if (this.button) {
               this.button.uninitialize();
           }
        },

        showError: function (message) {
            var alert = dojoConstruct.create("div", {
                "class": "alert alert-danger",
                "innerHTML": message
            });
            dojoConstruct.place(alert, this.domNode);
        }
    });
});

require(["ClipboardTextCopy/widget/ClipboardTextCopy"]);
