class RPGCharacter {
    constructor(name) {
        this.name = name;
        this.power = null;
        this.intelligence = null;
        this.luck = null;
    }

    randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    getRace() {
        return (this.race = this.constructor.name);
    }

    fight(enemy) {
        if (enemy.power === this.power) {
            return "REMIS!";
        }
        return enemy.power > this.power ? enemy.name : this.name;
    }

    playChess(enemy) {
        if (enemy.intelligence === this.intelligence) {
            return "REMIS!";
        }
        return enemy.intelligence > this.intelligence ? enemy.name : this.name;
    }

    tossCoin(enemy) {
        if (enemy.luck === this.luck) {
            return "REMIS!";
        }
        return enemy.luck > this.luck ? enemy.name : this.name;
    }
}

class Dwarf extends RPGCharacter {
    constructor(name) {
        super(name);
        this.power = this.randomNumber(40, 100);
        this.intelligence = this.randomNumber(40, 80);
        this.luck = this.randomNumber(40, 100);
        this.race = this.constructor.name;
    }
}

class Orc extends RPGCharacter {
    constructor(name) {
        super(name);
        this.power = this.randomNumber(50, 100);
        this.intelligence = this.randomNumber(5, 20);
        this.luck = this.randomNumber(1, 100);
        this.race = this.constructor.name;
    }
}

class Elf extends RPGCharacter {
    constructor(name) {
        super(name);
        this.power = this.randomNumber(30, 80);
        this.intelligence = this.randomNumber(60, 100);
        this.luck = this.randomNumber(20, 100);
        this.race = this.constructor.name;
    }
}

const dwarf = new Dwarf("Durin Kamienny Topór");
const orc = new Orc("Urk'har Niszczyciel");
const elf = new Elf("Naylee z Nieśmiertelnego Lasu");

console.log(dwarf);
console.log(orc);
console.log(elf);

console.log(orc.fight(elf));
console.log(elf.playChess(dwarf));
console.log(dwarf.tossCoin(elf));

