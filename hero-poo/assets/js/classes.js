class Hero {
    constructor(name, power, energy, age) {
        this._name = name;
        this._power = power;
        this._energy = energy;
        this._age = age;
    }

    get power() {
        return this._power;
    }

    set power(value) {
        const typesPower = ['Fire', 'Water', 'Air'];

        if (typesPower.includes(value)) {
            this._power = value;
        }
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (typeof value === 'string') {
            this._name = value;
        }
    }

    get energy() {
        return this._energy;
    }

    set energy(value) {
        if (typeof value === 'number') {
            this._energy = value;
        }
    }

    get age() {
        return this._age;
    }

    set age(value) {
        if (typeof value === 'number') {
            this._age = value;
        }
    }

    fight(adversery) {
        if (this.energy > 10 && adversery.energy > 10) {
            if (this.energy > adversery.energy) {
                this.energy -= 5;
                adversery.energy -= 10;

                return `${this.name} ganhou a luta`;
            } else if (this.energy === adversery.energy) {
                return 'UNIAO';
            }

            adversery.energy -= 5;
            this.energy -= 10;

            return `${adversery.name} ganhou a luta!`;
        }
        return 'Vocês não estão aptos para lutar :( ';
    }
}