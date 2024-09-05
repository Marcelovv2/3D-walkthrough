export const loadingScreen = (state) => {
    const body = document.body;
    const loadingScreen = document.getElementById("loadingScreen");
    const mainContainer = document.getElementById("mainContainer");    
    switch(state){
        case "loading": 
            mainContainer.style.display = "none"; 
            loadingScreen.style.display = "block";
            body.style.overflow = "hidden"; 
            break;
        case "loaded":
            mainContainer.style.display = "block";
            loadingScreen.style.display = "none";
            body.style.overflow = "auto";   
            break;
    }
};
