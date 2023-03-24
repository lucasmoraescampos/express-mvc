"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUsersTable1678858946873 = void 0;
const typeorm_1 = require("typeorm");
class CreateUsersTable1678858946873 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "users",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                },
                {
                    name: "name",
                    type: "varchar",
                    length: "100"
                },
                {
                    name: "name",
                    type: "varchar",
                    length: "255"
                },
                {
                    name: "password",
                    type: "varchar",
                    length: "255"
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()",
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: "now()",
                },
            ],
        }), true);
    }
    async down(queryRunner) {
        await queryRunner.dropTable("users");
    }
}
exports.CreateUsersTable1678858946873 = CreateUsersTable1678858946873;
//# sourceMappingURL=1678858946873-CreateUsersTable.js.map