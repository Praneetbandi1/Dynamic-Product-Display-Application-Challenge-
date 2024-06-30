//U46368100
addEventListener("DOMContentLoaded", (event) => {

    let productCount;

    async function fetchProductData(count) {
        document.getElementById("loadingMessage").textContent='Loading...'
        document.getElementById("productName").textContent = '';
        document.getElementById("productPicture").src = '';
        document.getElementById("productPicture").textContent = '';
        const apiEndpointURL = "https://ww.course-api.com/react-store-products";

        try {
            await new Promise(resolve => setTimeout(resolve, 500));
            const response = await fetch(apiEndpointURL);

            const data = await response.json()
                .then((data) => {
                    document.getElementById("productName").textContent = data[productCount].name;
                    document.getElementById("productPicture").src = data[productCount].image;
                    document.getElementById("productPicture").width = "500";
                    document.getElementById("productDescription").textContent = data[productCount].description;
                    document.getElementById("")

                })
                .catch((error) => {
                    console.log(error);
                    alert("Unable to upload the product. Please try again later!");
                })
        }
        catch {
            console.log('Something went wrong');

        }
        finally {
            document.getElementById("loadingMessage").textContent="";

        }
    }

    const previousBtn=document.getElementById("previous")
    previousBtn.addEventListener("click",function() {
        productCount=(productCount>0) ?--productCount: 21
        fetchProductData(productCount);

    })
    const nextBtn=document.getElementById("next")
    nextBtn.addEventListener("click",function(){
productCount=(productCount<21) ? ++productCount :0
fetchProductData(productCount);

    })
    


})

