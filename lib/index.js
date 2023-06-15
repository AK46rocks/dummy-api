"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DummyAPI = void 0;
class DummyAPI {
    static CeloChartAPI() {
        return __awaiter(this, void 0, void 0, function* () {
            let responseObj = yield fetch(this.CELO_API_ENDPOINT);
            let data = yield responseObj.json();
            return data;
        });
    }
    static MoonbeamChartAPI() {
        return __awaiter(this, void 0, void 0, function* () {
            let responseObj = yield fetch(this.MOONBEAM_API_ENDPOINT);
            let data = yield responseObj.json();
            return data;
        });
    }
    static MoonriverChartAPI() {
        return __awaiter(this, void 0, void 0, function* () {
            let responseObj = yield fetch(this.MOONRIVER_API_ENDPOINT);
            let data = yield responseObj.json();
            return data;
        });
    }
}
exports.DummyAPI = DummyAPI;
DummyAPI.CELO_API_ENDPOINT = "https://api.dapplooker.com/chart/dc9b69d8-7ca1-45d4-8ad0-a17f915f3f03";
DummyAPI.MOONBEAM_API_ENDPOINT = "https://api.dapplooker.com/chart/8c6d43e4-1677-4934-bac7-a87e13c2f98b";
DummyAPI.MOONRIVER_API_ENDPOINT = "https://api.dapplooker.com/chart/1630a0d6-f025-40cb-912b-bd9fd1f09ff2";
