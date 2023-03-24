"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
class ProductController {
    index(req, res) {
        return res.send('Hello World!');
    }
    store(req, res) {
        const binary = atob(req.body.file);
        const len = binary.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
            bytes[i] = binary.charCodeAt(i);
        }
        const hash = (0, crypto_1.createHash)('sha256')
            .update(Buffer.from(bytes.buffer))
            .digest('hex');
        console.log(req.body);
        return res.json({ hash });
    }
}
exports.default = new ProductController();
//# sourceMappingURL=ProductController.js.map