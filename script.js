
let health = 100;
let level = 1;

function attack() {
    const log = document.getElementById('game-log');
    health -= Math.floor(Math.random() * 20) + 10;
    if (health <= 0) {
        log.textContent = "You defeated the enemy and leveled up!";
        level++;
        health = 100;
        document.getElementById('level').textContent = level;
    } else {
        log.textContent = `Enemy attacked you! Health is now ${health}.`;
    }
    document.getElementById('health').textContent = health;
}

function heal() {
    const log = document.getElementById('game-log');
    const healAmount = Math.floor(Math.random() * 15) + 5;
    health = Math.min(health + healAmount, 100);
    log.textContent = `You healed for ${healAmount}. Health is now ${health}.`;
    document.getElementById('health').textContent = health;
}
