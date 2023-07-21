import { people01, people02, people03, facebook, instagram, linkedin ,  send, shield, star , youtube } from "../assets/pics"; 
import {ACTIA , ADACTIM , ATB , BEE ,CAREFFOUR , CERT , CNI , ESPRIT , FUBA , GEANT , OOREDOO , TOPNET , TT , WEVIOO , MIN , ATTIJARI } from "../assets/CLIENTS" ;   
import { CCC1 , CLP2 , IT , LEARNING , Pearson, VATC , VMAEC  } from "../assets/Partenaires"; 
// NAVBAR SECTION
export const navLinks = [
  {
    id: "Clevory Training",
    title: "Clevory Training",
    link:"tree", 
  },
  {
    id: "Nos Formations",
    title: "Nos Formations",
    link:"NF",
  },
  {
    id: "Nos solutions",
    title: "Nos solutions",
    link:"NFU",
  },
  {
    id: "Calendrier",
    title: "Calendrier",
    link:"",
  },
  {
    id: "Ressources",
    title: "Ressources",
    link:"",
  }, 
  {
    id: "Contact",
    title: "Contact",
    link : "Contact" , 
  }, 
  {
    id: "Login",
    title: "Login",
    link : "Auth" , 
  },
];
// FEATURES SECTION 
export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Nos Formations",
    content:
      "Découvrez nos offres de formations IT, Telco, Gestion de Projet et ITSM",
    link:"/NF" , 
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Accompagnement",
    content:
      "Au-delà de la formation, nou proposons à nos client du support sur mesure.",
      link:"/ACC" , 
  },
  {
    id: "feature-3",
    icon: send, 
    title: "Location de salles",
    content:
      "Location des salles de formation et réunion avec toutes les commoditées.",
      link:"/LS" , 
  },
]; 
// TESTIMONIALS SECTION 
// export const feedback = [
//   {
//     id: "feedback-1",
//     content:
//       "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
//     name: "Herman Jensen",
//     title: "Founder & Leader",
//     img: people01,
//   },
//   {
//     id: "feedback-2",
//     content:
//       "Money makes your life easier. If you're lucky to have it, you're lucky.",
//     name: "Steve Mark",
//     title: "Founder & Leader",
//     img: people02,
//   },
//   {
//     id: "feedback-3",
//     content:
//       "It is usually people in the money business, finance, and international trade that are really rich.",
//     name: "Kenn Gallagher",
//     title: "Founder & Leader",
//     img: people03,
//   },
// ];
// STATS 
export const stats = [
  {
    id: "stats-1",
    title: "STAGIAIRES PAR AN",
    value: "1000+",
  },
  {
    id: "stats-2",
    title: "CONTINENTS COUVERTS",
    value: "2",
  },
  {
    id: "stats-3",
    title: "FORMATEURS CERTIFIÉS",
    value: "50+",
  },
  {
    id: "stats-4",
    title: "COURS CERTIFANTS",
    value: "200+",
  }, 
];

