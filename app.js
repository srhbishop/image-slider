var rightBtn = document.querySelector('.right');
var leftBtn = document.querySelector('.left');
var galleryImage = document.querySelector('.gallery-img')

var imageArray = [
    'https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/60006/spring-tree-flowers-meadow-60006.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/33041/antelope-canyon-lower-canyon-arizona.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
]

// for the index of imageArray
var index = 0;

rightBtn.addEventListener('click', changeImageRight);
leftBtn.addEventListener('click', changeImageLeft);

function changeImageRight() {
    galleryImage.src = imageArray[index];
    // have to add the - 1 to .length since array indexing starts at 0
    if(index < imageArray.length - 1) {
        index++;
    } else {
        // puts us back the beginning if we get to the end of hte array
        index = 0;
    }
}

function changeImageLeft() {
    galleryImage.src = imageArray[index];
    // index must be greate than 0, otherwise the index goes negative and doesn't exist
    if(index > 0) {
        index--;
    } else {
        index = imageArray.length - 1;
    }
}

