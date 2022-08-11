
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {

    /* cores */
    --test-color: black;

    /* componente Prize */
    --prize-scale: 0.5;
    --max-prize-width: 100px;
    --max-prize-height: 80px;
    --lace-thickness: 15px;

    /* componente Door */
    --door-area-width: 120px;
    --door-area-height: 200px;   
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
    background-color: burlywood;
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
    cursor: pointer;
    opacity: 0.8;
}
    
.actionBtn:hover {
    opacity: 1;
}
`
export default GlobalStyle