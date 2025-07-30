class OldBankAPI {
  deposit(amount) {
    console.log(`Deposited $${amount} using OldBankAPI`);
  }

  withdraw(amount) {
    console.log(`Withdrew $${amount} using OldBankAPI`);
  }
}

class NewBankAPI {
  processTransaction({ type, amount }) {
    console.log(`Processed ${type} of $${amount} using NewBankAPI`);
  }
}

class BankAdapter {
  constructor(newBankAPI) {
    this.newBankAPI = newBankAPI;
  }

  deposit(amount) {
    this.newBankAPI.processTransaction({ type: "deposit", amount });
  }

  withdraw(amount) {
    this.newBankAPI.processTransaction({ type: "withdraw", amount });
  }
}

// Old Bank
const oldBank = new OldBankAPI();
oldBank.deposit(100); // Deposited $100 using OldBankAPI
oldBank.withdraw(50); // Withdrew $50 using OldBankAPI

// New Bank via Adapter
const newBank = new BankAdapter(new NewBankAPI());
newBank.deposit(200); // Processed deposit of $200 using NewBankAPI
newBank.withdraw(75); // Processed withdraw of $75 using NewBankAPI
