import { Article, ArticleStore } from '../article';

const store = new ArticleStore();

// describe('Book Model', () => {
//   describe('METHODS CHECK CRUD:', () => {
//     it('should have an index method', () => {
//       expect(store.index).toBeDefined();
//     });

//     it('should have a show method', () => {
//       expect(store.show).toBeDefined();
//     });

//     it('should have a create method', () => {
//       expect(store.create).toBeDefined();
//     });

//     it('should have a update method', () => {
//       expect(store.index).toBeDefined();
//     });

//     it('should have a delete method', () => {
//       expect(store.delete).toBeDefined();
//     });
//   });
//   describe('CREATE CHECK:', () => {
//     it('create method should add a book', async () => {
//       const result = await store.create({
//         id: null,
//         title: 'testing',
//         pages: 90,
//         author: 'hesham amoudi',
//         type_book: 'educational',
//         summary: 'web developer'
//       });
//       expect(result).toEqual({
//         id: 1,
//         title: 'testing',
//         pages: 90,
//         author: 'hesham amoudi',
//         type_book: 'educational',
//         summary: 'web developer'
//       });
//     });
//   });
//   describe('returns first book :', () => {
//     it('index method should return a list of books', async () => {
//       const result = await store.index();

//       expect(result).toEqual(result);
//     });
//   });
//   describe('SEARCH FOR A BOOK:', () => {
//     it('show method should return the correct book', async () => {
//       const result = await store.show(1);
//       expect(result).toEqual({
//         id: 1,
//         title: 'testing',
//         pages: 90,
//         author: 'hesham amoudi',
//         type_book: 'educational',
//         summary: 'web developer'
//       });
//     });
//   });
//   describe('DELETE A BOOK :', () => {
//     it('delete method should remove the book', async () => {
//       store.delete(1);
//       const result = await store.index();

//       expect(result).toBeTruthy();
//     });
//   });
// });
