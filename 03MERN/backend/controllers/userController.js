import { faker } from "@faker-js/faker";
export const listUsers = (req, res) => {
    var users = [];

    for (let i= 0; i <10; i++){
        let user = {
            avatar: faker.image.avatar(),
            id: faker.string.uuid(),
            name: faker.person.fullName(),
            birthdate: faker.date.birthdate(),
            sex: faker.person.sex(),
        };
        users.push(user);
    }
    
    return res.json(users);
}
export const createUser = (req, res) => {
    console.log("El nombre es", req.body.name);
    return res.status(201).json(req.body);
}
export const updateUser = (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    
    return res.json({});
}
export const deleteUser = (req, res) => {
    console.log(req.params.id);
    
    return res.json({});
}
export const searchUsers = (req, res) => {
    console.log(req.query.name);
    console.log(req.query.age);
    console.log(req.query.city);
    
    return res.json({});
}

// export const listUsers = (req, res) => {
//     var users = [
//         {
//             id: 1,
//             name: "Ricardo",
//             age: 56
//         },
//         {
//             id: 2,
//             name: "Silvia",
//             age: 70
//         },
//         {
//             id: 3,
//             name: "Juan",
//             age: 20
//         }
//     ];

//     res.json(users);
// }

// export const createUser = (req, res) => {
//     // console.log(req.body);
//     res.status(201).json(req.body);
// }

// export const deleteUser = (req, res) => {
//     res.json({});
// }

// export const updateUsers = (req, res) => {
//     res.json({});
// }

// // export const searchUsers = (req, res) => {
// //     var users = [
// //         {
// //             id: 1,
// //             name: "Ricardo",
// //             age: 56
// //         },
// //         {
// //             id: 2,
// //             name: "Silvia",
// //             age: 70
// //         },
// //         {
// //             id: 3,
// //             name: "Juan",
// //             age: 20
// //         }
// //     ];

// //     res.json(users);
// // }