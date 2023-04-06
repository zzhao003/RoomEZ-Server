/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("user").del();
  await knex("user").insert([
    {
      id: "1",
      //'2922c286-16cd-4d43-ab98-c79f698aeab0'
      img_url:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
      first_name: "James",
      last_name: "Chen",
      age: "27",
      gender: "Male",
      profession: "writer",
      budget: "1200",
      area: "soho",
      pet: "false",
      movein_date: "date string",
      about:
        "Very easy going, clean, and professions in an office 5 days a week! I profession in fashion so I’m always down to hit up thrift stores, also a big foodie so always trying new restaurants in the city! I am also very independent and love alone time as well.",
    },
    {
      id: "2",
      //'2922c286-16cd-4d43-ab98-c79f698aeab0'
      img_url:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
      first_name: "Lin",
      last_name: "Lin",
      age: "33",
      gender: "Female",
      profession: "Flight Attandent",
      budget: "2000",
      area: "soho",
      pet: "true",
      movein_date: "date string",
      about: "I love food, my cat is sushi",
    },
    {
      id: "3",
      //'2922c286-16cd-4d43-ab98-c79f698aeab0'
      img_url:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
      first_name: "Jessica",
      last_name: "Arrais",
      age: "34",
      gender: "Female",
      profession: "Architect",
      budget: "1500",
      area: "soho",
      pet: "false",
      movein_date: "date string",
      about: "I can drink a lot.",
    },
  ]);
};
