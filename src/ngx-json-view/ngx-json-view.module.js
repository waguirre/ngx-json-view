"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var component_1 = require("./component");
var NgxJsonViewModule = (function () {
    function NgxJsonViewModule() {
    }
    return NgxJsonViewModule;
}());
NgxJsonViewModule.decorators = [
    { type: core_1.NgModule, args: [{
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
            },] },
];
/** @nocollapse */
NgxJsonViewModule.ctorParameters = function () { return []; };
exports.NgxJsonViewModule = NgxJsonViewModule;
//# sourceMappingURL=ngx-json-view.module.js.map