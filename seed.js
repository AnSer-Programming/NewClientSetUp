// try {
//     const sequelize = require('./connection/config');
//     const newClientPaperWorkTable = require('./models/newClientPaperWork');
//     const seedDatabase = async () => {
//         await sequelize.sync({ force: true });   
//         await newClientPaperWorkTable.Create({client_name: "AnSer", contact_name: "Stephen Merki"}, {
//             returning: true,
//         });
//         process.exit(0);
//     };
    
//     seedDatabase();
// } catch(err) {
//     console.log(`Seed Error: ${ err }`);
// }