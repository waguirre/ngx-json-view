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
var NgxJsonViewComponent = /** @class */ (function () {
    function NgxJsonViewComponent() {
        this.level = 0;
        // private _data: object;
        // @Input()
        // set data(data: object) {
        //   this._data = data;
        //   this.isInit && this.init();
        // }
        // get data(): object { return this._data; }
        // @Input() key: string;
        // @Input() level: number = 0;
        // @Input() levelOpen: number;
        // isOpen: boolean = false;
        // childrenKeys: string[];
        // hasChildren: boolean = false;
        // dataType: string;
        // value: any;
        // valueType: string;
        // isObject: boolean = false;
        // isArray: boolean = false;
        // isInit: boolean = false;
        // ngOnInit() {
        //   this.init();
        //   this.isInit = true;
        // }
        // init() {
        //   this.levelOpenHandle();
        //   this.childrenKeysHandle();
        //   this.dataHandle();
        // }
        // levelOpenHandle() {
        //   if (!Utils.isUndefined(this.levelOpen)) {
        //     (this.level <= this.levelOpen) && (this.isOpen = true);
        //   }
        // }
        // childrenKeysHandle() {
        //   if (Utils.isObject(this.data)) {
        //     this.childrenKeys = Object.keys(this.data);
        //     this.childrenKeys && this.childrenKeys.length && (this.hasChildren = true);
        //   }
        // }
        // dataHandle() {
        //   if (Utils.isObject(this.data)) {
        //     this.isObject = true;
        //     this.dataType = "Object";
        //     if (Utils.isArray(this.data)) {
        //       this.isArray = true;
        //       this.dataType = "Array";
        //     }
        //   } else {
        //     this.value = this.data;
        //     if (Utils.isString(this.data)) {
        //       this.valueType = "string";
        //     } else if (Utils.isNumber(this.data)) {
        //       this.valueType = "number";
        //     } else if (Utils.isBoolean(this.data)) {
        //       this.valueType = "boolean";
        //     } else if (null === this.data) {
        //       this.valueType = "null";
        //       this.value = "null";
        //     }
        //   }
        // }
        // toggle() {
        //   if (!(this.childrenKeys && this.childrenKeys.length)) {
        //     return;
        //   }
        //   this.isOpen = !this.isOpen;
        // }
    }
    NgxJsonViewComponent.prototype.ngOnInit = function () {
        console.error("ngOnInit");
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], NgxJsonViewComponent.prototype, "data", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], NgxJsonViewComponent.prototype, "levelOpen", void 0);
    NgxJsonViewComponent = __decorate([
        core_1.Component({
            selector: 'ngx-json-view',
            template: "\n    <div class=\"ngx-json-view\">\n      <json-view [data]=\"data\" [level]=\"level\" [levelOpen]=\"levelOpen\" class=\"json-view\"></json-view>\n    </div>\n  "
        })
    ], NgxJsonViewComponent);
    return NgxJsonViewComponent;
}());
exports.NgxJsonViewComponent = NgxJsonViewComponent;
//# sourceMappingURL=ngx-json-view.component.js.map