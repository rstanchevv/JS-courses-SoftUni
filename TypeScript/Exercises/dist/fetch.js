// const USERS_URL = 'https://jsonplaceholder.typicode.com/posts'
// // interface Post {
// //     userId: number
// //     id: number
// //     title: string
// //     body: string
// // }
// type Post = {
//     userId: number
//     id: number
//     title: string
//     body: string
// }
// async function getPosts():Promise<void>{
//     try{
//         const res =  await fetch(USERS_URL);
//         const data: Post[] = await res.json();
//         const postTitles = data.map(post => {
//             return post.title
//         })
//         console.log({postTitles})
//     } catch(err){
//         console.log(err.message)
//     }
// }
// getPosts()
//# sourceMappingURL=fetch.js.map