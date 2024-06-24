const containerTag = document.getElementsByClassName("container")[0];
const showSelectItemTag = document.getElementsByClassName("showSelectItem")[0];
const showFeedTag = document.getElementsByClassName("showFeed")[0];
const showItemImageTag = document.getElementsByClassName("showItemImage")[0];
const welcomeTag = document.getElementsByClassName("welcome")[0];
const foodItem = [
    {id: 1, foodName:"1.Pizza" ,  src: "pizza.jpg" },
    {id:2, foodName:"2.Seafood", src: "seafood.jpeg"},
    {id:3, foodName:"3.Fish Fry", src: "fishfry.jpg"}

]



    const welcomeTextTag = document.createElement("div");
    welcomeTextTag.classList.add("welcomeText");
    const welcomeTextTag2 = document.createElement("div");
    welcomeTextTag2.classList.add("welcomeText");
    const welcomeText = ["Welcome"];


    setTimeout(()=>{
        const wTag = document.createElement("span");
        wTag.classList.add("text001");
        welcomeTextTag.append(wTag);
        wTag.innerHTML= "W";
    },2000);

    setTimeout(()=>{
        const eTag = document.createElement("span");
        eTag.classList.add("text001");
        welcomeTextTag.append(eTag);
        eTag.innerHTML= "e";
    },2500);

    setTimeout(()=>{
        const lTag = document.createElement("span");
        lTag.classList.add("text001");
        welcomeTextTag.append(lTag);
        lTag.innerHTML= "l";
    },3000);

    setTimeout(()=>{
        const cTag = document.createElement("span");
        cTag.classList.add("text001");
        welcomeTextTag.append(cTag);
        cTag.innerHTML= "c";
    },3500);

    setTimeout(()=>{
        const oTag = document.createElement("span");
        oTag.classList.add("text001");
        welcomeTextTag.append(oTag);
        oTag.innerHTML= "o";
    },4000);

    setTimeout(()=>{
        const mTag = document.createElement("span");
        mTag.classList.add("text001");
        welcomeTextTag.append(mTag);
        mTag.innerHTML= "m";
    },4500);

    setTimeout(()=>{
        const eTag = document.createElement("span");
        eTag.classList.add("text001");
        welcomeTextTag.append(eTag);
        eTag.innerHTML= "e";
    },5000);

    setTimeout(()=>{
        const spaceTag = document.createElement("span");
        spaceTag.classList.add("text001");
        spaceTag.classList.add("text002");
        welcomeTextTag.append(spaceTag);
        spaceTag.innerHTML= "S";
    },5500);

    setTimeout(()=>{
        const fTag = document.createElement("span");
        fTag.classList.add("text001");
        welcomeTextTag.append(fTag);
        fTag.innerHTML= "F";
    },5500);

    setTimeout(()=>{
        const rTag = document.createElement("span");
        rTag.classList.add("text001");
        welcomeTextTag.append(rTag);
        rTag.innerHTML= "r";
    },6000);

    setTimeout(()=>{
        const oTag = document.createElement("span");
        oTag.classList.add("text001");
        welcomeTextTag.append(oTag);
        oTag.innerHTML= "o";
    },6500);

    setTimeout(()=>{
        const mTag = document.createElement("span");
        mTag.classList.add("text001");
        welcomeTextTag.append(mTag);
        mTag.innerHTML= "m";
    },7000);

    setTimeout(()=>{
        const spaceTag = document.createElement("span");
        spaceTag.classList.add("text001");
        spaceTag.classList.add("text002");
        welcomeTextTag.append(spaceTag);
        spaceTag.innerHTML= "S";
    },7500);

    setTimeout(()=>{
        const ourShopTag = document.createElement("span");
        ourShopTag.classList.add("text001");
        ourShopTag.classList.add("text003");
        welcomeTextTag2.append(ourShopTag);
        ourShopTag.innerHTML= "Our Shop";
    },7500);

    setTimeout(()=>{
        containerTag.innerHTML= "";
        
    },8000)
    setTimeout(()=>{
        const shopNameTag = document.createElement("div");
        shopNameTag.classList.add("shopName");
        containerTag.append(shopNameTag);
        shopNameTag.innerHTML="LOKEYUN KOPITIAN";
        const menuTag = document.createElement("div");
        menuTag.classList.add("menu");
        containerTag.append(menuTag);
        const homeTag = document.createElement("span");
        homeTag.classList.add("home");
        const foodTag = document.createElement("span");
        foodTag.classList.add("food");
        const drinkTag = document.createElement("span");
        drinkTag.classList.add("drink");
        const toastTag = document.createElement("span");
        toastTag.classList.add("toast");
        homeTag.innerHTML = "Home";
        foodTag.innerHTML = "Food";
        drinkTag.innerHTML = "Drink";
        toastTag.innerHTML = "Toast";
        menuTag.append(homeTag,foodTag,drinkTag,toastTag);
        const homeFeedTag = document.createElement("div");
        homeFeedTag.classList.add("homeFeed");
        homeFeedTag.innerHTML=`<div class="hftContainer">
            <div class="hft"><img src="homeFt/hft1.png" class="hi"></div>
            <div class="hft"><img src="homeFt/hft2.JPG" class="hi"></div>
            <div class="hft"><img src="homeFt/hft3.JPG" class="hi"></div>
            <div class="hft"><img src="homeFt/hft4.JPG" class="hi"></div>
            <div class="hft"><img src="homeFt/hft5.JPG" class="hi"></div>
            <div class="hft"><img src="homeFt/hft6.JPG" class="hi"></div>
            <div class="hft"><img src="homeFt/hft7.JPG" class="hi"></div>
            <div class="hft"><img src="homeFt/hft8.JPG" class="hi"></div>
            <div class="hft"><img src="homeFt/hft9.JPG" class="hi"></div>
        </div>`;
        containerTag.append(homeFeedTag);
        
        homeTag.addEventListener("click",()=>{
            homeTag.style.borderBottom = "solid #E6BAA3 5px";
            foodTag.style.borderBottom = "none";
            drinkTag.style.borderBottom = "none";
            toastTag.style.borderBottom = "none";
            homeFeedTag.innerHTML="";
            homeFeedTag.innerHTML=`<div class="hftContainer">
            <div class="hft"><img src="homeFt/hft1.png" class="hi"></div>
            <div class="hft"><img src="homeFt/hft2.JPG" class="hi"></div>
            <div class="hft"><img src="homeFt/hft3.JPG" class="hi"></div>
            <div class="hft"><img src="homeFt/hft4.JPG" class="hi"></div>
            <div class="hft"><img src="homeFt/hft5.JPG" class="hi"></div>
            <div class="hft"><img src="homeFt/hft6.JPG" class="hi"></div>
            <div class="hft"><img src="homeFt/hft7.JPG" class="hi"></div>
            <div class="hft"><img src="homeFt/hft8.JPG" class="hi"></div>
            <div class="hft"><img src="homeFt/hft9.JPG" class="hi"></div>
        </div>`;
        containerTag.append(homeFeedTag);
        })


        foodTag.addEventListener("click",()=>{
            homeTag.style.borderBottom = "none";
            foodTag.style.borderBottom = "solid #E6BAA3 5px";
            drinkTag.style.borderBottom = "none";
            toastTag.style.borderBottom = "none";
            homeFeedTag.innerHTML="";
            for(let i=0; i<foodItem.length; i++){
                const showSelectItemDiv = document.createElement("div");
                showSelectItemDiv.id = foodItem[i].id;
                showSelectItemDiv.classList.add("showSelectItemDiv");
                const showSelectItemImageDiv = document.createElement("div");
                showSelectItemImageDiv.classList.add("showSelectItemImageDiv");
                const showSelectItemImage = document.createElement("img");
                showSelectItemImage.classList.add("showSelectItemImage");
                showSelectItemImage.src = foodItem[i].src;
                const showSelectItemTitle = document.createElement("div");
                showSelectItemTitle.classList.add("showSelectItemTitle");
                showSelectItemTitle.innerHTML = foodItem[i].foodName;
                showSelectItemDiv.append(showSelectItemImageDiv,showSelectItemTitle);
                showSelectItemImageDiv.append(showSelectItemImage);
                homeFeedTag.append(showSelectItemDiv);
                
                showSelectItemDiv.addEventListener("click",()=>{
                    // let showSelectItemDivId = foodItem[i].src;
                    // showItemImageTag.src = showSelectItemDivId;
                    showSelectItemDiv.style.width = "100%";
                    setTimeout(()=>{
                        showSelectItemDiv.style.width = "70%";
                    },5000)
    
                })
            }
        })
    },8000)



    // setTimeout(() => {

    //     for(let i=0; i<foodItem.length; i++){
    //         const showSelectItemDiv = document.createElement("div");
    //         showSelectItemDiv.id = foodItem[i].id;
    //         showSelectItemDiv.classList.add("showSelectItemDiv");
    //         const showSelectItemImageDiv = document.createElement("div");
    //         showSelectItemImageDiv.classList.add("showSelectItemImageDiv");
    //         const showSelectItemImage = document.createElement("img");
    //         showSelectItemImage.classList.add("showSelectItemImage");
    //         showSelectItemImage.src = foodItem[i].src;
    //         const showSelectItemTitle = document.createElement("div");
    //         showSelectItemTitle.classList.add("showSelectItemTitle");
    //         showSelectItemTitle.innerHTML = foodItem[i].foodName;
    //         showSelectItemDiv.append(showSelectItemImageDiv,showSelectItemTitle);
    //         showSelectItemImageDiv.append(showSelectItemImage);
    //         containerTag.append(showSelectItemDiv);
            
    //         showSelectItemDiv.addEventListener("click",()=>{
    //             // let showSelectItemDivId = foodItem[i].src;
    //             // showItemImageTag.src = showSelectItemDivId;
    //             showSelectItemDiv.style.width = "100%";
    //             setTimeout(()=>{
    //                 showSelectItemDiv.style.width = "70%";
    //             },5000)

    //         })
    //     }
    // }, 8000);

    

    
    welcomeTag.append(welcomeTextTag,welcomeTextTag2);
