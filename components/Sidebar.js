import styled from "styled-components"
import {Avatar , Button, IconButton} from "@mui/material"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChatIcon from '@mui/icons-material/Chat';
import SearchIcon from '@mui/icons-material/Search';
import { auth ,db } from '../firebase'
import { doc, addDoc, collection } from "firebase/firestore"
import { useAuthState } from 'react-firebase-hooks/auth';
import * as EmailValidator from "email-validator"

function Sidebar() {
    const [user ] = useAuthState(auth);
    const createChat = () => {
        const input = prompt('Por favor digite o e-mail da pessoa com quem queiras conversar');
        if(!input) return;

        if(EmailValidator.validate(input) && input !== user.email) {
            // console.log(input);
            addDoc(collection(db, 'chats'), {
                users: [user.email, input],
              })

        }
    };
  return (
    <Container>
      <Header>
        <UserAvatar onClick={() => auth.signOut()}/>
        <IconContainer>
            <IconButton>
            <ChatIcon/>
            </IconButton>
            <IconButton>
            <MoreVertIcon/>
            </IconButton>
        </IconContainer>
      </Header>
      <Search>

            <SearchIcon/>
            <SearchInput placeholder="Procurar um Chat"/>

      </Search>

      <SidebarButton onClick={createChat}>Iniciar uma conversa</SidebarButton>
      {/* list of chat */}
    </Container>
  );
}

export default Sidebar;

const Search = styled.div`
display:flex;
align-items: center;
padding: 20px;
border-radius:2px;


`;
const SearchInput = styled.input`
outline-width:0px; 
border: none;
flex:1;

`;


const SidebarButton = styled(Button)`
width: 100%;
border-top: 2px solid whitesmoke;
border-bottom: 2px solid whitesmoke;

`;

const Container = styled.div `


`;

const Header = styled.div`
display: flex;
position: sticky;
background-color: white;
top:0;
z-index:1;
justify-content: space-between;
align-items: center;
padding:15px;
height:80px;
border-bottom:1px solid whitesmoke;

`;

const UserAvatar = styled(Avatar)`

cursor: pointer;
:hover{
    opacity:0.8;
}

`;

const IconContainer = styled.div``;