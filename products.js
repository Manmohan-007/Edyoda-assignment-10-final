$(document).ready(function () {
    var productId = window.location.search.split('=')[1];
    var obj = null;

    // function createProductImages(url, pos) {
    //     var image = document.createElement('img');
    //     image.src = url

    //     if(pos === 0) {
    //         image.classList.add("active-image");
    //     }

    //     image.onclick = function() {
    //         $('#product-images img').removeClass("active-image") ;
    //         image.classList.add("active-image");
    //         $('#product-preview').attr('src', url);
    //     }
    //     <tr
    //     class="ProductListingPage_TableRow ProductListingPage_ExpiredRow"
    //   >
    //     <td class="ProductListingPage_SecondaryText">56104-020</td>
    //     <td class="ProductListingPage_PrimaryText">
    //       Miconazole Nitrate
    //     </td>
    //     <td class="ProductListingPage_SecondaryText">
    //       Premier Brands of America Inc.
    //     </td>
    //     <td class="ProductListingPage_PrimaryText">14 Aug, 2012</td>
    //     <td class="ProductListingPage_SecondaryText">$993.01</td>
    //     <td class="ProductListingPage_SecondaryText">725</td>
    //   </tr>

    if (!localStorage.getItem("login Status")) {

        location.assign("./index.html")
    }
    let TbodyDiv = document.getElementsByTagName("tbody")[0];

    let count = 0;


    const ProductTableRow = (data) => {
        var trWrapper = document.createElement('tr');
        trWrapper.classList.add('ProductListingPage_TableRow');
        var tdID = document.createElement('td');
        tdID.classList.add('ProductListingPage_SecondaryText');
        tdID.innerText = data.id
        var tdProductName = document.createElement('td');
        tdProductName.classList.add('ProductListingPage_PrimaryText');
        tdProductName.innerText = data.medicineName;
        var tdProductBrand = document.createElement('td');
        tdProductBrand.classList.add('ProductListingPage_SecondaryText');
        tdProductBrand.innerText = data.medicineBrand;

        var tdExpiry_Date = document.createElement('td');
        tdExpiry_Date.classList.add('ProductListingPage_PrimaryText');
        tdExpiry_Date.innerText = data.expiryDate;
        var tdUnit_Price = document.createElement('td');
        tdUnit_Price.classList.add('ProductListingPage_SecondaryText');
        tdUnit_Price.innerText = `$${data.unitPrice}`;
        var tdStock = document.createElement('td');
        tdStock.classList.add('ProductListingPage_SecondaryText');
        tdStock.innerText = data.stock;

        trWrapper.appendChild(tdID);
        trWrapper.appendChild(tdProductName);
        trWrapper.appendChild(tdProductBrand);
        trWrapper.appendChild(tdExpiry_Date);
        trWrapper.appendChild(tdUnit_Price);
        trWrapper.appendChild(tdStock);


        return trWrapper




    }

    let response;
    $.get('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products', function (data, status) {
        response = data;

        response.map(item => {
            var trRows = ProductTableRow(item)

            TbodyDiv.appendChild(trRows)
        })
    })
    let currentDate = new Date().getTime();
    const ExpiryBox = document.getElementById("productExpired")
    ExpiryBox.onclick = () => {
        if (ExpiryBox.checked == false) {
            for (let i = 0; i < response.length; i++) {
                var output = new Date(response[i].expiryDate).getTime()
                var row = document.getElementsByClassName("ProductListingPage_TableRow");
                if (LowStockBox.checked) {
                    if (output > currentDate) {
                        row[i].style.display = "";

                    }
                    else {
                        row[i].style.display = "none";
                    }
                }
                else if (LowStockBox.checked == false) {
                    if (output > currentDate && response[i].stock > 100) {
                        row[i].style.display = "";

                    }
                    else {
                        row[i].style.display = "none";
                    }
                }




                else {
                    row[i].style.display = "none";
                }
            }
        }

        else if (ExpiryBox.checked == true) {

            var row = document.getElementsByClassName("ProductListingPage_TableRow");
            for (let i = 0; i < row.length; i++) {

                if (LowStockBox.checked) {
                    row[i].style.display = ""
                }
                else if (LowStockBox.checked == false) {
                    if (response[i].stock > 100) {
                        row[i].style.display = ""
                    }
                    else {
                        row[i].style.display = "none"
                    }

                }



            }



        }


    }
    const LowStockBox = document.getElementById("lowStock")

    LowStockBox.onclick = () => {
        if (LowStockBox.checked == true) {

            var row = document.getElementsByClassName("ProductListingPage_TableRow");
            count = 0;
            for (let i = 0; i < row.length; i++) {

                if (ExpiryBox.checked) {
                    row[i].style.display = ""
                }
                else if (ExpiryBox.checked == false) {
                    var output = new Date(response[i].expiryDate).getTime()
                    if (output > currentDate) {
                        row[i].style.display = ""
                    }
                    else {
                        row[i].style.display = "none"
                    }
                }
            }
        }

        else if (LowStockBox.checked == false) {

            var row = document.getElementsByClassName("ProductListingPage_TableRow");
            for (let i = 0; i < row.length; i++) {
                if (ExpiryBox.checked) {

                    var row = document.getElementsByClassName("ProductListingPage_TableRow");
                    if (response[i].stock > 100) {
                        row[i].style.display = ""
                    }
                    else {
                        row[i].style.display = "none"
                    }
                }
                else if (ExpiryBox.checked == false) {
                    var output = new Date(response[i].expiryDate).getTime()
                    if (output > currentDate && response[i].stock > 100) {
                        row[i].style.display = "";

                    }
                    else {
                        row[i].style.display = "none";
                    }
                }

            }



        }


    }








    //     return image;
    // }

    // $.get('https://5d76bf96515d1a0014085cf9.mockapi.io/product/' + productId, function (data, status) {
    //     obj = data;
    //     $('#product-preview').attr('src', data.preview)
    //     $('#product-title').html(data.name);
    //     $('#product-brand').html(data.brand);
    //     $('#description').html(data.description);
    //     $('#product-price').html(data.price);

    //     for (var i = 0; i < data.photos.length; i++) {
    //         $('#product-images').append(createProductImages(data.photos[i], i));
    //     }
    // })

    // $("#btn-add-to-cart").click(function () {
    //     $('#btn-add-to-cart').addClass('bigger');
    //     setTimeout(function () {
    //         $('#btn-add-to-cart').removeClass('bigger');
    //     }, 200)

    // var productl = window.localStorage.getItem('product-list');
    // productl = productl === null || productl === '' ? [] : productl;
    // productl = productl.length > 0 ? JSON.parse(productl) : [];

    // var flag = 0;
    // for (var i = 0; i < productl.length; i++) {

    //     if (productl[i].id == obj.id) {
    //         // console.log(productl[i]) ; 
    //         flag = 1;
    //         break;
    //     }
    //     else if (productl[i].id != obj.id) {


    //     }
    // }
    // console.log(obj) ; 
    // console.log(productl[i],"found") ; 
    // console.log(productl[i] , "not found") ; 
    // if (flag == 1) {
    //     productl[i].count += 1;
    //     // console.log(productl[i],"found") ; 
    //     window.localStorage.setItem('product-list', JSON.stringify(productl));
    // } else {
    //     // console.log(productl[i] , "not found") ; 
    //     obj.count = 1;

    //     console.log(obj, "notfound");
    //     // console.log(productl) ; 
    //     productl.push(obj);

    //     window.localStorage.setItem('product-list', JSON.stringify(productl));
    // }

    //     var totalCount = 0;
    //     for (var i = 0; i < productl.length; i++) {
    //         totalCount = totalCount + productl[i].count;
    //     }

    //     $('#cart-count').html(totalCount);
    // })
});