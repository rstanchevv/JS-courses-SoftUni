function netherRealms(names) {
    let namesArr = names.split(/[, ]+/g);
    let obj = {}
    let healthPattern = /[^0-9.\/+*-]/g;
    let damagePattern = /[+-]?\d+\.?\d*/g;
    let additionalDamage = /[*\/]/g;

    for (const name of namesArr) {
        let health = 0;
        let damage = 0;
        if (healthPattern.test(name)) {
            for (const cr of name.match(healthPattern)) {
                health += Number(cr.charCodeAt());
            }
        }
        if (damagePattern.test(name)) {
            damage = name.match(damagePattern).map(Number).reduce((a, b) => a + b, 0);
        }
        if (additionalDamage.test(name)) {
            for (const sign of name.match(additionalDamage)) {
                if (sign === "*") {
                    damage *= 2;
                } else {
                    damage /= 2;
                }
            }
        }
        obj[name] = {
            health,
            damage,
        }
    }
    let sorted = Object.keys(obj).sort((a, b) => a.localeCompare(b));

    for (const name of sorted) {
        console.log(`${name} - ${obj[name].health} health, ${obj[name].damage.toFixed(2)} damage`)
    }
}
netherRealms('M3ph1st0**, Azazel')