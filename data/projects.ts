export type Project = {
  id: number;
  title: string;
  description: string;
  href?: string;
  image?: string;
  links?: { title: string; href: string; description?: string }[];
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Jahat",
    description: "Independently designed, built, and launched a shared real estate management platform for multiple agencies, handling product design, frontend, backend, and DevOps.",
    href: "https://jahat-demo.vercel.app/",
    image: "/images/projects/jahat.jpg",
    links: [
      { title: "Kalanshahr", href: "https://kalanshahr.com/" },
      { title: "Royal Melk", href: "https://royalmelk.com/" },
    ],
  },
  {
    id: 2,
    title: "Azarmelk",
    description: "Built a real estate management platform for managing property listings, scheduling appointments, and tracking client visits.",
    href: "https://azarmelk.com/",
    image: "/images/projects/azarmelk.png",
  },
  {
    id: 3,
    title: "Multi-site CMS",
    description: "Developed a multi-site CMS that gives administrators a single dashboard to manage content across seven websites.",
  },
  {
    id: 4,
    title: "Selected Client Projects — Ravinow",
    description: "Delivered through Pardakht Plus for Ravinow, a public-sector cultural institution and client of Pardakht Plus.",
    href: "https://ravinow.ir/",
    image: "/images/projects/ravinow.png",
    links: [
      { title: "Pouyesh Saz", description: "Online form and survey builder.", href: "https://ravei.ir/" },
      { title: "Meydan Yar", description: "Platform for in-person competitions.", href: "https://meydan-yar.ir/" },
      { title: "Ravi Book", description: "Online book archive.", href: "https://ravibook.ir/" },
      { title: "Zang-e Khabar", description: "Student journalism website.", href: "https://ravimiz.ir/" },
    ],
  },
  {
    id: 5,
    title: "Wiki Sefaresh",
    description: "Built a consumer review platform where shoppers can share their online shopping experiences and read reviews before purchasing.",
    href: "https://www.wiki-sefaresh.ir/",
    image: "/images/projects/wiki-sefaresh.png",
  },
  {
    id: 6,
    title: "Arya Shop",
    description: "Developed an e-commerce storefront for browsing and purchasing industrial tools and equipment.",
    href: "https://arya-company.com/",
    image: "/images/projects/arya-shop.png",
  },
];
