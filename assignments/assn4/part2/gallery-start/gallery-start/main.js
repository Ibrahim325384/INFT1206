const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');


const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const image = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Declaring the alternative text for each image file */
const altText = ["image 1", "image 2", "image 3", "image 4", "image 5"];

/* Looping through images */
for (i = 0; i <= image.length; i++){

    const newImage = document.createElement('img');
    xxx = image[i];
    newImage.setAttribute('src', xxx);
    xxx = altText[i];
    newImage.setAttribute('alt', xxx);
    thumbBar.appendChild(newImage);
    thumbBar.addEventListener("click");
}


/* Wiring up the Darken/Lighten button */
btn.getAttribute()

if (btn.getAttribute() == "dark"){
    btn.textContent = "Lighten";
    btn.setAttribute("light", btn.textContent);
    overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
}

else if (btn.getAttribute() == "light"){
    btn.textContent = "Darken";
    btn.setAttribute("Dark", btn.textContent);
    overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
    
}

