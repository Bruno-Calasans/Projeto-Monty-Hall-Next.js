
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {

    // geral 
    --default-bgColor: burlywood;

    // Cards 
    --card1-bgColor: brown; // título Monty Hall
    --card2-bgColor: gray; // Número de portas
    --card3-bgColor: gray; // Sortear
    --card4-bgColor: blue; // Iniciar

    // Modal
    --top-bgColor:#803D13;
    --title-color: #fefefe;


    /* componente Prize */
    --prize-scale: 0.5;
    --max-prize-width: 100px;
    --max-prize-height: 80px;
    --lace-thickness: 15px;

    /* cores do Prize */
    --top-bgImageColor: linear-gradient(to bottom, green, rgb(1, 95, 1));
    --lace1-bgImageColor: linear-gradient(to bottom, red, rgb(195, 3, 3));
    --lace2-bgImageColor: linear-gradient(to bottom, red, rgb(195, 3, 3));
    --body-bgImageColor: linear-gradient(to bottom, rgb(1, 95, 1), green);

    /* componente Door */
    --door-area-width: 120px;
    --door-area-height: 200px;

    /* cores de Door */
    --frame-color: black;
    --area-color: #803D13;  
    --knob-color: black;
    --foot-color: grey;
    --open-color: grey;
    --selected-color: gold;

}

* {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}

html,
body {
    padding: 0;
    margin: 0;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    background-color: var(--default-bgColor);
}

a {
    color: inherit;
    text-decoration: none;
}

/* classes customizadas  */
.actionBtn {
    font-weight: bold;
    padding: 8px;
    border: none;
    border-radius: 4px;
    opacity: 0.8;
    cursor: pointer;
}
    
.actionBtn:hover {
    opacity: 1;
}
`
export default GlobalStyle
