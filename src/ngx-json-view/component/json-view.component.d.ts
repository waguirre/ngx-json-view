import { OnInit } from '@angular/core';
export declare class JsonViewComponent implements OnInit {
    private _data;
    data: object;
    key: string;
    level: number;
    levelOpen: number;
    isOpen: boolean;
    childrenKeys: string[];
    hasChildren: boolean;
    dataType: string;
    value: any;
    valueType: string;
    isObject: boolean;
    isArray: boolean;
    isInit: boolean;
    ngOnInit(): void;
    init(): void;
    levelOpenHandle(): void;
    childrenKeysHandle(): void;
    dataHandle(): void;
    toggle(): void;
}
