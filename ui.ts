//User Interface for The Payment System
//@author James Church

import readlineSync = require('readline-sync'); //for easier repeated prompts
import {paymentInterpreter} from './paymentInterpreter';

/**
 * Function to run the UI
 */
export function start() {
  showMainMenu();
}

/**
 * The main menu. Will show until the user exits
 */
function showMainMenu() {
  while(true){ //run until we exit
    console.log(`Welcome to the Payment System! You wish to purchase an item for $5. Pick an option:
  1. Use a credit card.
  2. Use a bank draft.
  3. Use an online payment system.
  4. Use an offline payment system.
  5. Quit.`);

    let response = readlineSync.question('> ')
    if(response === '5' || response.slice(0,2).toLowerCase() === ':q'){
      break; //stop looping, thus leaving method
    }

    switch(response) { //handle each response
      case '1': showCreditCardPaymentMenu(); break;
      case '2': showBankDraftPaymentMenu(); break;
      case '3': showOnlinePaymentMenu(); break;
      case '4': showOfflinePaymentMenu(); break;
      default: console.log('Invalid option!');
    }
    console.log(''); //extra empty line for revisiting
  }
}

function showCreditCardPaymentMenu() {
  paymentInterpreter("credit card")?.execute(); 
}

function showBankDraftPaymentMenu() {
  paymentInterpreter("bank draft")?.execute(); 
}

function showOnlinePaymentMenu() {
  paymentInterpreter("online payment")?.execute(); 
}

function showOfflinePaymentMenu() {
  paymentInterpreter("offline payment")?.execute(); 
}

