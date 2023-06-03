class Book {
    title = 'Text';
    author = 'String';
    pages = 101;
    constructor() {

    }
    displayInfo = () => {
        console.log(`This title: ${this.title} \nThis author: ${this.author} \npages: ${this.pages}`);
    }

}