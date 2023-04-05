import CardTitle from "./components/CardTitle"
import CardSubTitle from "./components/CardSubTitle"
import "./App.css"
import cards from "./assets/data.js"
import styled from 'styled-components';

const MainCard = styled.div`
    width: 400px;
    border: 1px solid black;
    margin: auto;
    border-radius: 10px;
    
`
const CardsContainer = styled.div`
       display:flex;     
`
const CardContent = styled.div`      
       padding: 10px;
       border-radius:10px;
`




function App() {

  const createCard = cards.map((el) => {
    return <MainCard>
      <div className="imgContainer">
        <img src={el.img} alt="" />
      </div>
      <CardContent>
        <CardTitle
          title={el.title}
          secondaryText={el.secondaryText} />
        <CardSubTitle
          subTitle={el.subTitle}
          subContent={el.subContent} />
      </CardContent>
    </MainCard>
  })

  return (
    <CardsContainer>
      {createCard}
    </CardsContainer>
  )
}

export default App
