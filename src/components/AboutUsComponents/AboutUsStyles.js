import styled from "styled-components";

export const AboutUsWrapper = styled.section`
  margin: 11.8rem 16.8rem 20rem 16.8rem;
  display: flex;
  flex-direction: column;
  gap: 13.3rem;

  // 720px
  @media (max-width: 56em) {
    margin: 8rem;  
  }
`
  
export const AboutUsCard = styled.section`
  display: grid;
  grid-template-columns: 1fr 10fr; 
  gap: 2rem;

  h2 {
    font-family: Noto Sans Georgian;
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 3.26rem;
    margin-top: 1rem;
  }  

  span {
    color: #FD007D;
    }
    
  p {
    font-family: Bebas Neue;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.5rem;
    color: #474747;
    margin-top: 2rem;
    position: relative;
   }

  p::before {
    content: ""; 
    width: 3px;
    height: 20rem; 
    background-color: #070B80; 
    position: absolute;
    top: 25%;
    left: -8.5%;
 }
    
    &:last-child p::before {
      content: none; 
  }

  // 896px
  @media (max-width: 56em) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    text-align: center;

    p::before {
      display:none;
    }
  }
`

 
export const Num = styled.div`
  display: flex; 
  justify-content: center; 
  align-items: center
  font-family: Bebas Neue;
  font-size: 3.6rem;
  font-weight: 400;
  color: #070B80;
  padding-top: 1rem;
  border: 3px #070B80 solid;
  border-radius: 50%;
  width: 8rem;
  height: 8rem;
`