import {
  CardContainer,
  DescriptContainer,
  IdSpan,
  SpecieSpan,
  StatusSpan,
  FullNameSpan,
  LocationSpan,
} from "../../assets/styles/components/card/cardStyle";

export default function Card({ name, species }) {
  return (
    <CardContainer>
      <FullNameSpan>{name}</FullNameSpan>
      <DescriptContainer>
        {/* <h2>{props.species}</h2> */}
        <SpecieSpan>Hn</SpecieSpan>
        <LocationSpan>Earth R.</LocationSpan>
        <StatusSpan>Alive</StatusSpan>
        <IdSpan>1</IdSpan>
        {/* <h2>{props.gender}</h2> */}
      </DescriptContainer>
      {/* <button onClick={props.onClose}>X</button> */}
      {/* <img  src={props.image} alt="character" /> */}
    </CardContainer>
  );
}
