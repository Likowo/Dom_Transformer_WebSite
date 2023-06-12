// DOM MANIPULATION
// Goal: Retail Site 
    // Dynamically change the Entire Site with a click of a button
    // General -- Mens -- Womens -- Children
    let majorContainer ={
        mens: {
            headImage: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
            optionTags: ["Boots", "Flannels", "Rugged Wear", "Shaving Cream"],
            productImages: [
                {
                    name: 'Sneakers',
                    pic: "https://images.unsplash.com/photo-1527010154944-f2241763d806?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
                },
                {
                    name: 'Boots',
                    pic: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
                },
                {
                    name: 'Flannels',
                    pic: "https://images.unsplash.com/photo-1638718297700-e828368a54e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                },
                {
                    name: 'Scarves',
                    pic: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                },
                {
                    name: 'Hoodies',
                    pic: "https://images.unsplash.com/photo-1509942774463-acf339cf87d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                },
                {
                    name: 'Hats',
                    pic: "https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=723&q=80"
                },
            ],
            textDescription: `Update your everyday wardrobe with our collection of men's pants. Discover tailored suit pants for work or special occasions, as well as comfier sweatpants and joggers for downtime. Mix up your weekend look and swap the jeans for a pair of cargo pants or chinos. Browse a range of colors, from neutral blacks and grays to brighter shades and prints. Find everything from soft breathable cotton to functional track pants and luxe velvet dress pants.`,
            lowImage: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
        },
        womens: {
            headImage: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            optionTags: ["Heels", "gloves", "shirts", "leggings"],
            productImages: [
                {
                    name: 'Heels',
                    pic: "https://images.unsplash.com/photo-1591884807537-0bce39888fe0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=541&q=80"
                },
                {
                    name: 'gloves',
                    pic: "https://pyxis.nymag.com/v1/imgs/a1e/ce1/e784acde6cf8154fa2dfdfe418601f435b-Hefstra.2x.rsquare.w600.png"
                },
                {
                    name: 'shirts',
                    pic: "https://cdn.shopify.com/s/files/1/0266/6276/4597/products/300936541TANGERINE_2_1024x1024.jpg?v=1682513958"
                },
                {
                    name: 'leggings',
                    pic: "https://media.self.com/photos/6398f416e1dbc71a6836914a/16:9/w_4000,h_2250,c_limit/best-leggings-on-amazon.png"
                },
                {
                    name: 'Hoodies',
                    pic: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/539128/39/mod01/fnd/EEA/fmt/png/PUMA-x-THE-RAGGED-PRIEST-Hoodie-Women"
                },
                {
                    name: 'Hats',
                    pic: "https://cdn.shopify.com/s/files/1/0089/1541/9195/products/m_5c6b743c3e0caafa7522588b_1024x.jpg?v=1628725661"
                },
            ],
            textDescription: `Update your everyday wardrobe with our collection of women's pants. Discover tailored suit pants for work or special occasions, as well as comfier sweatpants and joggers for downtime. Mix up your weekend look and swap the jeans for a pair of cargo pants or chinos. Browse a range of colors, from neutral blacks and grays to brighter shades and prints. Find everything from soft breathable cotton to functional track pants and luxe velvet dress pants.`,
            lowImage: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
        },
        kids: {
            headImage: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
            optionTags: ["Boots", "Flannels", "Rugged Wear", "Shaving Cream"],
            productImages: [
                {
                    name: 'Sneakers',
                    pic: "https://images.unsplash.com/photo-1527010154944-f2241763d806?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
                },
                {
                    name: 'Boots',
                    pic: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
                },
                {
                    name: 'Flannels',
                    pic: "https://images.unsplash.com/photo-1638718297700-e828368a54e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                },
                {
                    name: 'Scarves',
                    pic: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                },
                {
                    name: 'Hoodies',
                    pic: "https://images.unsplash.com/photo-1509942774463-acf339cf87d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                },
                {
                    name: 'Hats',
                    pic: "https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=723&q=80"
                },
            ],
            textDescription: `Update your everyday wardrobe with our collection of men's pants. Discover tailored suit pants for work or special occasions, as well as comfier sweatpants and joggers for downtime. Mix up your weekend look and swap the jeans for a pair of cargo pants or chinos. Browse a range of colors, from neutral blacks and grays to brighter shades and prints. Find everything from soft breathable cotton to functional track pants and luxe velvet dress pants.`,
            lowImage: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
        }
    }
// -----------------------
let mainImage = document.querySelector('.mainImg')
console.log(mainImage)
let option = document.querySelector('.options')
let miniOp = document.querySelectorAll('.choice')
let productBox = document.querySelector('.productContainer')
let pic = document.querySelector('.polaroid')
let textBox= document.querySelector('.textContainer')

const changeAll = () => {
    changeTopPic()

    changeOptions()
    product()
}

const changeAllWomens = () => {
    changeWomensOptions()
    changeWomensTopPic()
}
    const changeTopPic = () =>{
        // clearing out mainImage content div
        mainImage.innerText = ""
        // createImage 
        let newimage = document.createElement('img')
            newimage.setAttribute('src', majorContainer.mens.headImage)
            newimage.setAttribute('class','topPic')
            // replaceWith current
            mainImage.replaceWith(newimage)

    }

    const changeWomensTopPic = () => {
        //Clearing out the mainImage content div
        mainImage.textContent = ""
        let newImage = document.createElement('img')
            newImage.setAttribute('src',majorContainer.womens.headImage)
            newImage.setAttribute('class',"topPic")
            mainImage.replaceWith(newImage)
    }

    const changeOptions = () =>{
        //clear out options container
        option.innerHTML = ""
        majorContainer.mens.optionTags.forEach((tagname)=>{
            // CREATE ELE
            let txt = document.createElement('div')
            txt.innerHTML = tagname
            // REPLACE ELEMENT WITH NEW ELEMENT
            option.append(txt)
        })
    }

    const changeWomensOptions = () => {
       option.innerHTML = ""
       majorContainer.womens.optionTags.forEach((opt)=> {
        let data = document.createElement('p')
        data.innerHTML = opt
        option.append(data)

       })
    }

    const product= () => {
        //clearing out product container
        productBox.innerHTML = ""
        majorContainer.mens.productImages.forEach((obj)=>{
            let shopBox  = document.createElement('img')
            shopBox.setAttribute('src',obj.pic)
            shopBox.setAttribute('class','product')
            productBox.append(shopBox)
        })

    }

    const changeWomensProduct = () => {
        productBox.innerHTML = ""
        majorContainer.womens.productImages.forEach((images)=>{
            let imageContainer = document.createElement("img")
            imageContainer.setAttribute('src',images.pic)
            imageContainer.setAttribute('class','product')
            

        })
    }