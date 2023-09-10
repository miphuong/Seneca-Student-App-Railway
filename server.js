// const express = require('express');
// const app = express();
// const port = process.env.PORT || 8080;
// //const filterjs = require('./filter.js');
// const dataService = require('./data-service.js');
// const bodyParser = require('body-parser');
// //const clientSessions = require('client-sessions');

// // app.use(bodyParser.urlencoded({extended: false}));
// // app.use(express.static('./sub'));

// // app.listen(port, function(err){
// //     if (err) console.log("Error in server setup")
// //     console.log("Server listening on Port", port);
// // });



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
// //         // Course.findAll()
// //         //     .then( courses => {
// //         //         global.arr = courses.map((element) => {
// //         //             // Put data into array
// //         //             let newarr = {};
// //         //             newarr['code'] = element.code;
// //         //             newarr['name'] = element.name;
// //         //             newarr['semester'] = element.semester;
// //         //             newarr['prerequisite'] = element.prerequisite;
// //         //             newarr['required'] = element.required;
// //         //             newarr['recommendedProfessor'] = element.recommendedProfessor;
// //         //             newarr['isGeneral'] = element.isGeneral;
// //         //             newarr['desc'] = element.desc;

// //         //             return newarr;
// //         //         });
// //         //         console.log("here is the array: ");
// //         //         console.log(arr);
// //         //         resolve(arr);
// //         //     })
// //         //     .catch((err)=>{
// //         //         reject("data-sevice-unable to sync the database");
// //         //     });

// //         try{
// //             Course.findAll()
// //             console.log(Course);

// //         }catch(err){
// //             nextTick(err);
// //         }

// //     });
// // };

// // (async () => {
// //     let books = await fetch('some-url/api/v1/books')
// //     // Any code here will be executed after the books variable has the value.
// //  })()





// try {
//     (async ()=> {
//         await sequelize.authenticate();
//     })
//     // await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }


//   // let getData = async () =>{
//   //   try {
//   //       let course = Course.findAll();
    
//   //       console.log("here is course: ", course);
//   //     } catch (error){
//   //       console.log("errorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr!!!!!!!!!!!!!!! ", error);
//   //     }
//   // };

//   // console.log("course is: ", getData.course);

// let res = dataService.getAll();

// console.log("dataService: ", typeof(res));


// //   var myfunc = PTest();
// // myfunc.then(function () {
// //      console.log("Promise Resolved");
// // }).catch(function () {
// //      console.log("Promise Rejected");
// // });

// // var myfunc = PTest();
// // myfunc.then(function () {
// //      console.log("Promise Resolved");
// // });
// // // See the Difference here
// // myfunc.catch(function () {
// //      console.log("Promise Rejected");
// // });

//////////////////// LINES 1 to 157 COMMENTED OUT ////////////////////////

const port = process.env.PORT || 8080;
//const port = process.env.PORT || 5668;


const express = require("express")
const app = express();
const dataService = require('./data-service.js');
const bodyParser = require('body-parser');

app.set('view engine', 'jade');
app.set('views', './sub/jade');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('./sub'));

/*  //////////// THIS ALL WORKS /////
const cb0 = function (req, res, next) {
    console.log('CB0')
    next()
  }
  
  const cb1 = function (req, res, next) {
    console.log('CB1')
    res.send('Hello from B!')
    next()
  }
  
  const cb2 = function (req, res) {
    res.send('Hello from C!')
  }
  
  app.get('/', [cb0, cb1, cb2], (req, res) => {
    res.send('hellow WOLRD!');
  })

  app.get('/filter', (req,res) => {
    res.send('filter pg');
  })

*/

const { Client } = require("pg")
const dotenv = require("dotenv")
dotenv.config()

//////////////////// USE SEQUELIZE INSTEAD /////////////////////////
// const connectDb = async () => {
//     try {
//         const client = new Client({
//             user: 'seneca_student_app_user',
//             host: 'dpg-chls5kfdvk4sq15129sg-a.oregon-postgres.render.com',
//             database: 'seneca_student_app',
//             password: 'Q9GEG57XBxHD26nEpWF5yAAdN9puvWAR',
//             port: 5432,
//             ssl: true
//         })
//         await client.connect()
//         const res = await client.query('SELECT * FROM public."Courses"')
//         console.log(res)
//         await client.end()
//     } catch (error) {

