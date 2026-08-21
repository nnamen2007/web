import React from "react";


class ChildComponent extends React.Component {

    render() {
        console.log(">>>> check props" , this.props)

        // let age = this.props.age;
        // let name = this.props.name;


       let {name , age , arrJob} = this.props;
       


        return ( 
            <div>
                {
                    arrJob.map( (item , index) => {
                        
                        return (
                            <>
                            <div key = {item.jobId}>{item.jobName} - {item.salary}</div>

                            </>
                            
                        )
                    })
                }
            </div>
        )
    }
}

export default ChildComponent