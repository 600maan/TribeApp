// Add CSRF token to every ajax request header
$.ajaxSetup({
    beforeSend: function(xhr, settings) {
        xhr.setRequestHeader("X-CSRF-Token", window.csrfToken);
    }
});

// Local machine
var baseURL = "http://localhost:8000/";
// Production machine
// var baseURL = "http://142.93.188.20:8000/";
var tribeApp = {
    getTribes : function(callback) {
                        $.ajax({
                            method  : "GET",
                            url     : baseURL + "tribeapp/tribeslist/",
                            success : callback,
                            error   : function (err){ console.log("error"); }
                        });
    },
    getMyTribes : function(callback) {
                        $.ajax({
                            method  : "GET",
                            url     : baseURL + "tribeapp/mytribeslist/",
                            success : callback,
                            error   : function (err){ console.log("error"); }
                        });
    },
    createTribe : function() {
            // Read create tribe fields
            var tribe_name = $('#tribe_name').val();
            var tribe_description = $('#tribe_description').val();
            var tribe_location = $('#tribe_location').val();
            var tribe_member_count = $('#tribe_member_count').val();
            var tribe_tags = $('#tribe_tags').val();
            var tribe_logo = $('#tribe_logo')[0].files;
            var tribe_owner = $('#loggedinuserid').val();

            let formData = new FormData();

            formData.append('tribe_name', tribe_name);
            formData.append('tribe_description', tribe_description);
            formData.append('tribe_location', tribe_location);
            formData.append('tribe_member_count', tribe_member_count);
            formData.append('tribe_tags', tribe_tags);
            formData.append('tribe_logo', tribe_logo[0], tribe_logo[0].name);
            formData.append('tribe_owner',tribe_owner);

            $.ajax({
                method  : "POST",
                url     : baseURL + "tribeapp/tribeslist/",
                data    : formData,
                contentType: false,
                processData: false,
                success :  tribeApp.createTribeSuccess,
                error : function (err){ console.log("error"); }
            });

    },
    createUser : function() {
            // Read create tribe fields
            var username = $('#username_signup').val();
            var email = $('#email_signup').val();
            var password = $('#password_signup').val();

            let formData = new FormData();

            formData.append('username', username);
            formData.append('email', email);
            formData.append('password', password);

            $.ajax({
                method  : "POST",
                url     : baseURL + "tribeapp/register/",
                data    : formData,
                contentType: false,
                processData: false,
                success :  tribeApp.createUserSuccess,
                error : function (err){ console.log("error"); }
            });

    },
    loginUser : function() {
            // Read create tribe fields
            var username = $('#username_login').val();
            var email = $('#email_login').val();
            var password = $('#password_login').val();

             let formData = new FormData();

            formData.append('username', username);
            formData.append('email', email);
            formData.append('password', password);

            $.ajax({
                method  : "POST",
                url     : baseURL + "tribeapp/userlogin/",
                data    : formData,
                contentType: false,
                processData: false,
                success :  tribeApp.loginUserSuccess,
                error : function (err){ console.log("login failed"); }
            });

    },
    displayTribes : function(data) {
        var tt = "";
        for(i=0; i<data.length;i++){
                tt += "<div class=\"media m-b-30\">"
                tt += "<img class=\"d-flex mr-3\" src=\" "+ data[i]["tribe_logo"] + "\" height=\"80\">"
                tt += "<div class=\"media-body\">"
                tt +=  "<h5 class=\"mt-0 font-18\">" + data[i]["tribe_name"]
                tt += "<span class=\"badge badgetags badge-pill badge-info\">" + data[i]["tribe_tags"] + "</span>"
                tt+= "<button type=\"button\" class=\"btn btn-sm pull-right\">Join</button>"
                tt += "</h5>"
                tt += data[i]["tribe_description"] + "</div></div>"
        }
        $("#tribe_list_area").html(tt);
    },
    displayMyTribes : function(data) {
        var tt = "";
        for(i=0; i<data.length;i++){
                tt += "<div class=\"media m-b-30\">"
                tt += "<img class=\"d-flex mr-3\" src=\" "+ data[i]["tribe_logo"] + "\" height=\"80\">"
                tt += "<div class=\"media-body\">"
                tt +=  "<h5 class=\"mt-0 font-18\">" + data[i]["tribe_name"]
                tt += "<span class=\"badge badgetags badge-pill badge-info\">" + data[i]["tribe_tags"] + "</span>"
                tt+= "<button type=\"button\" class=\"btn btn-sm pull-right\">Join</button>"
                tt += "</h5>"
                tt += data[i]["tribe_description"] + "</div></div>"
        }
        $("#tribe_list_area").html(tt);
    },
    createTribeSuccess : function(data) {
        alert("Tribe created succesfully");
        window.location.replace( baseURL + "tribeapp/list/")
        },
    createUserSuccess : function(data) {
        alert("New User Account created succesfully");
        window.location.replace(baseURL + "tribeapp/list/")
        },
    loginUserSuccess : function(data) {
        if(data["login"]=="success"){
            alert("User logged in succesfully");
            window.location.replace( baseURL + "tribeapp/list/");
        }else{
            alert("Login Unsuccessful. Inavlid Credentials");
            window.location.replace( baseURL + "tribeapp/index/");
        }
        }
}

