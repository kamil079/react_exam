class RPGCharacter {
    constructor(name, power, intelligence, luck) {
        this.name = name;
        this.power = power;
        this.intelligence = intelligence;
        this.luck = luck;
    }
    fight(obj, powerPoints) {
        let winner;
        if (powerPoints > this.power) {
            winner = obj.name;
        } else if (powerPoints == this.power) {
            winner = "REMIS!";
        } else {
            winner = this.name;
        }
        return winner;
    }
    playChess(obj, intelligancePoints) {
        let winner;
        if (intelligancePoints > this.power) {
            winner = obj.name;
        } else if (intelligancePoints == this.power) {
            winner = "REMIS!";
        } else {
            winner = this.name;
        }
        return winner;
    }
    tossCoin(obj, luckyPoints) {
        let winner;
        if (luckyPoints > this.power) {
            winner = obj.name;
        } else if (luckyPoints == this.power) {
            winner = "REMIS!";
        } else {
            winner = this.name;
        }
        return winner;
    }
}

class Dwarf extends RPGCharacter {
    constructor(name) {
        super(name);
        // this.fight();
    }
    randomPower(min, max) {
        return (this.power = Math.floor(Math.random() * (max - min + 1)) + min);
    }
    randomIntelligance(min, max) {
        return (this.intelligence =
            Math.floor(Math.random() * (max - min + 1)) + min);
    }
    randomLuck(min, max) {
        return (this.luck = Math.floor(Math.random() * (max - min + 1)) + min);
    }
    getRace() {
        return (this.race = this.constructor.name);
    }
}

class Orc extends RPGCharacter {
    constructor(name) {
        super(name);
    }
    randomPower(min, max) {
        return (this.power = Math.floor(Math.random() * (max - min + 1)) + min);
    }
    randomIntelligance(min, max) {
        return (this.intelligence =
            Math.floor(Math.random() * (max - min + 1)) + min);
    }
    randomLuck(min, max) {
        return (this.luck = Math.floor(Math.random() * (max - min + 1)) + min);
    }
    getRace() {
        return (this.race = this.constructor.name);
    }
}

class Elf extends RPGCharacter {
    constructor(name) {
        super(name);
    }
    randomPower(min, max) {
        return (this.power = Math.floor(Math.random() * (max - min + 1)) + min);
    }
    randomIntelligance(min, max) {
        return (this.intelligence =
            Math.floor(Math.random() * (max - min + 1)) + min);
    }
    randomLuck(min, max) {
        return (this.luck = Math.floor(Math.random() * (max - min + 1)) + min);
    }
    getRace() {
        return (this.race = this.constructor.name);
    }
}

const dwarf = new Dwarf("Durin Kamienny Topór");
const orc = new Orc("Urk'har Niszczyciel");
const elf = new Elf("Naylee z Nieśmiertelnego Lasu");

let dwarfPowerPoints = dwarf.randomPower(40, 100);
let dwarfIntelligancePoints = dwarf.randomIntelligance(40, 80);
let dwarfLuckyPoints = dwarf.randomLuck(40, 100);
dwarf.getRace();

let orcPowerPoints = orc.randomPower(50, 100);
let orcIntelligancePoints = orc.randomIntelligance(5, 20);
let orcLuckyPoints = orc.randomLuck(1, 100);
orc.getRace();

let elfPowerPoints = elf.randomPower(30, 80);
let elfIntelligancePoints = elf.randomIntelligance(60, 100);
let elfLuckyPoints = elf.randomLuck(20, 100);
elf.getRace();
console.log("Postaci:");
console.log("----------------:");

console.log(dwarf);
console.log(orc);
console.log(elf);
console.log("----------------:");

console.log("Kto wygrywa w sile:");
console.log("----------------:");

console.log(dwarf.fight(orc, orcPowerPoints));
console.log(orc.fight(elf, elfPowerPoints));
console.log(elf.fight(dwarf, orcPowerPoints));
console.log("----------------:");

console.log("Kto wygrywa w inteligencji:");
console.log("----------------:");

console.log(dwarf.playChess(orc, orcIntelligancePoints));
console.log(orc.playChess(elf, elfIntelligancePoints));
console.log(elf.playChess(dwarf, dwarfIntelligancePoints));
console.log("----------------:");


console.log("Kto ma więcej szczescia:");
console.log("----------------:");

console.log(dwarf.tossCoin(orc, orcLuckyPoints));
console.log(orc.tossCoin(elf, elfLuckyPoints));
console.log(elf.tossCoin(dwarf, dwarfLuckyPoints));
