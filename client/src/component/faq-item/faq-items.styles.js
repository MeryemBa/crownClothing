import styled ,{ keyframes }from "styled-components";

const sweep=keyframes`
    from{
        opacity:0;
        margin-top:-10px;
    }
    to{
        opacity:1;
        margin-top:0;
    }

`;


export const Icon=styled.span`
width: 15px;
  height: 15px;
  font-size:12px;
  display:flex;
  justify-content:center;
  align-items: center;
 
    transform: rotate(90deg);
 transition:all 0.3s ease-in-out;

`;
export const Text=styled.span`
min-height:15px;
padding:0;
padding-right:10px;
`;

export const FaqSubContainer= styled.details`
width:100%;
padding:15px 20px;
padding-left:0;
border: none;
border-radius: 4px;


margin-bottom:10px;

&:hover >summary ${Text}{
    text-decoration: underline;
    
}

&[open] >summary {
    outline:none;
    border:none;
  

}
&[open] >summary ${Icon} {
    -ms-transform: rotate(-90deg); 
    transform: rotate(-90deg);
}
&[open] summary ~ * {
    animation:${sweep} 0.3s ease-in-out;

}

& > summary::-webkit-details-marker {
    display: none;
  }
  @media screen and (max-width: 800px) {

    padding:5px;
  }  

`;

export const FaqQuation=styled.summary`
margin-bottom:16px;
cursor:pointer;
font-weight:bold;
padding:5px;
display:flex;
justify-content:space-between;
font-weight: 500;

&:focus {
    outline: none;
    
  }
  

`;


export const FaqAnswer=styled.div`
color: #96999d;
padding:5px;
padding-right:15px;
line-height:1.5;
font-weight: 300;`;
