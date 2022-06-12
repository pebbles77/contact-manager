import React from "react";

class AddContact extends React.Component {
    state = {
        name:"",
        email:"",
    };
    add = (e) => { 
        e.preventDefault();
        if(this.state.name === "" && this.state.email === ""){
        alert("All fields are mandatory!")
        return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name:"", email:""});
        
        
    };

    render() {
        return(
            <div className="ui main" style={{margin:"10px", paddingTop:"70px"}}>
                <h2 className="ui  teal message">Add Contact</h2>
             <form className="ui form" onSubmit={this.add}>
                 <div className="field">
                 <label>Name</label>
                 <input type="text" name="name" placeholder="Name" value={this.state.name}
                  onChange={(e) => {this.setState({name: e.target.value})}}/>
                 </div>
                 <div className="field">
                 <label>Email</label>
                 <input type="email" name="email" placeholder="abc@gmail.com" value={this.state.email}
                  onChange={(e) => {this.setState({email: e.target.value})}}/>
                 </div>
                 <input type="submit" className="ui button green" value="Add" />
                 
             </form>
            </div>
        )
    }
}

export default AddContact;