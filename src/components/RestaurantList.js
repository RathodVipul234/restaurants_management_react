import React, { Component } from 'react';
import API from '../RestApi'
import {Table} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

export default class RestaurantList extends Component {
  constructor()
  {
    super();
    this.state = {
      list :  [],
    }
  }

  componentDidMount(){
    const RestaurantListApi = API['list']
    fetch(RestaurantListApi).then((response)=>{
      return response.json()
    }).then((result)=>{
      this.setState({'list':result})
    })
  }

  delete(item){
    let itemId = item['item']['id']
    const RestaurantDeleteApi = API['delete']+`/${itemId}`
    fetch(RestaurantDeleteApi, {method: 'DELETE',}).then((response) => {
      return response.json()
    }).then((result) => {
      alert("Restaurant has been deleted successfully")
      this.componentDidMount()
    })

  }
  render() {
    const deleteButtonStyle = {
      background: "none",
      margin: "0px auto",
      padding: "0px",
      border: "0px",
    }
    return (
    <div>
      <h1>List Of Restaurant</h1>
      <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Rating</th>
          <th>Email</th>
          <th>Address</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      {
        this.state.list.map((item,i) => 
        <tr key={i} className="restaurant-list-wrapper">
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.rating}</td>
          <td>{item.email}</td>
          <td>{item.address}</td>
          <td><Link to={"/update/"+item.id} className='navbar-url'><FontAwesomeIcon icon={faEdit} color="pink" /></Link>
          <span style={deleteButtonStyle} onClick={()=>{this.delete({item})}} className='navbar-url'><FontAwesomeIcon icon={faTrash} color="red" /></span>

          </td>
        </tr>
        )
      }
      </tbody>
    </Table>
      </div>
    )
  }
}
