import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CardContainer, CardContentContainer, CardId, CardSpecieContainer  , CardName , CardOrigin , CardSpecie , CardStatus, CardNameLink, ButtonsContainer, ButtonHeart} from "../../assets/styles/components/card/Card.style";
import { addFavorites, deleteFavorites } from "../../redux/actions";
import heart from "../../assets/icons/heart-solid.svg";
import heartClean from "../../assets/icons/heart-clean.svg";
import deleteIcon from "../../assets/icons/delete.svg";



export default function Card(props) {

  const [isFav, setIsFav] = useState(false);
  const myFavorites = useSelector((state) => state.myFavorites)

  const dispatch = useDispatch()

  const handleFavorite = () => {

    if (isFav) {
      setIsFav(false)
      dispatch(deleteFavorites(props.id))
    } else {

      setIsFav(true)
      dispatch(addFavorites(props))

    }
  }

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);



  return (
    <CardContainer key={props.id} style={{'--background-image': `url(${props.image})`}}>

      <ButtonsContainer>
      {
        isFav ? (
          <ButtonHeart onClick={handleFavorite}>
       
            <img src={heart} width='30px' />

          </ButtonHeart>
        ) : (
          <ButtonHeart onClick={handleFavorite}>
          <img src={heartClean} width='30px' />
          </ButtonHeart>
        )
      }
      <ButtonHeart onClick={props.onClose}>
        <img src={deleteIcon} width='30px' />
      </ButtonHeart>

      </ButtonsContainer>
      

      <CardName><CardNameLink to={`/detail/${props.id}`}>
        <span className="" >{props.name}</span>
      </CardNameLink></CardName>
      {/* container for content card */}
      <CardContentContainer >
        <div>
        {/* Character Origin  */}
            {/* <span>{origin}</span> */}
            <CardOrigin>{ props.origin === 'Earth (Replacement Dimension)' ? 'Earth ( RD )':props.origin }</CardOrigin>
        {/* Character Status */}
            {/* <span>{status}</span> */}
            <CardStatus>{props.status}</CardStatus>
        {/* Character Specie */}
            {/* <span>{specie}</span>  */}
            <CardSpecieContainer>
              <CardSpecie >Hn</CardSpecie> 
            </CardSpecieContainer>
            <CardId >{props.id}</CardId>
        </div>
      </CardContentContainer>
    </CardContainer>
  );
}

