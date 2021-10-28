import * as payment_systems from './payment_systems';
//Replaces function in UI and now calls the builders from payment_systems
export function paymentInterpreter (type:string): payment_systems.PaymentSystemExecutor|undefined{
    let payment: payment_systems.PaymentType;

    if (type="credit card") {
         let payment = new payment_systems.CreditCardPayment(); 
         payment.build(); 
         return payment.getExector();
    }
    else if(type="bank draft"){
        let payment = new payment_systems.BankDraftPayment(); 
         payment.build(); 
         return payment.getExector();

    }
    else if(type="online payment"){
        let payment = new payment_systems.OnlinePayment(); 
        payment.build(); 
        return payment.getExector();

    }
    else if(type="offline payment"){
        let payment = new payment_systems.OfflinePayment(); 
        payment.build(); 
        return payment.getExector();
    }
    else{
        console.log('Could not complete your request, please try again.'); 
        return undefined; 
    }

}