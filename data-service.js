const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DATABASE_URL);

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