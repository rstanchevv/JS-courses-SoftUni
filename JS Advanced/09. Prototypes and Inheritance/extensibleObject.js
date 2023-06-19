function extensibleObject(){
    let obj = {
        extend: (template) => {
            let b = Object.assign(template, obj)
            Object.assign(obj, b)
        }
    }   
    return obj;
}
const myObj = extensibleObject();

const template = {
    extensionMethod: function () {},
    extensionProperty: 'someString'
   }
   myObj.extend(template);
   