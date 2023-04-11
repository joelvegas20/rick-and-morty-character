
import { CardsContainer } from '../../assets/styles/components/cards/Cards.style'
import Card from '../card/Card'

export default function Cards({characters , onClose }) {
  return (
    <CardsContainer>
      { characters.map(({ id ,name , species , gender , image , origin , status })=> {
        return <Card key={id} id={id} name={name} species={species} gender={gender} image={image} origin={origin.name} status={status} onClose={()=> onClose(id)} />
      })}
    </CardsContainer>
  )
}
