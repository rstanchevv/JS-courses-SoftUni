// import { editFruit, getAFruit } from "../api/data.js";
// import { html, nothing } from "../lib.js";

// const editTemplate = (fruit, onSubmit) => html`<section id="edit">
//   <div class="form">
//     <h2>Edit Fruit</h2>
//     <form @submit=${onSubmit} class="edit-form">
//       <input type="text" name="name" id="name" placeholder="" value ="${fruit.name}"/>
//       <input
//         type="text"
//         name="imageUrl"
//         id="Fruit-image"
//         placeholder=""
//         value = "${fruit.imageUrl}"
//       />
//       <textarea
//         id="fruit-description"
//         name="description"
//         placeholder=""
//         rows="10"
//         cols="50"
//       >${fruit.description}</textarea>
//       <textarea 
//         id="fruit-nutrition"
//         name="nutrition"
//         placeholder=""
//         rows="10"
//         cols="50"
//       >${fruit.nutrition}</textarea>
//       <button type="submit">post</button>
//     </form>
//   </div>
// </section> `;

// export async function showEdit(ctx) {
//   const id = ctx.params.id;
//   const fruit = await getAFruit(id);
//   ctx.render(editTemplate(fruit, createSubmitHandler(onSubmit)));

// export function createView(ctx) {
//   ctx.render(updateTemplate(createSubmitHandler(onSubmit)));
//   async function onSubmit({par1, par2, par 3}) (from the instructions){
//     validation: if ([par1, par2, par3, par4,].some (x => x == '')){
//       return alert (`All fields are required!`)
//   }
//   await updateFunction(id, {par1, par 2, par3}) (from the instructions);
//   ctx.page.redirect('/somewhere)
// }
// }
