import React from "react";
const Mylist = [
  {
    name: "  About us ",
    link: "#",
    isActive: true
  },
  {
    name: "  Career  ",
    link: "#",
    isActive: false
  },
  {
    name: "  Contact  ",
    link: "#",
    isActive: false,
    children: [
      {
        name: "Marketing&PR",
        link: "#",
        isActive: false
      },
      {
        name: "Customer SuccesS &Sales",
        link: "#",
        isActive: false
      },
      {
        name: " IT,Product,design &UIX",
        link: "#",
        isActive: false
      },
      {
        name: " Finance &Administration",
        link: "#",
        isActive: false
      },
      {
        name: " HR&More",
        link: "#",
        isActive: false
      }
    ]
  }
];
export default Mylist;
