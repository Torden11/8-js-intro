console.clear();

function dalyba(a, b) {
    if (typeof a !== 'number') {
        return 'ERROR: neduotas pirmas skaicius';
    }

    if (typeof b !== 'number') {
        return 'ERROR: neduotas antras skaicius';
    }

    if (a === Infinity
        || a === -Infinity
        || '' + a === 'NaN') {
        return 'ERROR: pirmas parametras turi buti normalus skaicius';
    }

    if (!isFinite(b)) {
        return 'ERROR: antras parametras turi buti normalus skaicius';
    }

    if (b === 0) {
        return 'ERROR: antras parametras negali buti 0';
    }

    const ats = a / b;
    return ats;
}

console.log(dalyba());
console.log(dalyba(8));
console.log(dalyba('labas', 8));
console.log(dalyba(8, 'labas'));
console.log(dalyba(Infinity, 8));
console.log(dalyba(2, Infinity));
console.log(dalyba(-Infinity, 8));
console.log(dalyba(2, -Infinity));
console.log(dalyba(2, NaN));
console.log(dalyba(NaN, -5));
console.log(dalyba(8, 0));

console.log(dalyba(8, 4));
console.log(dalyba(-8, -4));
console.log(dalyba(8, -4));
console.log(dalyba(8, 9));
console.log(dalyba(8, 3.5));
console.log(dalyba(0, 8));
