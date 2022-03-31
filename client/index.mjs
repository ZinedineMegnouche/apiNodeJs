import axios from "axios";

// Crée immédiatement la sortie:
//result; // "Barry"
/** Recupere la liste des produits côté client
 * 
 * @returns Promise de la requete get http://localhost:3000/products
 */
const getProducts = () => {
    return new Promise(resolve => {
        axios.get('http://localhost:3000/products')
            .then(function (response) {
                resolve(response)
                //console.log(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log("Il y a une erreur")
                console.log(error);
            })
    })
}

/** Ajout d'un produit côté client
 * 
 * @param name Nom du produit
 * @param quantity Quantité du produit
 *
 */
const addProduct = (name, quantity) => {
    axios.post('http://localhost:3000/products', {
        name: `${name}`,
        quantity: quantity
    })
        .then(function (response) {
            console.log("OKK");
            console.log(response.data);

        })
        .catch(function (error) {
            console.log("EROORRRR");
        });
}
/** requete GET http://localhost:3000/products
 *  
 * @returns requete GET http://localhost:3000/products
 */
const getProductsAsync = () => {
    return axios.get('http://localhost:3000/products');
}


// MAIN (IIFE) 
(async () => {
    const res = await getProducts()
    console.log('\nLISTE DES PRODUITS :', res.data)


    addProduct('litchie', 5)

    const resAsync = await getProductsAsync()

    resAsync.then((value) => {
        console.log('\nLISTE DES PRODUITS (ASYNC) :', value.data)
    }
    )

})()
