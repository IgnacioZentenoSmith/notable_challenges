/*

Obtener el número de repeticiones de cada palabra dentro de un texto en un número de iteraciones menor a O(n^2)

*/

let texto = "Today, I am excited to announce the general availability of new APIs for managing data refresh in the Power BI service. These new APIs will allow you to programmatically trigger data refreshes and retrieve refresh history for any dataset that you own. With these versatile new tools, you’ll be able to easily automate and scale out Power BI data refresh management – no more clicking through dataset settings or flipping through refresh histories. In addition, these APIs open the door to integrating data refresh into your existing ETL or deployment processes. You could, for example, trigger Power BI data refresh as the last step in your Azure Data Factory ETL pipeline. And, as an ISV, you can easily manage the data for all your embedded analytics solutions.";

function getRepetitions(texto) {
    let diccionario = {};
    let words = texto.split(" ");
    for (index in words) {
        normalizedWord = normalizeWord(words[index]);
        // EXISTE
        if (normalizedWord in diccionario) {
            diccionario[normalizedWord]++;
        } 
        // NO EXISTE
        else {
            diccionario[normalizedWord] = 1;
        }
    }
    console.log(diccionario);
}

function normalizeWord(word) {
    return word.toLowerCase().replace(/[.,:;!?()]/, "");
}

getRepetitions(texto);
