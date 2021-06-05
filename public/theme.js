console.log(getComputedStyle(document.documentElement)
.getPropertyValue('--text1'));

document.documentElement.style
    .setProperty('--my-variable-name', 'pink');

function change(){

    if(document.getElementById('chk-theme').style.justifyContent == "flex-start"){

        document.getElementById('chk-theme').style.justifyContent = "center";
        changeTheme(2);

    }else if(document.getElementById('chk-theme').style.justifyContent == "center"){

        document.getElementById('chk-theme').style.justifyContent = "flex-end";
        changeTheme(3);

    }else{

        document.getElementById('chk-theme').style.justifyContent = "flex-start";
        changeTheme(1);

    }

}

//FUNCTION TO CHANGE THE THEME COLORS
function changeTheme(step){

    if(step == 1){

        document.documentElement.style
    .setProperty('--primary', 'hsl(222,26%,31%)');
        document.documentElement.style
    .setProperty('--secondary', 'hsl(223,31%,20%)');
        document.documentElement.style
    .setProperty('--screen', 'hsl(224,36%,15%)');

        document.documentElement.style
    .setProperty('--blue-key', 'hsl(225,21%,49%)');
        document.documentElement.style
    .setProperty('--blue-key-sh', 'hsl(224,28%,35%)');   

        document.documentElement.style
    .setProperty('--tog-key', 'hsl(6,63%,50%)');
        document.documentElement.style
    .setProperty('--tog-key-sh', 'hsl(6,70%,34%)');

        document.documentElement.style
    .setProperty('--main-key', 'hsl(30,25%,89%)');
        document.documentElement.style
    .setProperty('--main-key-sh', 'hsl(28,16%,65%)');

        document.documentElement.style
    .setProperty('--text2', 'hsl(221,14%,31%)');
        document.documentElement.style
    .setProperty('--text1', '#ffffff');
        document.documentElement.style
    .setProperty('--sp-text', '#ffffff');

    }else if(step == 2){

        document.documentElement.style
    .setProperty('--primary', 'hsl(0,0%,90%)');
        document.documentElement.style
    .setProperty('--secondary', 'hsl(0,5%,81%)');
        document.documentElement.style
    .setProperty('--screen', 'hsl(0,0%,93%)');

        document.documentElement.style
    .setProperty('--blue-key', 'hsl(185,42%,37%)');
        document.documentElement.style
    .setProperty('--blue-key-sh', 'hsl(185,58%,25%)');   

        document.documentElement.style
    .setProperty('--tog-key', 'hsl(25,98%,40%)');
        document.documentElement.style
    .setProperty('--tog-key-sh', 'hsl(25,99%,27%)');

        document.documentElement.style
    .setProperty('--main-key', 'hsl(45,7%,89%)');
        document.documentElement.style
    .setProperty('--main-key-sh', 'hsl(35,11%,61%)');

        document.documentElement.style
    .setProperty('--text2', 'hsl(60,10%,19%');
        document.documentElement.style
    .setProperty('--text1', 'hsl(60,10%,19%)');
        document.documentElement.style
    .setProperty('--text3', '#ffffff');
        document.documentElement.style
    .setProperty('--sp-text', '#ffffff');

    }else if(step == 3){

        document.documentElement.style
    .setProperty('--primary', 'hsl(268,75%,9%)');
        document.documentElement.style
    .setProperty('--secondary', 'hsl(268,71%,12%)');
        document.documentElement.style
    .setProperty('--screen', 'hsl(268,71%,12%)');

        document.documentElement.style
    .setProperty('--blue-key', 'hsl(281,89%,26%)');
        document.documentElement.style
    .setProperty('--blue-key-sh', 'hsl(285,91%,52%)');   

        document.documentElement.style
    .setProperty('--tog-key', 'hsl(176,100%,44%)');
        document.documentElement.style
    .setProperty('--tog-key-sh', 'hsl(177,92%,70%)');

        document.documentElement.style
    .setProperty('--main-key', 'hsl(268,47%,21%)');
        document.documentElement.style
    .setProperty('--main-key-sh', 'hsl(290,70%,36%)');

        document.documentElement.style
    .setProperty('--text2', 'hsl(52,100%,62%)');
        document.documentElement.style
    .setProperty('--text1', 'hsl(52,100%,62%)');
        document.documentElement.style
    .setProperty('--text3', '#ffffff');
        document.documentElement.style
    .setProperty('--sp-text', 'hsl(198,20%,13%)');

    }

}