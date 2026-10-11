 use("vsec_new")
 
 db.createCollection("students")

db.students.insertOne({
    name: "Preeti",
    age: 19,
    course: "IT"
})

db.students.insertMany([
    { name: "Rahul", age: 21, course: "CS" },
    { name: "Ram", age: 23, course: "IT" },
    { name: "Sneha", age: 20, course: "IT" }
])