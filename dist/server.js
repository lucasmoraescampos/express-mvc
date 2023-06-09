"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const api_1 = __importDefault(require("./routes/api"));
require("reflect-metadata");
Reflect.metadata('design:paramtypes', []);
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use('/api', api_1.default);
app.all('*', (req, res) => {
    res.status(404).json({ error: 'not found' });
});
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000!');
});
//# sourceMappingURL=server.js.map