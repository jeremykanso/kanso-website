const TEAM_LIST = [
  {
    id: 0,
    prenom: "Jeremy",
    nom: "Coleman",
    titre: ["Chef de projet web", "intégrateur"],
    text: ["Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.", "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae."],
    imgUrl: [require("../../assets/img/jeremy.jpg"), require("../../assets/img/jeremy_f.jpg")],
    expertises: [{category:"Gestion de projet", size:"100"}, {category:"Intégration React", size:"10" }]
  },
  {
    id: 1,
    prenom: "Sylvain",
    nom: "Duchesne",
    titre: ["Ingénieur système", "développeur"],
    text: ["Nam libero tempore,  impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.", "Temporibus autem debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae."],
    imgUrl: [require("../../assets/img/sylvain.jpg"), require("../../assets/img/sylvain_f.jpg")],
    expertises: [{category:"Développeur NodeJS", size:"50"}, {category:"Intégration React", size:"0" }]
  },
  {
    id: 2,
    prenom: "Alfred",
    nom: "Gautier",
    titre: ["Directeur artistique", "graphiste"],
    text: ["Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus est, omnis dolor repellendus.", "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates."],
    imgUrl: [require("../../assets/img/alfred.jpg"), require("../../assets/img/alfred_f.jpg")],
    expertises: [{category:"Gestion de projet", size:"20"}, {category:"Intégration React", size:"0" }]
  },
  {
    id: 3,
    prenom: "Théophile",
    nom: "Batoz",
    titre: ["Ingénieur système", "développeur"],
    text: ["Nam nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.", "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae."],
    imgUrl: [require("../../assets/img/theophile.jpg"), require("../../assets/img/theophile_f.jpg")],
    expertises: [{category:"Architecte de données", size:"30"}, {category:"Intégration React", size:"80" }]
  },


]

export default TEAM_LIST
