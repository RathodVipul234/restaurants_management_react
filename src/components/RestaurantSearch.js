import React, { Component } from 'react';
import { Button, Form, Table, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import API from '../RestApi'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'


export default class RestaurantSearch extends Component {
  constructor() {
    super()
    this.state = {
      list: null,
      search: false
    }
  }

  search(searched_text) {
    const RestaurantSearchApi = API['list'] + '?q=' + searched_text
    fetch(RestaurantSearchApi).then((response) => {
      return response.json()
    }).then((result) => {
      if (result.length > 0) {
        this.setState({ 'list': result })
      } else {
        this.setState({ 'list': null })
      }
      this.setState({ 'search': true })
    })
  }

  delete(item) {
    let itemId = item['item']['id']
    const RestaurantDeleteApi = API['delete'] + `/${itemId}`
    fetch(RestaurantDeleteApi, { method: 'DELETE', }).then((response) => {
      return response.json()
    }).then((result) => {
      alert("Restaurant has been deleted successfully")
      this.search('')
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
      <Container>
        <h1 className="text-center" style={{ 'marginTop': "20px" }}>Search Restaurant</h1>

        <div className='input-group search-div'>
          <Form.Control className="w-50 dflex" type="text" onChange={(e) => this.search(e.target.value)} placeholder="Search" />
        </div>
        <hr />
        {this.state.list ?
          <div className='searched-reastaurant'>
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
                  this.state.list.map((item, i) =>
                    <tr key={i} className="restaurant-list-wrapper">
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.rating}</td>
                      <td>{item.email}</td>
                      <td>{item.address}</td>
                      <td><Link to={"/update/" + item.id} className='navbar-url'><FontAwesomeIcon icon={faEdit} color="pink" /></Link>
                        <span style={deleteButtonStyle} onClick={() => { this.delete({ item }) }} className='navbar-url'><FontAwesomeIcon icon={faTrash} color="red" /></span>

                      </td>
                    </tr>
                  )
                }
              </tbody>
            </Table>
          </div>
          :
          <div>
            {this.state.search ?
              <h1 className='text-center'>No result Found for this search</h1>
              :
              <h1></h1>
            }
          </div>
        }
      </Container>
    );
  }
}
