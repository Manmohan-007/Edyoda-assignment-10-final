$(document).ready(function() {
    var productl = window.localStorage.getItem('product-list');
    productl = productl === null || productl === '' ? [] : productl;
    productl = productl.length > 0 ? JSON.parse(productl) : [];

    var totalCount = 0;
    for(var i=0; i<productl.length; i++) {
        totalCount = totalCount + productl[i].count;
    }

    $('#cart-count').html(totalCount); 

    $('#ham-item').bind("click" , ()=>{
        // alert("fine") ; 
        $("#overlay").css("transform","translateX(100%)") ? $("#overlay").css("transform", "translateX(0%)") :$("#overlay").css("transform", "translateX(100%)") ;     
        console.log($("#overlay").css("transform")) ; 
        $('#black-overlay').css('display')=="none" ? $('#black-overlay').css('display','block') : $('#black-overlay').css('display','none') ; 
    }) ; 
    $('#black-overlay').bind('click',()=>{
            
        $("#overlay").css("transform","translateX(0%)") ? $("#overlay").css("transform", "translateX(100%)") :$("#overlay").css("transform", "translateX(100%)") ;     
        console.log($("#overlay").css("transform")) ; 
        $('#black-overlay').css('display')=="none" ? $('#black-overlay').css('display','block') : $('#black-overlay').css('display','none') ; 
         


    }) ;
    $('#overlay a').bind('click',()=>{
      
        $("#overlay").css("transform","translateX(0%)") ? $("#overlay").css("transform", "translateX(100%)") :$("#overlay").css("transform", "translateX(100%)") ;    ; 
        console.log($("#overlay").css("transform")) ; 
        $('#black-overlay').css('display')=="none" ? $('#black-overlay').css('display','block') : $('#black-overlay').css('display','none') ; 
        

    }) 
    
    
    
    $.get('https://5d76bf96515d1a0014085cf9.mockapi.io/product', function(data, status) {
    var response = data;
    var inputsearch = document.getElementsByClassName("search-box-res")[0]  ;
    var mainbanner =  document.getElementById("main-banner") ;  
    var everyitemhide = document.getElementById("every") ; 
    var foott = document.getElementById("foot") ; 
    // inputsearch.addEventListener("focus",()=>{
    //     everyitemhide.style.display="none";
        // if (inputsearch.value !== ""){ 
        //     console.log("start") ; 
        //     everyitemhide.style.display=""; 
        // }
        // else{
        //     everyitemhide.style.display="none";  
        // } 
        // foott.style.display="none" ; 
    // })     
    inputsearch.addEventListener("blur",()=>{
        // alert("Good Job")
        everyitemhide.style.display=""; 
        foott.style.display="" ; 
   })   
//    function clickfunction(){
   
//    inputsearch.click() ; 

//    alert("ok")

//    }
   inputsearch.addEventListener("mouseup",()=>{ 
    //    alert("123") ; 
    // location.assign("./index.html#search-box") 
    everyitemhide.style.display="none"; 
    foott.style.display="none" ;
    inputsearch.addEventListener("keyup", ()=>{
        for(var i=0; i<response.length; i++){
          var k = response[i] ; 
          var filter= inputsearch.value.toUpperCase();
          var output= k.name.toUpperCase(); 
          var row=document.getElementsByClassName("product-card");
          var head = document.getElementsByClassName("section-heading") ; 
          var prodimage = document.getElementsByClassName("product-image") ; 
          var prodmeta = document.getElementsByClassName("product-meta") ; 
          var rempad = document.getElementById("clothing-section") ; 
          var rempad1 = document.getElementById("accessory-section") ; 
       
          everyitemhide.style.display=""; 
      
          if(output.indexOf(filter)>-1){ 
           
        // row[i].remove();   
        //  console.log(row[i]) ;  
        //  console.log(response[i].name) ; 
        //  console.log(response[i].description) ; 
        //  console.log(response[i].preview) ;
         
        //  testdiv.innerText = response[i].price ; 
        //  console.log(testdiv) ; 
        //  console.log(test[i]) ; 
        
       
         row[i].style.display=""; 
         mainbanner.style.display="none" ; 
         head[0].style.display="none" ; 
         head[1].style.display="none" ; 
         row[i].style.display="flex" ; 
         row[i].style.alignItems="center" ;
         row[i].style.marginLeft="auto" ;
         row[i].style.marginRight="auto" ;
         row[i].style.borderRadius="5px" ;
         row[i].style.maxWidth="390px" ;
         row[i].style.width="100%" ;
         prodimage[i].style.width="110px" ; 
         prodimage[i].style.height="118px" ; 
         prodimage[i].style.marginLeft="10px" ;
         prodimage[i].style.marginTop="5px" ;
         prodimage[i].style.borderRadius="5px" ; 
         prodmeta[i].style.width="220px" ; 
         rempad.style.padding="0px 4%" ; 
         rempad1.style.padding="0px 4%" ; 
       }
          else{ 
            
            
              row[i].style.display="none"; 
              mainbanner.style.display="none" ; 
              
              head[0].style.display="none" ; 
              head[1].style.display="none" ; 
              row[i].style.backgroundColor="white" ; 
              row[i].style.display="none" ; 
              prodimage[i].style.width="250px" ;
              prodimage[i].style.height="300px" ; 
              row[i].style.alignItems="" ;
              row[i].style.marginLeft="6.5%" ;
              row[i].style.marginRight="0.5%" ;
              row[i].style.borderRadius="5px" ;
              row[i].style.maxWidth="250px" ;
              row[i].style.width="250px" ;
              prodimage[i].style.marginLeft="" ;
              prodimage[i].style.marginTop="" ;
              prodimage[i].style.borderRadius="" ;  
              prodmeta[i].style.width="" ; 
              rempad.style.padding="0px 4%" ; 
              rempad1.style.padding="0px 4%" ; 
          }
          if (inputsearch.value=="") { 
              
            row[i].style.backgroundColor="white" ; 
            row[i].style.display="" ; 
            prodimage[i].style.width="250px" ;
            prodimage[i].style.height="300px" ; 
            row[i].style.alignItems="" ;
            row[i].style.marginLeft="6.5%" ;
            row[i].style.marginRight="0.5%" ;
            row[i].style.borderRadius="5px" ;
            row[i].style.maxWidth="250px" ;
            row[i].style.width="250px" ;
            prodimage[i].style.marginLeft="" ;
            prodimage[i].style.marginTop="" ;
            prodimage[i].style.borderRadius="" ;  
            prodmeta[i].style.width="" ; 
            mainbanner.style.display="" ; 
              
            head[0].style.display="" ; 
            head[1].style.display="" ; 
            rempad.style.padding="4% 4%" ; 
            rempad1.style.padding="4% 4%" ; 
            everyitemhide.style.display="none"; 


          }
        //   .checkout-card {
        //     display: flex;
        //     box-sizing: border-box;
        //     box-shadow: 0 2px 5px #ccc;
        //     border-radius: 5px;
        //     background-color: white;
        //     max-width: 600px;
        //     padding: 14px;
        //     margin-bottom: 16px;
        // } 

      //   .checkout-product-img {
      //     width: 64px;
      //     border-radius: 4px;
      //     margin-right: 16px;
      // }
      
      // .checkout-product-img {
      //     width: 80px;
      //     min-width: 80px;
      //     border-radius: 5px;
      //     margin-right: 16px;
      // } 
    //   .checkout-card h4 {
    //     font-weight: 600;
    //     margin: 0;
    //     margin-bottom: 4px;
    //     font-size: 14px;
    // }
  //   .checkout-card p {
  //     margin: 0;
  //     margin-top: 4px;
  //     margin-bottom: 4px;
  //     font-size: 13px;
  // } 
//   .checkout-card p {
//     margin: 0;
//     margin-top: 4px;
//     margin-bottom: 4px;
//     font-size: 13px;
// } 
//   .del-btn {
//     background-color: #009688;
//     color: white;
//     padding: 6px 20px;
//     outline: none;
//     cursor: pointer;
//     border: none;
//     font-size: 10px;
//     border-radius: 16px;
//     margin-top: 9px;
//     letter-spacing: 0.1px;
//     font-weight: 500;
//     text-align: center;
// }
 
      }

         
      })


})})})