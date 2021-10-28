"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentInterpreter = void 0;
var payment_systems = __importStar(require("./payment_systems"));
//Replaces function in UI and now calls the builders from payment_systems
function paymentInterpreter(type) {
    var payment;
    if (type = "credit card") {
        var payment_1 = new payment_systems.CreditCardPayment();
        payment_1.build();
        return payment_1.getExector();
    }
    else if (type = "bank draft") {
        var payment_2 = new payment_systems.BankDraftPayment();
        payment_2.build();
        return payment_2.getExector();
    }
    else if (type = "online payment") {
        var payment_3 = new payment_systems.OnlinePayment();
        payment_3.build();
        return payment_3.getExector();
    }
    else if (type = "offline payment") {
        var payment_4 = new payment_systems.OfflinePayment();
        payment_4.build();
        return payment_4.getExector();
    }
    else {
        console.log('Could not complete your request, please try again.');
        return undefined;
    }
}
exports.paymentInterpreter = paymentInterpreter;
