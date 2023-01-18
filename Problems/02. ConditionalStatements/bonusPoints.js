function bonuspoints(input){
    let initialScore = Number(input[0]);
    let bonus = 0;

    if (initialScore <= 100)
    bonus = bonus + 5
    else if (initialScore <= 1000)
    bonus = initialScore * 0.2
    else if (initialScore > 1000)
    bonus = initialScore * 0.1
    if ((initialScore % 2) == 0)
    bonus = bonus +1
    else if (initialScore % 5 == 0)
    bonus = bonus +2

    console.log(bonus)
    console.log(initialScore + bonus)
}


bonuspoints([15875])