const form = document.querySelector('form');

const validateData = (data) => {
    const dataTypes = {
        name: 'string',
        power: ['Fire', 'Water', 'Air'],
        age: 'number',
        energy: 'number',
    };

    const wrongFields = {};
    let isValid = true;

    for (const key in dataTypes) {
        const currentType = dataTypes[key];
        const currentValue = Number(data[key]) ? parseInt(data[key]) : data[key];

        let isWrongType = false;

        if (Array.isArray(currentType)) {
            if (!currentType.includes(currentValue)) {
                isWrongType = true;
            }
        } else if (typeof currentValue !== currentType) {
            isWrongType = true;
        }

        if (isWrongType) {
            wrongFields[key] = `The field ${key} needs to be ${currentType} type`;
            isValid = false;
        }
    }

    const response = {
        validData: isValid,
        wrongFields,
    };

    return response;
};

const createHero = (evt) => {
    evt.preventDefault();

    const inputs = evt.target;

    const heroValues = {};

    for (let i = 0; i < inputs.length; i++) {
        const { name, value } = inputs[i];

        if (name) {
            heroValues[name] = value;
        }
    }

    const validatedHero = validateData(heroValues);

    if (validatedHero.validData) {
        const { name, power, energy, age } = heroValues;
        let newHero = new Hero(name, power, energy, age);

        return newHero;
    }
};

form.addEventListener('submit', createHero);