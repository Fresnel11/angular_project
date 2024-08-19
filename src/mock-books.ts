import { Book } from '../src/app/book';
import { nanoid } from 'nanoid'

export const  BOOKS: Array<Book> = [
    {id: 1, title: "Le vent", author: "Fresnel", description:"Lorem ipsum dolor sit,....", editHome: "Laha Edition", editYear: 2004, statut: "Disponible 🟢" },
    {id: 2, title: "Clean code", author: "Robert", description:"Lorem ipsum dolor sit, ....", editHome: "Laha Edition", editYear: 2004, statut: "Disponible 🟢"},
    {id: 3, title: "Le programmeur", author: "Jean-Claude", description:"Lorem ipsum dolor sit,...", editHome: "Laha Edition", editYear: 2004, statut: "Non disponible ❌"},
    {id: 4, title: "Demon slayer", author: "Tomioka", description:"Lorem ipsum dolor sit,...", editHome: "Laha Edition", editYear: 2004, statut: "Disponible 🟢"},
    {id: 5, title: "Kimetsu no Yaiba", author: "Tandjiro", description:"Lorem ipsum dolor sit,...", editHome: "Laha Edition", editYear: 2004, statut: "Non disponible ❌"},
    {id: 6, title: "Solo Leveling", author: "Kikiyo", description:"Lorem ipsum dolor sit,...", editHome: "Edition plume", editYear: 2007, statut: "Non disponible ❌"},
  ]
