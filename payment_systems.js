"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfflinePayment = exports.OnlinePayment = exports.BankDraftPayment = exports.CreditCardPayment = exports.PaymentType = exports.PaymentSystemExecutor = void 0;
var readlineSync = require("readline-sync");
var PaymentSystemExecutor = /** @class */ (function () {
    //constructor with two functions as arguements that preform their tasks
    function PaymentSystemExecutor(inputs, validate) {
        this.getInputs = inputs;
        this.validate = validate;
    }
    //Execute method that steps through workflow and prints relevant info to the screen
    PaymentSystemExecutor.prototype.execute = function () {
        var valid = (this.validate(this.getInputs()));
        if (valid) {
            console.log("Payment information is being encrypted.");
            console.log("Payment is being processed.");
        }
        else {
            console.log("The entered payment is invalid, please try again.");
        }
    };
    return PaymentSystemExecutor;
}());
exports.PaymentSystemExecutor = PaymentSystemExecutor;
var PaymentType = /** @class */ (function () {
    function PaymentType() {
    }
    PaymentType.prototype.build = function () {
        this.execute = new PaymentSystemExecutor(this.getInputs, this.validatePayment);
    };
    //returns method above
    PaymentType.prototype.getExector = function () {
        return this.execute;
    };
    return PaymentType;
}());
exports.PaymentType = PaymentType;
var CreditCardPayment = /** @class */ (function (_super) {
    __extends(CreditCardPayment, _super);
    function CreditCardPayment() {
        var _this = _super.call(this) || this;
        _this.getInputs = _this.payment;
        _this.validatePayment = _this.validate;
        return _this;
    }
    CreditCardPayment.prototype.payment = function () {
        var inputs = {};
        console.log('Enter Credit Card Payment Details.');
        inputs['name'] = readlineSync.question('  Name: ');
        inputs['ccNum'] = readlineSync.question('  Credit Card Number: ');
        inputs['ccExpDte'] = readlineSync.question('  Credit Card Expiration Date (MM/DD): ');
        return inputs;
    };
    CreditCardPayment.prototype.validate = function (inputs) {
        return /^[\w.' ]+$/.test(inputs.name) && /\d{15,16}/.test(inputs.ccNum) && /\d\d\/\d\d/.test(inputs.ccExpDte);
    };
    return CreditCardPayment;
}(PaymentType));
exports.CreditCardPayment = CreditCardPayment;
var BankDraftPayment = /** @class */ (function (_super) {
    __extends(BankDraftPayment, _super);
    function BankDraftPayment() {
        var _this = _super.call(this) || this;
        _this.getInputs = _this.payment;
        _this.validatePayment = _this.validate;
        return _this;
    }
    BankDraftPayment.prototype.payment = function () {
        var inputs = {};
        console.log('Enter Credit Card Payment Details.');
        inputs['name'] = readlineSync.question('  Name: ');
        inputs['routingNum'] = readlineSync.question('  Bank Routing Number: ');
        inputs['accNum'] = readlineSync.question('  Bank Account Number: ');
        return inputs;
    };
    BankDraftPayment.prototype.validate = function (inputs) {
        return /^[\w.' ]+$/.test(inputs.name) && /\d{15,16}/.test(inputs.routingNum) && /\d\d\/\d\d/.test(inputs.accNum);
    };
    return BankDraftPayment;
}(PaymentType));
exports.BankDraftPayment = BankDraftPayment;
var OnlinePayment = /** @class */ (function (_super) {
    __extends(OnlinePayment, _super);
    function OnlinePayment() {
        var _this = _super.call(this) || this;
        _this.getInputs = _this.payment;
        _this.validatePayment = _this.validate;
        return _this;
    }
    OnlinePayment.prototype.payment = function () {
        var inputs = {};
        console.log('Enter Credit Card Payment Details.');
        inputs['email'] = readlineSync.question('  Email: ');
        inputs['paymentPass'] = readlineSync.question('  Payment Password: ');
        return inputs;
    };
    OnlinePayment.prototype.validate = function (inputs) {
        return /^[\w.' ]+$/.test(inputs.email) && /\d{15,16}/.test(inputs.paymentPass);
    };
    return OnlinePayment;
}(PaymentType));
exports.OnlinePayment = OnlinePayment;
var OfflinePayment = /** @class */ (function (_super) {
    __extends(OfflinePayment, _super);
    function OfflinePayment() {
        var _this = _super.call(this) || this;
        _this.getInputs = _this.payment;
        _this.validatePayment = _this.validate;
        return _this;
    }
    OfflinePayment.prototype.payment = function () {
        var inputs = {};
        console.log('Enter Credit Card Payment Details.');
        inputs['name'] = readlineSync.question('  Name: ');
        inputs['billingAddress'] = readlineSync.question('  Billing Address: ');
        return inputs;
    };
    OfflinePayment.prototype.validate = function (inputs) {
        return /^[\w.' ]+$/.test(inputs.name) && /\d{15,16}/.test(inputs.billingAddress);
    };
    return OfflinePayment;
}(PaymentType));
exports.OfflinePayment = OfflinePayment;
