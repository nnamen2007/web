import React from "react";
// cu phap co ban cua 1 class component

/* 
sử dụng cặp ngoặc nhọn {} để compiler hiểu đó là code javascript được nhúng vào html

JSX => return block (va chi 1 khoi div thoi)
=> vi vay khi ta muon day ra nhieu hon 1 khoi div ta can boc hoai hoac su dung React.Fragment

*/
class MyComponent extends React.Component {

    state = {
        name : "" , 
        facebook : "PeterAnh"
    }

    handleClickButton = () => { 
        console.log("click the button")
        alert('click me')
    }

    handleOnChangeName = (event) => {
        this.setState({
            name : event.target.value
        })
    }

    render() {

       

        return (
            
                <React.Fragment>
                    <div className="first">
                        <input type="text" onChange={(event) => this.handleOnChangeName(event)} />
                        
                        hello my component , my name is {this.state.name} </div>
                    <div className="second">
                        My facebook name is {this.state.facebook}
                    </div>

                    <div className="third">
                        <button onClick= {() =>this.handleClickButton()}> click me</button>
                    </div>
                </React.Fragment>
            
        )
    }
}

export default MyComponent;