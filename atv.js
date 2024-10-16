function writeALine() {
    console.log('---------------------------------------------------------');
}

function MinecraftEntities(name, maxHealth) {
    let _maxHealth = maxHealth; 
    this.health = _maxHealth;
    this.name = name;
    let _state = this.health > 0 ? 'alive' : 'dead';

    this.attacked = function(damage) {
        this.health -= damage;
        _state = this.health > 0 ? 'alive' : 'dead';
        console.log(`${this.name} received ${damage} of damage!`)
        writeALine();
    };

    this.getState = function() {
        return _state;
    }

    this.setState = function(newState) {
        _state = newState;
    }

    this.setMaxHealth = function(newMaxHealth) {
        if (typeof newMaxHealth === 'number'){
            if (newMaxHealth > 0) {
                _maxHealth = newMaxHealth;
                if (this.health > _maxHealth) {
                    this.health = _maxHealth;
                }
            } else {
                console.log('only positive numbers')
            };
        } else {
            console.log('only numbers')
        };
    }

    this.getMaxHealth = function() {
        return _maxHealth;
    };

    this.info = function() {
        console.log(`Entity Name: ${name}.`);
        console.log(`Entity maxHealth: ${_maxHealth} ( ${_maxHealth / 2} hearts ).`);
        console.log(`Entity actually health: ${this.health} ( ${this.health / 2} hearts )`);
        console.log(`This Entity is ${_state}`);
        writeALine();
    }
}

function PassiveMob(name, maxHealth) {
    MinecraftEntities.call(this, name, maxHealth);
    this.attacked = function(damage) {
        console.log(`${this.name} received ${damage} of damage!`);
        this.health -= damage;
        this.setState(this.health > 0 ? 'running for its live' : 'dead');
        writeALine();
    };
};

function AgressiveMob(name, maxHealth, attack, burning) {
    MinecraftEntities.call(this, name, maxHealth);
    this.attackDamage = attack;
    this.burnInTheSun = burning;
    this.attacked = function(damage) {
        console.log(`${this.name} received ${damage} of damage!`)
        this.health -= damage;
        this.setState(this.health > 0 ? 'running to catch you' : 'dead');
        writeALine();
    };

    this.info = function() {
        console.log(`Entity Name: ${name}.`);
        console.log(`Entity maxHealth: ${this.getMaxHealth()} ( ${this.getMaxHealth() / 2} hearts ).`);
        console.log(`Entity actually health: ${this.health} ( ${this.health / 2} hearts )`);
        console.log(`Entity attack value: ${this.attackDamage}`);
        console.log(`The Entity burn in the sun: ${this.burnInTheSun}.`)
        console.log(`This Entity is ${this.getState()}`);
        writeALine();
    }
    
};


const cow = new PassiveMob('cow', 10);
const zombie = new AgressiveMob('zombie', 20, 5, true);
const pig = new PassiveMob('pig', 8);
const skeleton = new AgressiveMob('sans', 1, 1, true);

cow.info();
zombie.info();
pig.info();
skeleton.info();
cow.attacked(5);
zombie.attacked(10);
skeleton.attacked(2);
pig.attacked(30);
cow.info();
zombie.info();
pig.info();
skeleton.info();
