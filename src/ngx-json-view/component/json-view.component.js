"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var utils_1 = require("../utils");
var JsonViewComponent = /** @class */ (function () {
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
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], JsonViewComponent.prototype, "data", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], JsonViewComponent.prototype, "key", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], JsonViewComponent.prototype, "level", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], JsonViewComponent.prototype, "levelOpen", void 0);
    JsonViewComponent = __decorate([
        core_1.Component({
            selector: 'json-view',
            templateUrl: './json-view.component.html',
            styleUrls: ['./json-view.component.scss']
        })
    ], JsonViewComponent);
    return JsonViewComponent;
}());
exports.JsonViewComponent = JsonViewComponent;
//# sourceMappingURL=json-view.component.js.map