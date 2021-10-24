export const tipoColor = (type) =>
{
    let fondoColor = ""
    let textoColor = "#000000"
    switch (type) {
        case 'normal':
            fondoColor = "#A8A090";
            textoColor = "#ffffff"
            break;
        case 'water':
            fondoColor = "#3899F8";
            break;
        case 'electric':
            fondoColor = "#F8D030";
            break;
        case 'fighting':
            fondoColor = "#A05038";
            textoColor = "#ffffff"
            break;
        case 'ground':
            fondoColor = "#E9D6A4";
            break;
        case 'psychic':
            fondoColor = "#F870A0";
            break;
        case 'rock':
            fondoColor = "#B8A058";
            textoColor = "#ffffff"
            break;
        case 'dark':
            fondoColor = "#7A5848";
            textoColor = "#ffffff"
            break;
        case 'steel':
            fondoColor = "#A8A8C0";
            break;
        case 'fire':
            fondoColor = "#F05030";
            textoColor = "#ffffff"
            break;
        case 'grass':
            fondoColor = "#78C850";
            break;
        case 'ice':
            fondoColor = "#58C8E0";
            break;
        case 'poison':
            fondoColor = "#B058A0";
            textoColor = "#ffffff"
            break;
        case 'flying':
            fondoColor = "#98A8F0";
            break;
        case 'bug':
            fondoColor = "#A8B820";
            break;
        case 'ghost':
            fondoColor = "#6060B0";
            textoColor = "#ffffff"
            break;
        case 'dragon':
            fondoColor = "#7860E0";
            textoColor = "#ffffff"
            break;
        default://fairy
            fondoColor = "#E79FE7";
            break;
    }
    return {fondoColor, textoColor};
}