//         console.log(error)
//     }
// }

// connectDb()

const Sequelize = require ('sequelize');
const clientSessions = require('client-sessions');

// Setup client-sessions
app.use(clientSessions({
    cookieName: "session", // this is the object name that will be added to 'req'
    secret: "search_project_sgme2018", // this should be a long un-guessable string.
    duration: 2 * 60 * 1000, // duration of the session in milliseconds (2 minutes)
    activeDuration: 1000 * 60 // the session will be extended by this many ms each request (1 minute)
}));

app.use((req, res, next) => {
    res.locals.session = req.session;
    next();
});

app.use((req, res, next) => {
    let route = req.baseUrl + req.path;
    app.locals.activeRoute = (route == "/") ? "/" : route.replace(/\/$/, "");
    next();
});

app.get('/main', (req, res) => {
    // dataService.getAll().then((data) => {
    //     res.render('filter', {data : data});
    // }).catch((err) => {
    //     console.log(err)
    // });

    dataService.getAll().then((data) => {
        res.render('filter', {data : data});
    }).catch((err) => {
        console.log(err)
    });

});

// app.post('/filter', (req, res) => {
//     var filteredArr = 
//     [
//         {
//             code : [],
//             name : [],
//             semester : [],
//             prerequisite : [],
//             required : [],
//             recommendedProfessor : [],
//             isGeneral : [],
//             desc : []
//         }
//     ];

//     filterjs.filterfunction(req.body).then((data) => {
//         var filteredSemester = data.semester;
//         var filteredIsgeneral = data.isgeneral;
//         var count = 0;

//         if(filteredSemester[0] == null && filteredIsgeneral[0] == null){
//             res.redirect('/main');
//         }

//         if(filteredSemester[0] != null){
//             for(let i=0; i<arr.length; i++){
//                 for(let j=0; j<filteredSemester.length; j++){
//                     if(filteredSemester[j] == arr[i].semester){
//                         filteredArr[count] = arr[i]; 
//                         count++;
//                     }
//                 }
//             }
//             res.render('filter', {data : filteredArr});
//         }

//         if(filteredSemester[0] == null && filteredIsgeneral[0] != null){
//             for(let i=0; i<arr.length; i++){
//                 if(filteredIsgeneral == String(arr[i].isGeneral)){
//                     filteredArr[count] = arr[i];
//                     count++;
//                 }
//             }
//             res.render('filter', {data : filteredArr});
//         }
//     }).catch((err) => {
//         console.log(err);
//     });
// })

app.get('/filter/code/:code', (req, res) => {
    var code = req.params.code;

    for(let i=0; i<arr.length; i++){
        if(code == arr[i].code){
            res.render('result', {code : arr[i].code, name : arr[i].name, semester : arr[i].semester, prerequisite : arr[i].prerequisite,
            required : arr[i].required, recommendedProfessor : arr[i].recommendedProfessor, isGeneral : arr[i].isGeneral, desc : arr[i].desc});
        }
    }
})

app.get('/', (req, res) => {
    res.redirect('/main');
});

app.get('*', (req, res) => {
    res.status(404).send("Page Not Found");
})

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

// const authenticate = async () => {
//   try{
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');

//     } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// }

// authenticate();

// //Define Course Model/Table
// const Course = sequelize.define('Course', { 
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
//     desc: Sequelize.TEXT},
//     {
//         createdAt: false, // disable createdAt
//         updatedAt: false // disable updatedAt
//     }
// );

// const getAll = async () => {
//   try{
//     console.log("0000000000000000000000000000000");
//     const courses = await Course.findAll();
//     console.log("1111111111111111111111111111111");
//     console.log (courses.every(course => course instanceof Course));
//     console.log("All courses:", JSON.stringify(courses, null, 2));
//   } catch(error){
//     console.log("Error: ", error);
//   }
// }

// getAll();

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})