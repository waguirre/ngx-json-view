"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var component_1 = require("./component");
var NgxJsonViewModule = /** @class */ (function () {
    function NgxJsonViewModule() {
    }
    NgxJsonViewModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            exports: [
                component_1.NgxJsonViewComponent
            ],
            declarations: [
                component_1.JsonViewComponent,
                component_1.NgxJsonViewComponent
            ]
        })
    ], NgxJsonViewModule);
    return NgxJsonViewModule;
}());
exports.NgxJsonViewModule = NgxJsonViewModule;
//# sourceMappingURL=ngx-json-view.module.js.map