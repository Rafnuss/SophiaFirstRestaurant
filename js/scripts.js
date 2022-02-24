/*!
* Start Bootstrap - One Page Wonder v6.0.4 (https://startbootstrap.com/theme/one-page-wonder)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-one-page-wonder/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
test_cond=['test1','test2',"test3","test4","test5"]

for (let i = 0; i < test_cond.length; i++) {
    $("#input-"+i).on("input", function() {
        if($(this).val().includes(test_cond[i-1])){
            $("#sec-"+(i+1)).show()
            document.getElementById("sec-"+(i+1)).scrollIntoView();
        }
    });
}

$('#get-started').on("click", function(){
    $("#sec-1").show()
})

