function hoursPerProject(input){
    let name = (input[0]);
    let hours = Number(input[1]);
    let projects = Number(input[2]);
    console.log(`The architect ${name} will need ${hours} hours to complete ${projects} project/s.`)
}
hoursPerProject (["George", "12", "4"]);