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
exports.UserRepository = void 0;
const Database_1 = require("@infrastructure/config/Database");
const class_transformer_1 = require("class-transformer");
const UserDTO_1 = require("@presentation/dtos/UserDTO");
class UserRepository {
    constructor() {
        this.pool = Database_1.Database.getConnection();
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const [result] = yield this.pool.execute("SELECT * FROM users");
                return (0, class_transformer_1.plainToInstance)(UserDTO_1.UserDTO, result);
            }
            catch (error) {
                console.log(`Erro ao rucuperar registros no banco: ${error}`);
                throw new Error(`Erro ao rucuperar registros no banco: ${error}`);
            }
        });
    }
    save(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const [result] = yield this.pool.execute('INSERT INTO users (name, email) VALUES (?, ?)', [user.name, user.email]);
                user.id = result.insertId;
                return user;
            }
            catch (error) {
                console.log(`Erro ao persistir o registro (${user.email}) no banco: ${error}`);
                throw new Error(`Erro ao persistir o registro (${user.email}) no banco: ${error}`);
            }
        });
    }
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const [result] = yield this.pool.execute("SELECT * FROM users where email = ?", [email]);
                const users = result;
                return users.length ? users[0] : null;
            }
            catch (error) {
                console.log(`Erro ao recuperar o registro (${email}) no banco: ${error}`);
                throw new Error(`Erro ao recuperar o registro (${email}) no banco: ${error}`);
            }
        });
    }
    findById(id) {
        throw new Error("Method not implemented.");
    }
}
exports.UserRepository = UserRepository;
