import React from 'react'
import { useSelector } from 'react-redux'
import { Container, InfoContainer, Name, Pfp } from '../styled/Profile'

const Profile = () => {
  const {user} = useSelector(state=>state.user)
  return (
    <Container>
      <Pfp src={user.profilePic ? user.profilePic : "/pfp.jpg" } />
      <InfoContainer>
      <div><Name style={{color:'white'}}><b>Name:</b> {user.name}</Name></div>
      <div><Name style={{color:'white'}}><b>Email:</b> {user.email}</Name></div>
      <div><Name style={{color:'white'}}><b>Account Created At:</b> {String(user.createdAt).substring(0,10)}</Name></div>
      <div><Name style={{color:'white'}}><b>Account Updated At:</b> {String(user.updatedAt).substring(0,10)}</Name></div>
      <div> <Name style={{color:'white'}}><b>User ID:</b> {user._id}</Name></div>
      </InfoContainer>
    </Container>
  )
}

export default Profile  