const section = document.getElementById('edit-movie')

let ctx = null;

export function showLogin(context){
    ctx = context;
    context.showSection(section)
}