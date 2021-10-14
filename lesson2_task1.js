function sumSalary(salaries) {
    let sum = 0;
    for (let item in salaries) {

        if (typeof salaries[item] != 'number' || isNaN(salaries[item]) || Math.abs(!isFinite(salaries[item]))) {
            continue;
        }
        sum += salaries[item];

    }

    return sum;
}

let salaries = {
    John: 1000,
    Ann: 1600,
    Pete: 1300,
    month: 'December',
    currency: 'USD',
    isPayed: false
}

console.log(sumSalary(salaries));