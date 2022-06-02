// Font Increase //

function increaseFontSize() {
    text = document.getElementById("content");
    style = window.getComputedStyle(text, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize + 6) + 'px';
}

// Navigation //

var PaymentTitle = document.getElementById("payment-title");
var Payment1 = document.getElementById("payment-1");
var Payment2 = document.getElementById("payment-2");
var Pay = document.getElementById("pay");
var EverydayAccount = document.getElementById("everyday-account");
var SavingsAccount = document.getElementById("savings-account");
var Transfer = document.getElementById("transfer");
var PennyText = document.getElementById("penny-text");
var Start = document.getElementById("start");
var Playpen = document.getElementById("playpen");
var Correct = document.getElementById("correct");
var Login = document.getElementById("login");

// Playpen Navigation //

function selectPlaypen() {
    Playpen.style.display = "grid";
    Login.style.display = "none";
}

function selectPayee() {
    Payment1.style.display = "none";
    Payment2.style.display = "flex";
    PaymentTitle.innerHTML = "Create a new Payee";
}

function selectAccount() {
    Transfer.style.display = "none";
    Pay.style.display = "none";
    EverydayAccount.style.display = "block";
    PennyText.innerHTML = "This is the online banking Playpen." + "<br><br>" + "Move around the online banking website to familiarize yourself with how online banking works." + "<br><br>" + "On this ‘My Accounts’ page you can check your accounts and search transactions";
}

function selectPay() {
    Transfer.style.display = "none";
    Pay.style.display = "flex";
    EverydayAccount.style.display = "none";
    PennyText.innerHTML = "You are in the ‘Pay Someone’ page. " + "<br><br>" + "Here you can transfer money to other peoples accounts. You will need to add their bank account number. " + "<br><br>" + "Depending on banks this can take a couple of days to come through. " + "<br><br>" + "Click on ‘Create New payee’ to set up a new contact "
}

function selectTransfer() {
    Transfer.style.display = "flex";
    Pay.style.display = "none";
    EverydayAccount.style.display = "none";
    PennyText.innerHTML = "You are in the ‘Transfer Money’ page." + "<br><br>" + "Here you can transfer money between your different accounts." + "<br><br>" + "Making transfers between your accounts will show immediately. ";
}

function selectEveryday() {
    SavingsAccount.style.display = "none";
    EverydayAccount.style.display = "block";
    return false;
}

function selectSavings() {
    EverydayAccount.style.display = "none";
    SavingsAccount.style.display = "block";
    return false;
}

// Quiz Navigation //

function startQuiz() {
    Playpen.style.display = "grid";
    Start.style.display = "none";
}

function enterAnswer() {
    Playpen.style.display = "none";
    Correct.style.display = "grid";
}
</script>


