"use strict";

const Sequelize = require("sequelize");
const db = require("../db");

const Student = db.define("student", {
  firstName: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  lastName: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  email: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      isEmail: true
    }
  }
});

Student.beforeCreate(student => { // Takes an instance
  let firstName = student.firstName;
  let lastName = student.lastName; // Grabs the data

  firstName =
    firstName.slice(0, 1).toUpperCase() + firstName.slice(1).toLowerCase(); // Changes the data

  lastName =
    lastName.slice(0, 1).toUpperCase() + lastName.slice(1).toLowerCase();

  student.firstName = firstName;
  student.lastName = lastName; // Reassigns the data
});

module.exports = Student;
