let attackValue = 5;
let choosenMaxLife = 5;
let mosterAttackValue = 14;

let currentMonsterHealth = choosenMaxLife;
let currentPlayerHealth = choosenMaxLife;
function attackHnadler() {
    const damage = dealMonsterDamage(attackValue);
    currentMonsterHealth -= damage;
    const playerDamage = dealPlayerDamage(mosterAttackValue);
    currentPlayerHealth -= playerDamage;
    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert("You Won!")
    } else if(currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert("you lost!")
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
        alert("You have a draw!")
    }

} 
adjustHealthBars(choosenMaxLife);
attackBtn.addEventListener("click", attackHnadler)