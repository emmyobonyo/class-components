class Character {
    // If you need to initialize values while creating the object, you need to include a constructor
    // Initialize with a dynamic value
    constructor(initialHp = 100) {
        this.hp = initialHp
    }

    // if you'll always initialize with a hard-coded value, you don't need an initializer
    alive = true

    updateHp(amount) {
        const calc = this.hp + amount
        if(calc < 0) {
            this.hp = 0
            this.alive = false
        } else {
            this.hp = calc
        }
    }
}

class Hero extends Character {
    constructor(hp) {
        super(hp)
    }
    inventory = []

    defeatEnemy(enemy) {
        if(enemy.lootToDrop) {
            this.inventory.push(enemy.lootToDrop)
        }
        enemy.updateHp(enemy.hp + -1)
    }
}

class Enemy extends Character {
    constructor(hp, lootToDrop){
        super(hp)
        this.lootToDrop = lootToDrop
    }
}

const enemy = new Enemy(100, 'Swords of Evil')
const me = new Hero(100)

me.defeatEnemy(enemy)

console.log("My inventory:", me.inventory)
console.log("Enemy's HP:", enemy.hp)
console.log("enemy.alive:", enemy.alive)
//The extended classes have access to the methods of the parent class
//The extended classes alco have access to the construtore methods of the parent class. I this case 'hp'
//In other words extended classes have access to all the constructor variables and methods of the parent class. Everything