// SOCIAL MEDIA LINKS 
export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/clevorytraining/?hl=fr",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/ClevoryTraining/?locale=fr_FR",
  },
  {
    id: "social-media-3",
    icon: youtube,
    link: "https://www.youtube.com/@clevory",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/company/clevory-training/?originalSubdomain=fr",
  },
];
// Clients Section 
export const clients = [
  {
    id: "client-1",
    logo: TT,
  },
  {
    id: "client-2",
    logo: OOREDOO,
  },
  {
    id: "client-3",
    logo: BEE,
  },
  {
    id: "client-4",
    logo: ACTIA,
  },
  {
    id: "client-5",
    logo: ADACTIM,
  },
  {
    id: "client-6",
    logo: ATB,
  },
  {
    id: "client-7",
    logo: ATTIJARI,
  },
  {
    id: "client-8",
    logo: CAREFFOUR,
  },
  {
    id: "client-9",
    logo: CERT,
  },
  {
    id: "client-10",
    logo: CNI,
  },
  {
    id: "client-11",
    logo: ESPRIT,
  },
  {
    id: "client-12",
    logo: FUBA,
  },
  {
    id: "client-13",
    logo: GEANT,
  },
  {
    id: "client-14",
    logo: TOPNET,
  },
  {
    id: "client-15",
    logo: TT,
  },
  {
    id: "client-16",
    logo: WEVIOO,
  },
  {
    id: "client-17",
    logo: MIN,
  },
];
// Partenaires Section 
export const parts  = [
  {
    id: "partenaire-1",
    logo: CCC1,   
  },
  {
    id: "partenaire-2",
    logo: CLP2,   
  },
  {
    id: "partenaire-3",
    logo: IT,   
  },
  {
    id: "partenaire-4",
    logo: LEARNING,   
  },
  {
    id: "partenaire-5",
    logo: Pearson ,   
  },
  {
    id: "partenaire-6",
    logo: VATC,   
  },
  {
    id: "partenaire-7",
    logo: VMAEC,   
  },
]; 
// resonsive dictionnary 
export const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4  
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 2,
    slidesToSlide: 2
  } 
};
// Purpose Page Dictionary 
export const ACCC = [
{
id : "ACCC-1" , 
title : "Bienvenue au Centre de Formation Clevory Training !" , 
content : "Notre centre de formation est votre porte d'entrée vers un avenir prometteur. Que vous soyez étudiant cherchant à acquérir de nouvelles compétences, professionnel désirant perfectionner votre savoir-faire, ou même simplement passionné cherchant à élargir vos horizons, nous avons le programme qui vous convient.\n\nChez Clevory Training, l'apprentissage va bien au-delà des cours et des leçons. Nous croyons en une approche pratique et interactive, mettant l'accent sur la résolution de problèmes réels et la mise en pratique des connaissances acquises. Nos formateurs expérimentés sont dévoués à vous accompagner à chaque étape de votre parcours d'apprentissage, vous aidant à atteindre vos objectifs professionnels et personnels.\n\nNous proposons une variété de formations, allant des technologies émergentes aux compétences en affaires, en passant par les arts et la créativité. Nos programmes sont conçus pour s'adapter à vos besoins uniques et à votre emploi du temps chargé. Vous pouvez choisir entre des formations intensives sur site." , 
} , 
 ]; 
 export const LSS = [
  {
  id : "LSS-1" , 
  title : "Bienvenue au Centre de Formation Clevory Training !" , 
  content : "Notre entreprise propose des salles de location polyvalentes pour tous types d'événements. Que ce soit pour des réunions d'affaires, des séminaires, des formations, des fêtes, ou tout autre événement, nos salles sont équipées pour répondre à vos besoins. Nous disposons d'une gamme de salles adaptées à différentes capacités, allant des petites salles de réunion aux grandes salles de conférence.\n\nNos installations modernes sont conçues pour offrir confort et commodité à vos invités. Chaque salle est équipée d'un système audiovisuel performant, de mobilier confortable, et d'une connexion Internet haut débit. De plus, notre équipe professionnelle est disponible pour vous aider dans l'organisation de votre événement, de la mise en place technique à la restauration.\n\nQue vous soyez une entreprise, une association, ou un particulier, nous avons la salle idéale pour rendre votre événement mémorable. Contactez-nous dès aujourd'hui pour connaître nos disponibilités et réserver la salle parfaite pour votre prochain événement." , 
  } , 
   ];    
export const Card =  [
  { 
    id : "0" , 
    img : "" , 
    title : "bkakakakaa" , 
    content : "b;alalala" , 
    btn : "blalalalaal" ,  
  } , 
  { 
    id : "1" , 
    img : "" , 
    title : "bkakakakaa" , 
    content : "b;alalala" , 
    btn : "blalalalaal" ,  
  } , 
  { 
    id : "2" , 
    img : "" , 
    title : "bkakakakaa" , 
    content : "b;alalala" , 
    btn : "blalalalaal" ,  
  } ,   
] ; 
