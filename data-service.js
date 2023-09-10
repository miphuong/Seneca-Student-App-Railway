// const { reject } = require('lodash');
// const Sequelize = require('sequelize');
// require('dotenv').config();

// // Internal connection: postgres://seneca_student_app_user:Q9GEG57XBxHD26nEpWF5yAAdN9puvWAR@dpg-chls5kfdvk4sq15129sg-a/seneca_student_app
// // External connection: postgres://seneca_student_app_user:Q9GEG57XBxHD26nEpWF5yAAdN9puvWAR@dpg-chls5kfdvk4sq15129sg-a.oregon-postgres.render.com/seneca_student_app
// // External connection (PSQL): PGPASSWORD=Q9GEG57XBxHD26nEpWF5yAAdN9puvWAR psql -h dpg-chls5kfdvk4sq15129sg-a.oregon-postgres.render.com -U seneca_student_app_user seneca_student_app


// // Heruo Postgres Connection: 
// var sequelize = new Sequelize('seneca_student_app','seneca_student_app_user','Q9GEG57XBxHD26nEpWF5yAAdN9puvWAR', {
//     host: 'dpg-chls5kfdvk4sq15129sg-a.oregon-postgres.render.com',
//     dialect: 'postgres',
//     operatorAliases: false,
//     dialectOptions: {
//         ssl: {
//             require: true,
//             rejectUnauthorized: false 
//           }
//     },
//     pool:{
//         max:5,
//         min:0,
//         acquire: 30000,
//         idle:10000
//     }
// });


// //Define Course Model/Table
// const Course = sequelize.define('courses', { 
//     code: {//courseCode
//         type: Sequelize.TEXT,
//         primaryKey: true
//     },
//     name: Sequelize.TEXT, //subjectTitle
//     semester: Sequelize.INTEGER,//semester
//     prerequisite: Sequelize.ARRAY(Sequelize.TEXT),//prerequisite 
//     required: Sequelize.ARRAY(Sequelize.TEXT),//requiredCourse  
//     recommendedProfessor: Sequelize.ARRAY(Sequelize.TEXT),//recommendedProf  
//     isGeneral: Sequelize.BOOLEAN,//isGeneral
//     desc: Sequelize.TEXT}/*,
//     {
//         createdAt: false, // disable createdAt
//         updatedAt: false // disable updatedAt
//     }*/
// );

// // module.exports.getAll = () => {
// //     return new Promise((resolve,reject) => {
// //         Course.findAll()
// //             .then( courses => {
// //                 global.arr = courses.map((element) => {
// //                     // Put data into array
// //                     let newarr = {};
// //                     newarr['code'] = element.code;
// //                     newarr['name'] = element.name;
// //                     newarr['semester'] = element.semester;
// //                     newarr['prerequisite'] = element.prerequisite;
// //                     newarr['required'] = element.required;
// //                     newarr['recommendedProfessor'] = element.recommendedProfessor;
// //                     newarr['isGeneral'] = element.isGeneral;
// //                     newarr['desc'] = element.desc;

// //                     return newarr;
// //                 });
// //                 console.log("here is the array: ");
// //                 console.log(arr);
// //                 resolve(arr);
// //             })
// //             .catch((err)=>{
// //                 reject("data-sevice-unable to sync the database");
// //             });
// //     });
// // };



// module.exports.getAll =  () => {

//         console.log("00000000000000000000000000000000");
//         console.log("000000111111111111111111111110000000");
//         //let getData = async () =>{
//         let getData = () => {
//             console.log("111111111111111111111111111111");
//             try{
//                 let courses = Course.findAll();
//                 console.log("222222222222222222222222222222222");
//                 console.log("type of courses: ", typeof(courses));
//                 console.log("length: ", Object.keys(courses).length);
//                 console.log("index: ", courses.code);
//                     // global.arr = courses.map((element) => {
//                     //     // Put data into array
//                     //     let newarr = {};
//                     //     newarr['code'] = element.code;
//                     //     newarr['name'] = element.name;
//                     //     newarr['semester'] = element.semester;
//                     //     newarr['prerequisite'] = element.prerequisite;
//                     //     newarr['required'] = element.required;
//                     //     newarr['recommendedProfessor'] = element.recommendedProfessor;
//                     //     newarr['isGeneral'] = element.isGeneral;
//                     //     newarr['desc'] = element.desc;
    
