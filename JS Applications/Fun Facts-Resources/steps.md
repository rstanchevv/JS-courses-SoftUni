<!-- 1) npm install;
2) start server from cd server; node server.js

--Layout--

1) create example.html and paste the data from index.html;
2) go to layout and replace with header data; under header, create <main></main> and add ${content} inside
3) check what should be visible for user/guest and add validation with userData / !userData;
4) edit the hrefs
5) go to app.js and update root location - it should correspond to the parent of header and main;
6) go to data.js and fix the requests;

--Views--
1) create Home template and render it;
2) create Register template and render it, add submitHandler to the form;; if repassword name is different from repass, use 'different name' = repass when desctructuring to onRegister function; redirect to the correct view;
3) create Login template and render it; add submitHandler to the form; redirect to the correct view;
4) create dashboard view and render it; go to data.js and edit all endpoints;
5) create details view and render it; layoyut should be /catalog/:id or /details/:id; edit button href should be details/edit/:id; delete button should be javascript:void(0); to validate creator :


        cosnt requestById = request(id);
        const userData = getUserData();
        if (userData && userData._id == requestById._ownerId){
            requestById.canEdit = true;
        }

the logic in the template should be ${requestById ? : html`(for owner)` : html`(for others)`}}

6) create create view and render it; onCreate function should be created and given to createSubmitHandler function; its parameters could be taken the following way:

async function onSubmit({par1, par2, par 3}) (from the instructions){
    validation: if ([par1, par2, par3, par4,].some (x => x == '')){
        return alert (`All fields are required!`)
    }
    await createFunction;
    ctx.page.redirect('/somewhere)
}

7) create edit view and render it; make a copy of create.js and rename it to edit.js; rename template const; add app.js /catalog/edit/:id;
in the function, take id from ctx.params.id call the function for getting the respective data from the Server - await getById(id);
when ready, give it to the render function as first param; all input/textarea fields should have attribute .value where the information should be automatically populated -->
