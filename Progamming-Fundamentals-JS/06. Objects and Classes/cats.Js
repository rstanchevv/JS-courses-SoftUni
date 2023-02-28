function cats(catsData){
    class Cat  {
        constructor(name, age){
        this.name =  name,
        this.age = age}

        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }

    for (let cat of catsData){
        let split = cat.split(" ");
        let catName = split[0];
        let catAge = split[1];
        let myCat = new Cat(catName, catAge);
        myCat.meow()
    }
}
cats(['Candy 1', 'Poppy 3', 'Nyx 2'])