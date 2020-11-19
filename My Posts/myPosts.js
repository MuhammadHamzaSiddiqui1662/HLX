productName = document.getElementById("inputProductName");
companyName = document.getElementById("inputCompanyName");
actualPrice = document.getElementById("inputActualPrice");
discountedPrice = document.getElementById("inputDiscountedPrice");
mobileNo = document.getElementById("inputMobileNo");
imageURL = document.getElementById("inputImageURL");
address = document.getElementById("inputAddress");
postCards = document.getElementById("postCards");

function Post(productName, companyName, actualPrice, discountedPrice, mobileNo, imageURL, address) {
    this.productName = productName.value;
    this.companyName = companyName.value;
    this.actualPrice = actualPrice.value;
    this.discountedPrice = discountedPrice.value;
    this.mobileNo = mobileNo.value;
    this.imageURL = imageURL.value;
    this.address = address.value;
}

function addPost() {
    post = new Post(productName, companyName, actualPrice, discountedPrice, mobileNo, imageURL, address);
    posts = JSON.parse(localStorage.getItem("Posts")) || [];
    posts.push(post);
    localStorage.setItem("Posts",JSON.stringify(posts));
}

function myPostsLoad() {
    posts = JSON.parse(localStorage.getItem("Posts")) || [];
    for (i=0 ; i<posts.length ; i++) {
        postCards.innerHTML += 
        `<div class="card col-md-4" style="width: 18rem;">
            <div class="card-body">
                <img src="`+posts[i].imageURL+`" class="card-img-top" alt="`+posts[i].productName+`">
                <h5 class="card-title">`+posts[i].productName+`</h5>
                <h6 class="card-subtitle mb-2">`+posts[i].discountedPrice+`</h6>
                <h6 class="card-subtitle mb-2 text-muted"><del>`+posts[i].actualPrice+`</del></h6>
                <p class="card-text">`+posts[i].address+`</p>
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
            </div>
        </div>`
    }
}