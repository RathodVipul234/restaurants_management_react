import React, { Component } from 'react';
import {Button,Form } from 'react-bootstrap'
import API from '../RestApi'
import {withRouter} from './withRouter'

class RestaurantCreate extends Component {
  constructor()
  {
    super();
    this.state = {
        name:null,
        email:null,
        address:null,
        rating: null,
    }
  }

  create()
  {
    if(!this.state.name){
      alert("Name is required")
      return false
    }
    else if(!this.state.rating){
      alert("Rating field is required")
      return false
    }
    else if(!this.state.email){
      alert("Email is required")
      return false
    }
    else if(!this.state.address){
      alert("Address field is required")
      return false
    }
    
    else{
      const RestaurantCreateApi = API['create']
      const Data = {
        method:'Post',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(this.state)
      }

      fetch(RestaurantCreateApi, Data).then((response)=>{
        return response.json()
      }).then((result)=>{
        alert("Restaurant has been added successfully")
        console.log(this.props)
        this.props.navigate('/list')
      })
    }

  }
  render() {
    return(
        <div className='create-restaurant-div'>
          <h3 className='text-center'>Add Restaurant</h3>
          <Form.Control className="w-50" onChange={(e)=>this.setState({name:e.target.value})} type="text" placeholder="Name" />
          <Form.Control className="w-50" onChange={(e)=>this.setState({rating:e.target.value})} type="number" placeholder="Rating" />
          <Form.Control className="w-50" onChange={(e)=>this.setState({email:e.target.value})} type="email" placeholder="Email" />
          <Form.Control className="w-50" onChange={(e)=>this.setState({address:e.target.value})} type="text" placeholder="Address" />
          <Button variant="success" onClick={()=>{this.create()}} className="mt-10" mt={10}>Add</Button>
        </div>
  
    )
  }
}

export default withRouter(RestaurantCreate);