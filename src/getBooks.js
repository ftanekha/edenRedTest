import testData from './testData.json';

const getBooks = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            const booksMap = testData['books'];

            const books = [];
            for (let key in booksMap) {
                books.push(booksMap[key]);
            };

            resolve(books)

        }, 3000)
    })
}

export default getBooks;