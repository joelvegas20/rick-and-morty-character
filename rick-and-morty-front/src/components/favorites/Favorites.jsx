import React , { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../card/Card'
import { filterCards, getFavorites, orderCards } from '../../redux/actions'
import axios from 'axios'


export default function Favorites() {

    const myFavorites = useSelector((state)=> state.myFavorites)
    const dispatch = useDispatch()
    // const [filt, setFilt] = useState([]);

    console.log(myFavorites)

    const filter = (event)=> {
      dispatch(filterCards(event.target.value))
    }

    const order = (event) => {
      dispatch(orderCards(event.target.value))
    }

    useEffect(  () => {
      
      dispatch(getFavorites())

    }, []);


  return (
    <div>
    {/* Si revisas, esta aplicación tiene un pequeño bug que tendrás que resolver... Cuando presionas el ❤️ de una de las Cards, el personaje aparece en la vista de "Favoritos". Pero si luego eliminas el personaje, este aún permanece en esta vista. Busca la manera para que cuando elimines un personaje, también se elimine de "Favoritos" (si es que está allí). */}
    <div>
      <select name='order' onChange={order}>
        <option value='Ascendente'>Ascendente</option>
        <option value='Descendente'>Descendente</option>
      </select>
      <select name='filter' onChange={filter}>
        <option value='Male'>Male</option>
        <option value='Female'>Female</option>
        <option value='Genderless'>Genderless</option>
        <option value='unknown'>Unknown</option>
      </select>
    </div>
      {myFavorites.map(({ id ,name , species , gender , image })=> {
        return <Card key={id} id={id} name={name} species={species} gender={gender} image={image} onClose={()=> onClose(id)} />
      })}

    </div>
  )
}
