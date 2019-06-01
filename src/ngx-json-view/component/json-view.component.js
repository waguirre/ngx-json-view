"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var utils_1 = require("../utils");
var JsonViewComponent = (function () {
    function JsonViewComponent() {
        this.level = 0;
        this.isOpen = false;
        this.hasChildren = false;
        this.isObject = false;
        this.isArray = false;
        this.isInit = false;
    }
    Object.defineProperty(JsonViewComponent.prototype, "data", {
        get: function () { return this._data; },
        set: function (data) {
            this._data = data;
            this.isInit && this.init();
        },
        enumerable: true,
        configurable: true
    });
    JsonViewComponent.prototype.ngOnInit = function () {
        this.init();
        this.isInit = true;
    };
    JsonViewComponent.prototype.init = function () {
        this.levelOpenHandle();
        this.childrenKeysHandle();
        this.dataHandle();
    };
    JsonViewComponent.prototype.levelOpenHandle = function () {
        if (!utils_1.isUndefined(this.levelOpen)) {
            (this.level <= this.levelOpen) && (this.isOpen = true);
        }
    };
    JsonViewComponent.prototype.childrenKeysHandle = function () {
        if (utils_1.isObject(this.data)) {
            this.childrenKeys = Object.keys(this.data);
            this.childrenKeys && this.childrenKeys.length && (this.hasChildren = true);
        }
    };
    JsonViewComponent.prototype.dataHandle = function () {
        if (utils_1.isObject(this.data)) {
            this.isObject = true;
            this.dataType = "Object";
            if (utils_1.isArray(this.data)) {
                this.isArray = true;
                this.dataType = "Array";
            }
        }
        else {
            this.value = this.data;
            if (utils_1.isString(this.data)) {
                this.valueType = "string";
            }
            else if (utils_1.isNumber(this.data)) {
                this.valueType = "number";
            }
            else if (utils_1.isBoolean(this.data)) {
                this.valueType = "boolean";
            }
            else if (null === this.data) {
                this.valueType = "null";
                this.value = "null";
            }
        }
    };
    JsonViewComponent.prototype.toggle = function () {
        if (!(this.childrenKeys && this.childrenKeys.length)) {
            return;
        }
        this.isOpen = !this.isOpen;
    };
    return JsonViewComponent;
}());
JsonViewComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'json-view',
                templateUrl: './json-view.component.html',
                styleUrls: ['./json-view.component.scss']
            },] },
];
/** @nocollapse */
JsonViewComponent.ctorParameters = function () { return []; };
JsonViewComponent.propDecorators = {
    'data': [{ type: core_1.Input },],
    'key': [{ type: core_1.Input },],
    'level': [{ type: core_1.Input },],
    'levelOpen': [{ type: core_1.Input },],
};
exports.JsonViewComponent = JsonViewComponent;
//# sourceMappingURL=json-view.component.js.map