const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

const decimalToBinary = (input) => {
// Reçoit les entrées
  const inputs = [];
// Stock les résultats des divisions
  const quotients = [];
// Stock le reste de la division si le resultat n'est pas un entier 
  const remainders = [];

  if (input === 0) {
    result.innerText = "0";
    return;
  }

while (input > 0) {
// Ici divise l'entrée par 2 et arrondi son résultat à un son entier inférieur
  const quotient = Math.floor(input / 2);
// Ici on récupère le reste de la division grace à l'opérateur modulo "%". Retournera 1 si impair, 0 si pair
  const remainder = input % 2;

// On ajoute les valeurs calculées aux tableaux plus haut
  inputs.push(input);
  quotients.push(quotient);
  remainders.push(remainder);

  // Sécurise la boucle pour quelle arrive à 0.
  input = quotient;
  // input = 0; Pour sécuriser une boucle infinie pendant la mise en place de la function
}

console.log("Inputs: ", inputs);
console.log("Quotients: ", quotients);
console.log("Remainders: ", remainders);

// Affiche le résultat en base-2. Le binaire commançant par la fin de la division, on le reverse.
result.innerText = remainders.reverse().join("");
};

// Clean de l'input user

const checkUserInput = () => {
// Si null ou Not a number => Alert user
  if (!numberInput.value || isNaN(parseInt(numberInput.value))) {
    alert("Please provide a decimal number");
    return;
  }
// Ensuite lire la fonction 
  decimalToBinary(parseInt(numberInput.value));
  numberInput.value = "";
};

// Mise en place du bouton "convert"

convertBtn.addEventListener("click", checkUserInput);
numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});