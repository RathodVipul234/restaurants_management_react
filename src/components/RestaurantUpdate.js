import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import {withRouter} from './withRouter'
import { useNavigate } from "react-router-dom";

import API from '../RestApi'
import { Button, Form } from 'react-bootstrap'


export default function RestaurantUpdate() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  let params = useParams();
  let RestaurantId = params.id
  let RestaurantUpdateApi = API['update'] + `/${RestaurantId}`
  useEffect(() => {
    // this will work as ComponantDidMountWork in Class based component
    fetch(RestaurantUpdateApi).then((response) => {
      return response.json()
    }).then((result) => {
      setName(result.name)
      setRating(result.rating)
      setEmail(result.email)
      setAddress(result.address)
    })
  }, [])


  function update() {
    let Name = {name}
    let Rating = {rating}
    let Email = {email}
    let Address = {address}

    const obj = {
      "name": Name['name'],
      "rating": Rating['rating'],
      "email": Email['email'],
      "address": Address['address'],
    }
    
    const Data = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    }

    fetch(RestaurantUpdateApi, Data).then((response) => {
      return response.json()
    }).then((result) => {
      alert("Restaurant has been updated successfully")
      navigate('/list')
    })


  }

  return (
    <div className='create-restaurant-div'>
      <h3 className='text-center'>Update Restaurant Detail</h3>
      <Form.Control className="w-50" value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" />
      <Form.Control className="w-50" value={rating} onChange={(e) => setRating(e.target.value)} type="number" placeholder="Rating" />
      <Form.Control className="w-50" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
      <Form.Control className="w-50" value={address} onChange={(e) => setAddress(e.target.value)} type="text" placeholder="Address" />
      <Button variant="success" onClick={() => { update() }} className="mt-10" mt={10}>Update</Button>
    </div>)
}
