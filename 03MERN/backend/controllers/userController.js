export const listUsers = (req, res) => {
    var users = [
        {
            id: 1,
            name: "Ricardo",
            age: 56
        },
        {
            id: 2,
            name: "Silvia",
            age: 70
        },
        {
            id: 3,
            name: "Juan",
            age: 20
        }
    ];

    res.json(users);
}

export const createUser = (req, res) => {
    // console.log(req.body);
    res.status(201).json(req.body);
}

export const deleteUser = (req, res) => {
    res.json({});
}

export const updateUsers = (req, res) => {
    res.json({});
}

// export const searchUsers = (req, res) => {
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