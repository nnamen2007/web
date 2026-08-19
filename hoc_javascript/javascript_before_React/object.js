// object -> doi tuong
// object destructuring;
const breed = "bengal"

const cat = {
    name : "doraemon",
    age : 4,
    breed, // key value giong het nhau
    isRussian : false
};

// const name = cat.name;
// const age = cat.age;
// const breed = cat.breed;

const {name,age, breed} = cat; // lay het cac thong tin

const cat2 = {... cat1, breed : "persian"}; // tao ra 1 object moi voi toan bo thong tin giong cat1 chi khac moi breed va khong lam thay doi cat1



