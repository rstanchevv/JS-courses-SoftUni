const breeds = [];
const cats = [];

exports.addBreed = (breed) => {
    breeds.push({breed})
}
exports.getBreeds = () => breeds.slice();

exports.getCats = () => cats.slice();

exports.addCat = (name, description, image, breed) => {
    const id = Math.random().toString(36).slice(2, 7);
    cats.push({name, description, image, breed, id})
}

exports.editCat = (id, name, description, image, breed) => {
    const findCat = cats.find(x => x.id === id);
    findCat.name = name;
    findCat.description = description;
    findCat.image = image;
    findCat.breed = breed;
}

exports.shelterCat = (id) => {
    const findCat = cats.find(x => x.id === id);
    const indexOf = cats.indexOf(findCat);
    cats.splice(indexOf, 1)
}

