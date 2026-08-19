// import va export

const axios = require('axios'); // import thu vien co ten la axios

// 2 kieu export la default export va name export

// 1 default export
export default function Page()  {
    return <div>explore</div>;
}
// dung khi file can export dung 1 component

// khi import ta co cu phap : import Page from "path";

// 2 name export 

const func = () => {
    return <div>explore</div>
}

export {func};
// dung khi file can import nhieu bien object, ham hoac object
// khi import ta co cu phap import {func} from "path";
