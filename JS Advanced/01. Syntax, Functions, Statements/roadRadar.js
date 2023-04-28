function roadRadar(speed, location){
    switch (location){
        case "motorway":
            if (speed <= 130){
                console.log(`Driving ${speed} km/h in a 130 zone`)
            } else {
                let status = ''
                let difference = speed - 130;
                if (difference <= 20){
                    status = 'speeding';
                } else if (difference <= 40){
                    status = 'excessive speeding';
                } else {
                    status = `reckless driving`;
                }
                console.log(`The speed is ${difference} km/h faster than the allowed speed of 130 - ${status}`);
            }
            break;
        case "interstate":
            if (speed <= 90){
                console.log(`Driving ${speed} km/h in a 90 zone`)
            } else {
                let status = ''
                let difference = speed - 90;
                if (difference <= 20){
                    status = 'speeding';
                } else if (difference <= 40){
                    status = 'excessive speeding';
                } else {
                    status = `reckless driving`;
                }
                console.log(`The speed is ${difference} km/h faster than the allowed speed of 90 - ${status}`);
            }
            break;
        case "city":
            if (speed <= 50){
                console.log(`Driving ${speed} km/h in a 50 zone`);
            } else {
                let status = ''
                let difference = speed - 50;
                if (difference <= 20){
                    status = 'speeding';
                } else if (difference <= 40){
                    status = 'excessive speeding';
                } else {
                    status = `reckless driving`;
                }
                console.log(`The speed is ${difference} km/h faster than the allowed speed of 50 - ${status}`);
            }
            break;
        case "residential":
            if (speed <= 20){
                console.log(`Driving ${speed} km/h in a 20 zone`);
            } else {
                let status = ''
                let difference = speed - 20;
                if (difference <= 20){
                    status = 'speeding';
                } else if (difference <= 40){
                    status = 'excessive speeding';
                } else {
                    status = `reckless driving`;
                }
                console.log(`The speed is ${difference} km/h faster than the allowed speed of 20 - ${status}`);
            }
    }
}
roadRadar(21, 'residential')