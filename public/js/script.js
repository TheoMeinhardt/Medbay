"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
async function getData() {
    const config = {
        method: 'get',
        url: 'http://127.1.0.0:3000/query',
        responseType: 'json',
    };
    const restResponse = await axios_1.default(config);
    return restResponse;
}
(async () => {
    console.log(await getData());
})();
//# sourceMappingURL=script.js.map