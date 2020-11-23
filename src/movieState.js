// Import Images
import cliff from "./img/cliff.jpg";
import cliff2 from "./img/cliff2.jpg";
import montserrat from "./img/montserrat.jpg";
import montserrat2 from "./img/montserrat2.jpg";
import wood from "./img/wood.jpg";
import road from "./img/road.jpg";

export const MovieState = () => {
  return [
    {
      title: "The Cliff",
      mainImg: cliff,
      secondaryImg: cliff2,
      url: "/work/the-cliff",
      awards: [
        {
          title: "The Masterpiece",
          description:
            '"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, saepe."',
        },
        {
          title: "Awesome view",
          description:
            '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, possimus."',
        },
        {
          title: "Fresh air",
          description:
            '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, debitis!"',
        },
      ],
    },
    {
      title: "Montserrat",
      mainImg: montserrat,
      secondaryImg: montserrat2,
      url: "/work/montserrat",
      awards: [
        {
          title: "The Masterpiece",
          description:
            '"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, saepe."',
        },
        {
          title: "Awesome view",
          description:
            '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, possimus."',
        },
        {
          title: "Fresh air",
          description:
            '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, debitis!"',
        },
      ],
    },
    {
      title: "The Wood",
      mainImg: wood,
      secondaryImg: road,
      url: "/work/the-wood",
      awards: [
        {
          title: "The Masterpiece",
          description:
            '"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, saepe."',
        },
        {
          title: "Awesome view",
          description:
            '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, possimus."',
        },
        {
          title: "Fresh air",
          description:
            '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, debitis!"',
        },
      ],
    },
  ];
};
