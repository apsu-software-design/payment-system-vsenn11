import readlineSync = require('readline-sync');

export class PaymentSystemExecutor {
    //functions for constructor
    private getInputs: ()=>{[payment:string]:string}; 
    private validate: (inputs: {[payment:string]:string})=>boolean; 
    
    //constructor with two functions as arguements that preform their tasks
    public constructor(inputs:()=>{[payment:string]:string}, validate:(inputs: {[payment:string]:string})=>boolean){
        this.getInputs=inputs; 
        this.validate=validate; 
    }
    //Execute method that steps through workflow and prints relevant info to the screen
    execute(){
       let valid= (this.validate(this.getInputs()));   
       if(valid){
           console.log("Payment information is being encrypted.")
           console.log("Payment is being processed.")
       }
       else{
           console.log("The entered payment is invalid, please try again.")
       }
    }
}
export abstract class PaymentType {
    abstract getInputs:() => {[payment:string]:string};
	abstract validatePayment: (inputs: {[info:string]: string})=>boolean; 
    //Uses inputs to complete execute method
    private execute!: PaymentSystemExecutor; 
    build():void{
        this.execute=new PaymentSystemExecutor(this.getInputs, this.validatePayment); 
    }
    //returns method above
    getExector():PaymentSystemExecutor{
        return this.execute; 
    }
}  

export class CreditCardPayment extends PaymentType {
    getInputs: () => { [payment: string]: string; };
    validatePayment: (inputs: { [info: string]: string; }) => boolean;

    constructor(){
        super(); 
        this.getInputs=this.payment; 
        this.validatePayment=this.validate; 
    }
    payment():{[payment:string]:string}{
        let inputs:{[payment:string]:string}={}; 
        console.log('Enter Credit Card Payment Details.');
        inputs['name']=readlineSync.question('  Name: ');
        inputs['ccNum']=readlineSync.question('  Credit Card Number: ');
        inputs['ccExpDte']=readlineSync.question('  Credit Card Expiration Date (MM/DD): ');
        return inputs; 
    }
    validate(inputs:{[payment:string]:string}):boolean{
        return /^[\w.' ]+$/.test(inputs.name) && /\d{15,16}/.test(inputs.ccNum) && /\d\d\/\d\d/.test(inputs.ccExpDte)
    }
  
}
export class BankDraftPayment extends PaymentType {
    getInputs: () => { [payment: string]: string; };
    validatePayment: (inputs: { [info: string]: string; }) => boolean;
    constructor(){
        super(); 
        this.getInputs=this.payment; 
        this.validatePayment=this.validate;
    } 
        payment():{[payment:string]:string}{
            let inputs:{[payment:string]:string}={}; 
            console.log('Enter Credit Card Payment Details.');
            inputs['name']=readlineSync.question('  Name: ');
            inputs['routingNum']=readlineSync.question('  Bank Routing Number: ');
            inputs['accNum']=readlineSync.question('  Bank Account Number: ');
            return inputs; 
        }
        validate(inputs:{[payment:string]:string}):boolean{
            return /^[\w.' ]+$/.test(inputs.name) && /\d{15,16}/.test(inputs.routingNum) && /\d\d\/\d\d/.test(inputs.accNum)
        }    
}
export class OnlinePayment  extends PaymentType{
    getInputs: () => { [payment: string]: string; };
    validatePayment: (inputs: { [info: string]: string; }) => boolean;
    constructor(){
        super(); 
        this.getInputs=this.payment; 
        this.validatePayment=this.validate;
    } 
        payment():{[payment:string]:string}{
            let inputs:{[payment:string]:string}={}; 
            console.log('Enter Credit Card Payment Details.');
            inputs['email']=readlineSync.question('  Email: ');
            inputs['paymentPass']=readlineSync.question('  Payment Password: ');
            return inputs; 
        }
        validate(inputs:{[payment:string]:string}):boolean{
            return /^[\w.' ]+$/.test(inputs.email) && /\d{15,16}/.test(inputs.paymentPass)
        }    
}
export class OfflinePayment extends PaymentType{
    getInputs: () => { [payment: string]: string; };
    validatePayment: (inputs: { [info: string]: string; }) => boolean;
    constructor(){
        super(); 
        this.getInputs=this.payment; 
        this.validatePayment=this.validate;
    } 
        payment():{[payment:string]:string}{
            let inputs:{[payment:string]:string}={}; 
            console.log('Enter Credit Card Payment Details.');
            inputs['name']=readlineSync.question('  Name: ');
            inputs['billingAddress']=readlineSync.question('  Billing Address: ');
            return inputs; 
        }
        validate(inputs:{[payment:string]:string}):boolean{
            return /^[\w.' ]+$/.test(inputs.name) && /\d{15,16}/.test(inputs.billingAddress)
        } 
} 

