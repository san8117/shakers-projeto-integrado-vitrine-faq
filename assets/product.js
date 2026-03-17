document.addEventListener('DOMContentLoaded', () => {

    const buttonContainer = document.querySelector(".button-container")
    const variants = JSON.parse(buttonContainer.dataset.json)

    const option1 = document.querySelector(".option1")
    const option2 = document.querySelector(".option2")

    const buttonCart = document.querySelector(".btn-add-cart")

    const imageElement = document.querySelector(".product-image")
    const priceElement = document.querySelector(".product-price")


    let variantId = variants[0].id

    function updateVariant(){

        const selectedColor = option1.value
        const selectedSize = option2.value

        const variant = variants.find(v =>
            v.option1 === selectedColor &&
            v.option2 === selectedSize
        )

        if(!variant) return

        variantId = variant.id


        const price = (variant.price / 100).toFixed(2)
        priceElement.textContent = `Preço: R$ ${price}`

    }

    async function addCart() {

        const formData = {
            items: [{
                id: variantId,
                quantity: 1
            }]
        }

        try {

            const response = await fetch('/cart/add.js', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            const data = await response.json()

            console.log("Produto adicionado:", data)

        } catch (error) {

            console.error('Erro:', error)

        }

    }

    option1.addEventListener("change", updateVariant)
    option2.addEventListener("change", updateVariant)

    buttonCart.addEventListener('click', addCart)

})