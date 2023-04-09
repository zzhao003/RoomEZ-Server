/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("user").del();
  await knex("user").insert([
    {
      id: "2922c286-16cd-4d43-ab98-c79f698aeab0",
      email: "111",
      password: "111",
      img_url:
        "https://media.licdn.com/dms/image/C4E03AQG8HFQDXICFtw/profile-displayphoto-shrink_800_800/0/1647957770214?e=1686182400&v=beta&t=osp-qlkufYkg-UHoBEdvCg4i3mO7LeqX8rcCkVFrghM",
      first_name: "Armance",
      last_name: "Mousset",
      age: "23",
      gender: "Female",
      profession: "UX Designer",
      budget: "1200",
      area: "soho",
      pet: "false",
      movein_date: "date string",
      about:
        "Im tipsy 5 days a week! I’m always down to hit up thrift stores, also a big foodie so always trying new restaurants in the city! I am also very independent and love alone time as well.",
    },
    {
      id: "5bf7bd6c-2b16-4129-bddc-9d37ff8539e9",
      email: "222",
      password: "222",
      img_url:
        "https://media.licdn.com/dms/image/D5603AQGUBQ5EbtfVww/profile-displayphoto-shrink_800_800/0/1675040107833?e=1686182400&v=beta&t=fkywWLCvR0_GqFK729GQ_16yTQNgDT1zXP7S3nMNuHw",
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
      id: "90ac3319-70d1-4a51-b91d-ba6c2464408c",
      email: "333",
      password: "333",
      img_url:
        "https://media.licdn.com/dms/image/D4D03AQHVXa1mmQLA9w/profile-displayphoto-shrink_800_800/0/1675024078181?e=1686182400&v=beta&t=oEXOMX5CSOo4zQp4AqAboGT-NMnC-_ULGfSkUa4njPY",
      first_name: "Jessica",
      last_name: "Arrais",
      age: "34",
      gender: "Female",
      profession: "Architect",
      budget: "1500",
      area: "soho",
      pet: "false",
      movein_date: "date string",
      about: "I can drink a lottttt",
    },

    {
      id: "a39f46c5-16d8-4a5c-9fc1-2f7b4fc95b84",
      email: "john.doe@example.com",
      password: "password123",
      img_url: "https://randomuser.me/api/portraits/men/1.jpg",
      first_name: "John",
      last_name: "Doe",
      age: "28",
      gender: "Male",
      profession: "Software Engineer",
      budget: "2000",
      area: "Brooklyn",
      pet: "false",
      movein_date: "2023-05-01",
      about: "I'm a tech enthusiast who loves to code and build cool stuff.",
    },
    {
      id: "b715dfe7-5fc5-40f7-a8a9-c9a2282d03c6",
      email: "jane.doe@example.com",
      password: "letmein",
      img_url: "https://randomuser.me/api/portraits/women/2.jpg",
      first_name: "Jane",
      last_name: "Doe",
      age: "26",
      gender: "Female",
      profession: "Marketing Manager",
      budget: "2500",
      area: "Chelsea",
      pet: "false",
      movein_date: "2023-06-01",
      about:
        "I love coming up with creative campaigns and connecting with people.",
    },
    {
      id: "c1d84754-fd57-498e-81b7-8c00a584d7b2",
      email: "mike.smith@example.com",
      password: "p@ssw0rd",
      img_url: "https://randomuser.me/api/portraits/men/3.jpg",
      first_name: "Mike",
      last_name: "Smith",
      age: "31",
      gender: "Male",
      profession: "Graphic Designer",
      budget: "1800",
      area: "Lower East Side",
      pet: "true",
      movein_date: "2023-07-01",
      about: "I'm passionate about creating beautiful and functional designs.",
    },
    {
      id: "d58d70e5-7a90-4a1b-a2a1-4b4d4cdad9df",
      email: "lisa.jones@example.com",
      password: "password123",
      img_url: "https://randomuser.me/api/portraits/women/4.jpg",
      first_name: "Lisa",
      last_name: "Jones",
      age: "29",
      gender: "Female",
      profession: "Teacher",
      budget: "1700",
      area: "Upper West Side",
      pet: "false",
      movein_date: "2023-08-01",
      about: "I love teaching and helping students discover their potential.",
    },
  ]);
  await knex("lovestory").del();
  await knex("lovestory").insert([
    {
      id: "1",
      user_id: "5bf7bd6c-2b16-4129-bddc-9d37ff8539e9",
      like: "90ac3319-70d1-4a51-b91d-ba6c2464408c",
    },
    {
      id: "2",
      user_id: "5bf7bd6c-2b16-4129-bddc-9d37ff8539e9",
      like: "2922c286-16cd-4d43-ab98-c79f698aeab0",
    },
    {
      id: "3",
      user_id: "5bf7bd6c-2b16-4129-bddc-9d37ff8539e9",
      like: "a39f46c5-16d8-4a5c-9fc1-2f7b4fc95b84",
    },
    {
      id: "4",
      user_id: "a39f46c5-16d8-4a5c-9fc1-2f7b4fc95b84",
      like: "90ac3319-70d1-4a51-b91d-ba6c2464408c",
    },
  ]);
};
