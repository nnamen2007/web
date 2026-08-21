import React from "react";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component {

    state = {
        firstName : "" ,
        lastName : "" , 
        arrJob :  [
            {jobId : "job01" , jobName : "dev" , salary : "500$"} , 
            {jobId : "job02" , jobName : "test" , salary : "500$"} , 
            {jobId : "job03" , jobName : "devops" , salary : "500$"}
        ]
    }


    handleFirstName = (event) => {
        this.setState({
            firstName : event.target.value
        })
    }


    handleLastName = (event) => {
        this.setState( {
            lastName : event.target.value
        })
    }

    handleButtonClick = () => {
        console.log("=>>>>> check data input : " , this.state)
    }
    render() {
        console.log("render : " ,this.state)
        return (
            <>
            <div>
                hello html form
            </div>

            <label htmlFor="">first name : </label> <br />
            <input type="text" value = {this.state.firstName} onChange={(event) => this.handleFirstName(event)} /> <br />
            <label htmlFor="">last name : </label> <br />
            <input type="text" value={this.state.lastName} onChange={(event) => this.handleLastName(event)} /> <br />

            <input type="button" value="submit" onClick={() => this.handleButtonClick()} />


            <ChildComponent name = {"child one"} age = {25}
            
            arrJob = {this.state.arrJob}
            />
            
            
            </>
        )
    }

}

export default MyComponent;