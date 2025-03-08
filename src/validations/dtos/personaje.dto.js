"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePersonajeDto = exports.CreatePersonajeDto = void 0;
const class_validator_1 = require("class-validator");
let CreatePersonajeDto = (() => {
    var _a;
    let _nombre_decorators;
    let _nombre_initializers = [];
    let _nombre_extraInitializers = [];
    let _foto_decorators;
    let _foto_initializers = [];
    let _foto_extraInitializers = [];
    return _a = class CreatePersonajeDto {
            constructor() {
                this.nombre = __runInitializers(this, _nombre_initializers, void 0);
                this.foto = (__runInitializers(this, _nombre_extraInitializers), __runInitializers(this, _foto_initializers, void 0));
                __runInitializers(this, _foto_extraInitializers);
            }
        },
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _nombre_decorators = [(0, class_validator_1.IsString)()];
            _foto_decorators = [(0, class_validator_1.IsString)()];
            __esDecorate(null, null, _nombre_decorators, { kind: "field", name: "nombre", static: false, private: false, access: { has: obj => "nombre" in obj, get: obj => obj.nombre, set: (obj, value) => { obj.nombre = value; } }, metadata: _metadata }, _nombre_initializers, _nombre_extraInitializers);
            __esDecorate(null, null, _foto_decorators, { kind: "field", name: "foto", static: false, private: false, access: { has: obj => "foto" in obj, get: obj => obj.foto, set: (obj, value) => { obj.foto = value; } }, metadata: _metadata }, _foto_initializers, _foto_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();
exports.CreatePersonajeDto = CreatePersonajeDto;
let UpdatePersonajeDto = (() => {
    var _a;
    let _id_decorators;
    let _id_initializers = [];
    let _id_extraInitializers = [];
    let _nombre_decorators;
    let _nombre_initializers = [];
    let _nombre_extraInitializers = [];
    let _foto_decorators;
    let _foto_initializers = [];
    let _foto_extraInitializers = [];
    return _a = class UpdatePersonajeDto {
            constructor() {
                this.id = __runInitializers(this, _id_initializers, void 0);
                this.nombre = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _nombre_initializers, void 0));
                this.foto = (__runInitializers(this, _nombre_extraInitializers), __runInitializers(this, _foto_initializers, void 0));
                __runInitializers(this, _foto_extraInitializers);
            }
        },
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _id_decorators = [(0, class_validator_1.IsNumber)()];
            _nombre_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _foto_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: obj => "id" in obj, get: obj => obj.id, set: (obj, value) => { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
            __esDecorate(null, null, _nombre_decorators, { kind: "field", name: "nombre", static: false, private: false, access: { has: obj => "nombre" in obj, get: obj => obj.nombre, set: (obj, value) => { obj.nombre = value; } }, metadata: _metadata }, _nombre_initializers, _nombre_extraInitializers);
            __esDecorate(null, null, _foto_decorators, { kind: "field", name: "foto", static: false, private: false, access: { has: obj => "foto" in obj, get: obj => obj.foto, set: (obj, value) => { obj.foto = value; } }, metadata: _metadata }, _foto_initializers, _foto_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();
exports.UpdatePersonajeDto = UpdatePersonajeDto;
