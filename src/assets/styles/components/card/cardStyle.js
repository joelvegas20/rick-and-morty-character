import styled from "styled-components";


// Blue Box for Character Information.
export const CardContainer = styled.div`
    position:relative;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background-color: #040B1D;
    padding:20px;
    margin:10px;
    width: 280px;
    height: 300px;
`
// FullName Span Style.
export const FullNameSpan = styled.span`    
    color:white;
    font-size:35px;
    font-family: Rampart-One , sans-serif;
    width:95%;
    margin: 20px 10px;
    word-wrap: break-word;
`

// White Box for description.
export const DescriptContainer = styled.div`
    position: relative;
    display:flex;
    justify-content:center;
    align-items:center;
    width:150px;
    height:150px;
    border:4px solid white;
    border-radius:5px;
    font-weight:700;

`

// Style for Specie Span.
export const SpecieSpan = styled.span`
    color:white;
    font-size:90px;
    font-weight:700;
    font-family:Almarai , sans-serif;
`
// Style for Id Span.
export const IdSpan = styled.span`
    position:absolute;
    bottom:1%;
    left: 5%;
    color:white;
    font-size:25px;
    font-weight:700;
`
// Status Span Up-Right Corner.
export const StatusSpan = styled.span`
    position:absolute;
    right:-6px;
    top:10%;
    color:white;
    transform: rotate(-90deg);
    font-size:18px;
    font-weight:700;
    font-family:Inter , sans-serif;
`

// Location Span Up-left Corner.
export const LocationSpan = styled.span`
    position:absolute;
    top:2%;
    left:5%;
    color:white;
    font-family:Inter , sans-serif;
`