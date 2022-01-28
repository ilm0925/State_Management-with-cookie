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
  data.forEach((info) => {
    if (id == info.id && pwd == info.password) {
      return info.name;
    }
  });
  return false;
}

export { Auth };