//                     //     return newarr;
//                     // });
//                 console.log("333333333333333333333333333333");
                
           
//             }catch(error){
//                 console.log("4444444444444444444444444444");
//                 console.log("ERROR: ", error);
//             }
//             console.log("55555555555555555555555555555");
//         }
//         getData();
//         console.log("666666666666666666666666666666");
// };

//////////////////// 1-117 are all commented out /////////////////////////


const Sequelize = require('sequelize');
require('dotenv').config();

// RENDER
// const sequelize = new Sequelize('seneca_student_app','seneca_student_app_user','Q9GEG57XBxHD26nEpWF5yAAdN9puvWAR', {
//     host: 'dpg-chls5kfdvk4sq15129sg-a.oregon-postgres.render.com',
//     dialect: 'postgres',
//     operatorAliases: false,
//     dialectOptions: {
//         ssl: {
//             require: true,
//             rejectUnauthorized: false 
//           }
//     },
//     pool:{
//         max:5,
//         min:0,
//         acquire: 30000,
//         idle:10000
//     }
// });

// RAILWAY
// const sequelize = new Sequelize('railway','postgres','93NKkwlKhJRjS9sVMl1T', {
//     host: 'containers-us-west-147.railway.app',
//     dialect: 'postgres',
//     operatorAliases: false,
//     dialectOptions: {
//         ssl: {
//             require: true,
//             rejectUnauthorized: false 
//           }
//     },
//     pool:{
//         max:5,
//         min:0,
//         acquire: 30000,
//         idle:10000
//     }
// });

const sequelize = new Sequelize('postgresql://postgres:93NKkwlKhJRjS9sVMl1T@containers-us-west-147.railway.app:5668/railway');



//Define Course Model/Table
const Course = sequelize.define('Course', { 
    code: {//courseCode
        type: Sequelize.TEXT,
        primaryKey: true
    },
    name: Sequelize.TEXT, //subjectTitle
    semester: Sequelize.INTEGER,//semester
    prerequisite: Sequelize.ARRAY(Sequelize.TEXT),//prerequisite 
    required: Sequelize.ARRAY(Sequelize.TEXT),//requiredCourse  
    recommendedProfessor: Sequelize.ARRAY(Sequelize.TEXT),//recommendedProf  
    isGeneral: Sequelize.BOOLEAN,//isGeneral
    desc: Sequelize.TEXT},
    {
        createdAt: false, // disable createdAt
        updatedAt: false // disable updatedAt
    }
);

module.exports.getAll = async () => {
  /*  /////////// THIS WORKS ////////////////////
  // try{
  //   console.log("0000000000000000000000000000000");
  //   const courses = await Course.findAll();
  //   console.log("1111111111111111111111111111111");
  //   console.log (courses.every(course => course instanceof Course));
  //   console.log("All courses:", JSON.stringify(courses, null, 2));
  // } catch(error){
  //   console.log("Error: ", error);
  // }
  */
  return new Promise((resolve,reject) => {
    Course.findAll()
        .then( courses => {
            global.arr = courses.map((element) => {
                // Put data into array
                let newarr = {};
                newarr['code'] = element.code;
                newarr['name'] = element.name;
                newarr['semester'] = element.semester;
                newarr['prerequisite'] = element.prerequisite;
                newarr['required'] = element.required;
                newarr['recommendedProfessor'] = element.recommendedProfessor;
                newarr['isGeneral'] = element.isGeneral;
                newarr['desc'] = element.desc;

                return newarr;
            });

            resolve(arr);
        })
        .catch((err)=>{
            reject("data-sevice-unable to sync the database");
        });
});
}