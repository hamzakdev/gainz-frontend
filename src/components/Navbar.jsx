import React, { useState } from "react";
import { Container, Left, Center, Right, SearchContainer, Logo,SearchInput, ProfileImage} from "../styled/Navbar";
import { motion } from "framer-motion";
import { navVariants } from "./utils/motion";
import Hamburger from "./Hamburger";
import SearchIcon from '@mui/icons-material/Search';
import '../additionalcss/navbar.css'
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const Navbar = () => {  
  const {user, isLoggedIn} = useSelector(state=>state.user)
  const navigate = useNavigate()
const [search, setSearch] = useState("")
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(search.trim()){
      navigate(`/all/${search}`)
    }
    else{
      navigate('/all')
    }
  }
  const [ptext, setptext] = useState('Search here')
  return (
    <motion.nav variants={navVariants} initial="hidden" animate="show" >
      <Container>
        <Left>
          <Link to="/" style={{color:"inherit"}}>
          <Logo>
           GAINZ.GA
          </Logo>
          </Link>
        </Left>
        <Center>
          <SearchContainer  >
            <SearchIcon  style={{color:'white', fontSize:'2.2em'}} />
            <form onSubmit={handleSubmit}  >
            <SearchInput onChange={(e)=>setSearch(e.target.value)}  onFocus={()=>setptext("Start Typing")} placeholder={ptext} type="text"  />  
            <input style={{display:'none'}} type="submit" />
            </form>
          </SearchContainer>  
        </Center>
        <Right>
          
            {
              isLoggedIn && 
              <Link to="/profile">
                <ProfileImage src={user && user.profilePic  ? `${user.profilePic}`  : "/pfp.jpg"} alt="" />
                
                </Link>
            }
            <Hamburger />
          
        </Right>
      </Container>
    </motion.nav>
  );
};

export default Navbar;
