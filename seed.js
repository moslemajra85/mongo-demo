require("dotenv").config();
const mongoose = require("mongoose");
const Course = require("./models/course");
const Instructor = require("./models/instructor");
const connectDB = require("./config/db");

const seedInstructors = [
  { name: "Moslem Ajra", email: "moslem@example.com", phone: "1234567890" },
  { name: "Ali Reza", email: "ali@example.com", phone: "0987654321" },
  { name: "Sara Mohammadi", email: "sara@example.com", phone: "1112223333" },
  { name: "Reza Kiani", email: "reza@example.com", phone: "4445556666" },
  {
    name: "Fatemeh Ghasemi",
    email: "fatemeh@example.com",
    phone: "7778889999",
  },
];

async function insertData() {
  await connectDB();
  await Course.deleteMany();
  await Instructor.deleteMany();

  const insertedInstructors = await Instructor.insertMany(seedInstructors);

  const seedCourses = [
    {
      title: "Node.js Basics",
      instructor: insertedInstructors[0]._id,
      price: 30,
      isPublished: true,
    },
    {
      title: "Express.js Advanced",
      instructor: insertedInstructors[1]._id,
      price: 40,
      isPublished: false,
    },
    {
      title: "MongoDB Essentials",
      instructor: insertedInstructors[2]._id,
      price: 35,
      isPublished: true,
    },
    {
      title: "React Fundamentals",
      instructor: insertedInstructors[3]._id,
      price: 50,
      isPublished: true,
    },
    {
      title: "Vue.js for Beginners",
      instructor: insertedInstructors[4]._id,
      price: 45,
      isPublished: false,
    },
    {
      title: "JavaScript Deep Dive",
      instructor: insertedInstructors[0]._id,
      price: 60,
      isPublished: true,
    },
    {
      title: "TypeScript Mastery",
      instructor: insertedInstructors[1]._id,
      price: 55,
      isPublished: true,
    },
    {
      title: "REST API Design",
      instructor: insertedInstructors[2]._id,
      price: 38,
      isPublished: false,
    },
    {
      title: "GraphQL in Practice",
      instructor: insertedInstructors[3]._id,
      price: 42,
      isPublished: true,
    },
    {
      title: "Testing with Jest",
      instructor: insertedInstructors[4]._id,
      price: 33,
      isPublished: true,
    },
  ];

  await Course.insertMany(seedCourses);
  console.log("Seed data inserted!".green);
  mongoose.connection.close();
}

async function destroyData() {
  await connectDB();
  await Course.deleteMany();
  await Instructor.deleteMany();
  console.log("Seed data destroyed!".red.bold);
  mongoose.connection.close();
}

if (process.argv[2] === "insert") {
  insertData();
} else if (process.argv[2] === "destroy") {
  destroyData();
} else {
  console.log("Usage: node seed.js [insert|destroy]".white.bgBlue);
}
