const users = [
  {
    name: "Alex",
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 45,
    isLoggedIn: false,
    points: 30,
  },
  {
    name: "Job",
    email: "job@job.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  {
    name: "Brook",
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 39,
    isLoggedIn: true,
    points: 50,
  },
  {
    name: "Daniel",
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 25,
    isLoggedIn: false,
    points: 40,
  },
  {
    name: "John",
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  {
    name: "Thomas",
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 18,
    isLoggedIn: false,
    points: 40,
  },
  {
    name: " Paul",
    email: "paul@paul.com",
    skills: ["HTML", "CSS", "JavaScript", "MongoDB", "Express", "React"],
    age: 25,
    isLoggedIn: false,
    points: 40,
  },
];

function member(user) {
  return (
    "name: " +
    "\t" +
    user.name +
    "\n" +
    "email: " +
    "\t" +
    user.email +
    "\n" +
    "skills: " +
    "\t" +
    user.skills +
    "\n" +
    "age: " +
    "\t" +
    user.age +
    "\n" +
    "isLoggedIn: " +
    "\t" +
    user.isLoggedIn +
    "\n" +
    "points: " +
    "\t" +
    user.points
  );
  ``;
}

function mostSkillUser(user) {
  for (let i = 0; i < user.length; i++) {
    let mostSkiller = "";
    if (user[i].skills.length > mostSkiller.length) {
      mostSkiller = user[i].na;
    }
  }
  return "Most skill user name : ";
}

console.log(mostSkillUser(users));
