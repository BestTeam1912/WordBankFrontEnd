import { Community } from './community/classes/community.class';

// id:number;
// title:string;
// description:string;
// thread:Thread[];
// dataCreated:Date;

export const COMMUNITIES: Community[] = [
  { id: 1, title: 'funny', description: "About relpy/funny", thread: [], dataCreated:  new Date("2019-01-16") },
  { id: 2, title: 'AskRelpy', description: "About relpy/AskRelpy", thread: [], dataCreated:  new Date("2019-02-16") },
  { id: 3, title: 'todayilearned', description: "About relpy/todayilearned", thread: [], dataCreated:  new Date("2019-03-16") },
  { id: 4, title: 'worldnews', description: "About relpy/worldnews", thread: [], dataCreated:  new Date("2019-04-16") },
  { id: 5, title: 'Science', description: "About relpy/Science", thread: [], dataCreated:  new Date("2019-05-16") },
  { id: 6, title: 'gaming', description: "About relpy/gaming", thread: [], dataCreated:  new Date("2019-06-16") },
  { id: 7, title: 'videos', description: "About relpy/videos", thread: [], dataCreated:  new Date("2019-07-16") },
  { id: 8, title: 'books', description: "About relpy/books", thread: [], dataCreated:  new Date("2019-08-16") },
  { id: 9, title: 'movies', description: "About relpy/movies", thread: [], dataCreated:  new Date("2019-09-16") },
  { id: 10, title: 'nature', description: "About relpy/nature", thread: [], dataCreated:  new Date("2019-10-16") }
];