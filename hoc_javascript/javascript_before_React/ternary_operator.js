const age = 20;

if (age > 18) {
    console.log("bạn đã đủ tuổi xem nội dung này")
} else {
    console.log("ban chưa đủ tuổi xem nội dung này")
}


// ta su dung toan tu 3 ngoi
 console.log(age >= 18 ?"ban du tuoi" : "ban chua du tuoi")


 function App() {
    const isLoggedIn = true;

    return (
        <div> isLoggedIn 
            ?<button>Dang xuat</button>
            : <button>Dang nhap</button> </div>
    );
 }

