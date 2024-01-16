import styled from "styled-components";
import bg from './img/bg.png';
import { MainLayout } from './styles/layouts';
import Orb from "./Components/Orb/Orb";
import Navigation from './Components/Navigation/Navigation';
import { useMemo, useState } from "react";
import Dashboard from "./Components/Dashboard/Dashboard";
import Income from "./Components/Income/Income";
import Expenses from "./Components/Expenses/Expenses";
import { useGlobalreach } from "./context/globalreach";
import ViewTransactions from "./Components/ViewTransactions/ViewTransactions";

function App() {
  const [active, setActive] = useState(1)  //our id starts from 1 that's why we set our defaukt id as 1

  const global = useGlobalreach();
  console.log(global);
  
  const displaydata = () => {
    switch(active){
      case 1: return <Dashboard/>
      case 2: return <ViewTransactions/>
      case 3: return <Income/>
      case 4 : return <Expenses/>
      default : return <Dashboard/>
    }

  }

  const orbMemo = useMemo(()=>{
    return <Orb/>
  },[])   // this will stop the animation from playing again and again when we switch menu items 

  return (
    <AppStyled bg = {bg} className="App"> 
      {orbMemo} 
      <MainLayout>
        <Navigation active = {active} setActive = {setActive}/>  
        <main>
          {displaydata()}
        </main>
      </MainLayout>
    </AppStyled>
  );
}

// we are using active and setactive in navigation to show which menu item are we currently using

const AppStyled = styled.div`
  height:100vh;
  background-image: url(${props => props.bg});
  position: relative;
  main {
    flex: 1;
    background: #E3FDFD;
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

export default App;
