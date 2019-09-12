docker run -d -p 27017:27017 -p 28017:28017 -e AUTH=no tutum/mongod

use educ

db.users.save({username:"admin"})

show dbs
show collections

db.createCollection("alunos", {
    validator: { $jsonSchema: {
        bsonType: "object",
        required: ["nome", "email", "matricula", "nascimento", "curso"],
            properties: {
                nome: {
                    bsonType: "string",
                    description: "must be a string and is required"
                },
                email: {
                    bsonType: "string",
                    description: "must be a string and is required"

                },
                matricula: {
                    bsonType: "number",
                    description: "must be a number and is required"
                },
                nascimento: {
                   bsonType: "string",
                    description: "must be a string and is required"
                },
                curso: {
                    bsonType: "string",
                    description: "must be a string and is required"
                }
            }
        }}
})

db.alunos.insert( { nome: "Lucas", email: "lucas@lucas.com", matricula: 123,  nascimento: 16/01/1995, curso: "SPI"} )

db.alunos.find({})