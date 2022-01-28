const data = [
  {
    name: "cassy",
    id: "cassy032",
    password: "cas321321",
  },
  {
    name: "stark",
    id: "stark032",
    password: "stark321321",
  },
  {
    name: "steve",
    id: "steve032",
    password: "steve321321",
  },
];

function Auth(id, pwd) {
  let answer = false;
  // console.log(id, pwd);
  data.forEach((info) => {
    // console.log(id == info.id && pwd == info.password);
    if (id == info.id && pwd == info.password) {
      answer = info.name;
    }
  });
  return answer;
}

export { Auth };
