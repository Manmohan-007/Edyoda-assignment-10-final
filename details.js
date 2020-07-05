$(document).ready(function() {
    var productId = window.location.search.split('=')[1];
    var obj = null;

    function createProductImages(url, pos) {
        var image = document.createElement('img');
        image.src = url

        if(pos === 0) {
            image.classList.add("active-image");
        }

        image.onclick = function() {
            $('#product-images img').removeClass("active-image") ;
            image.classList.add("active-image");
            $('#product-preview').attr('src', url);
        }

        return image;
    }

    $.get('https://5d76bf96515d1a0014085cf9.mockapi.io/product/' + productId, function(data, status) {
        obj = data;
        $('#product-preview').attr('src', data.preview)
        $('#product-title').html(data.name);
        $('#product-brand').html(data.brand);
        $('#description').html(data.description);
        $('#product-price').html(data.price);

        for(var i=0; i<data.photos.length; i++) {
            $('#product-images').append(createProductImages(data.photos[i], i));
        }
    })

    $("#btn-add-to-cart").click(function() {
        $('#btn-add-to-cart').addClass('bigger');
        setTimeout(function() {
            $('#btn-add-to-cart').removeClass('bigger');
        }, 200)

        var productl = window.localStorage.getItem('product-list');
        productl = productl === null || productl === '' ? [] : productl;
        productl = productl.length > 0 ? JSON.parse(productl) : [];
 
        var flag=0 ; 
        for(var i=0; i < productl.length; i++) {
            
            if(productl[i].id == obj.id) { 
                // console.log(productl[i]) ; 
                flag=1 ; 
                break ; 
            }
            else if (productl[i].id!=obj.id) {
                    
               
            }
        } 
        // console.log(obj) ; 
        // console.log(productl[i],"found") ; 
        // console.log(productl[i] , "not found") ; 
        if(flag==1) {
            productl[i].count += 1; 
            // console.log(productl[i],"found") ; 
            window.localStorage.setItem('product-list', JSON.stringify(productl));
        }else { 
            // console.log(productl[i] , "not found") ; 
            obj.count = 1;  
            
            console.log(obj ,"notfound") ; 
            // console.log(productl) ; 
            productl.push(obj); 
            
            window.localStorage.setItem('product-list', JSON.stringify(productl)); 
        }

        var totalCount = 0;
        for(var i=0; i<productl.length; i++) {
            totalCount = totalCount + productl[i].count;
        }
    
        $('#cart-count').html(totalCount);
    })
});