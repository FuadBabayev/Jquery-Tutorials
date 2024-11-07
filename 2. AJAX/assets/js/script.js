$(document).ready(function () {
    "use strict";

    // ! AJAX (Asynchronous JavsScript and XML) 
    // * Web saytlarin butun sehifelerinin yeniden yuklenmeden Render olunmasi demekdir
    // * React-daki state management ile eyni seydir sehife refresh olunmadan render olunur
    // * load() funksiyasi mutleq yazilmalidir ki hemin hisse yuklenenden sonra baslasin AJAX yoxsa hemin yeri tapmayacaq ve yukleye bilmiyecek
    // * AJAX-la isleyen zaman mutleq LIVE_SERVER ile isle ve src her zaman / ile en basdan baslat
    // todo: $(Selector).load(URL, data, function(responseTxt, statusTxt, xhr){})
    // todo: responseTxt    Response donerse onun valuedir          URL filesinde olan butun metinler
    // todo: statusTxt      Requestin statusu                       success, error    
    // todo: xhr            XMLHttpRequest                          {readyState: 4, getResponseHeader: ƒ, getAllResponseHeaders: ƒ, setRequestHeader: ƒ, overrideMimeType: ƒ, …}

    $(".show_result").click(function () {
        // $("div#result").load("/assets/document/ajax.txt");          // ! Butun metni getirdi
        // $("div#result").load("/assets/document/ajax.txt h1");       // ! Lazim olan metni getirdi
        // $("div#result").load("../document/ajax.txt");               // ! Bu cur olanda qebul etmir her zaman / qoyub en basa get AJAX-da
        $("div#result").load("/assets/document/ajax.txt", function (responseTxt, statusTxt, xhr) {
            if (statusTxt == "success") {
                alert("File Succesfully Upload");
            } else if (statusTxt == "error") {
                alert("Error: " + xhr.status + " " + xhr.statusText);                         // Error: 404 Not Found
            }
        });
    });


    // ! GET and POST Methods
    // todo: $.get(URL, function(data, status){});
    // todo: $.post(URL, data, callback);
    $(".get_result").click(function () {
        $.get("/assets/document/ajax.txt", function (data, status) {
            $("div#result").html(`Status: <b>${status}</b><br> Data: ${data}`);
        });
    });

    $(".post_result").click(function () {
        $.post("/assets/document/ajax.php", { firstName: "Fuad", lastName: "Babayev" }, function (data, status) {
            $("div#result").html(data);
        });
    });

    // ! Ajax()
    $(".ajax_result").click(function () {
        $.ajax({
            url: "/assets/document/ajax.txt",
            success: function (result) {
                $("div#result").html(result);
            }
        });
    });

    // ! AjaxSetup()    yuxaridaki ile eyni seydir sadece funksiya kimi en sonda cagirirsan
    $(".ajaxSetup_result").click(function () {
        $.ajaxSetup({
            url: "/assets/document/ajax.txt",
            success: function (result) {
                $("div#result").html(result);
            }
        });
        $.ajax();
    });

    // ! getJSON()
    $(".getJson_result").click(function () {
        $.getJSON("/assets/document/ajax.json", function (result) {
            $("div#result").html(`Name: ${result.firstName} <br>
                Surname: ${result.lastName} <br>
                Age: ${result.age} <br>
                Countyr: ${result.country}`);
        });
    });

    // ! JSON.parse() it deserializes a JSON string into a JavaScript object.
    $(".jsonParse_result").click(function () {
        $.getJSON("/assets/document/ajax.json", function (result) {
            let json = '{"firstName": "Fuad","lastName": "Babayev","age": 26,"country": "Azerbaijan"}';
            let obj = JSON.parse(json);
            $("div#result").html(`Name: ${obj.firstName} <br>
                Surname: ${obj.lastName} <br>
                Age: ${obj.age} <br>
                Countyr: ${obj.country}`);
        });
    });

    // ! getScript() it deserializes a JSON string into a JavaScript object.
    $(".getScript_result").click(function () {
        $.getScript("/assets/document/ajax.js");
    });

    // ! $.param() Objectleri URL kimi param kimi yazir metin kimi goture bilir hetta
    $(".param_result").click(function () {
        let obj = new Object();
        obj.firstName = "Fuad";
        obj.lastName = "Babayev";
        obj.age = 26;
        obj.country = "Azerbaijan";
        $("div#result").text($.param(obj));
    });




    // ! ajaxStart()
    // ! ajaxComplete()
    // ! ajaxSuccess()
    // ! ajaxError()
    // ! ajaxSend()
    // ! ajaxStop()
    // ! load()
    $(document).ajaxStart(function () {
        $("#loading").css("display", "block");
    });
    $(document).ajaxComplete(function () {
        $("#loading").css("display", "none");
    });
    $(document).ajaxSuccess(function () {
        alert("Ajax Succesfully Completed");
    });
    $(document).ajaxError(function () {
        alert("Ajax Not Found");
    });
    $(document).ajaxSend(function () {
        $("p.illustrate").text("Sending request...");
    });
    $(document).ajaxStop(function () {
        $("p.illustrate").text("Sending request...");
    });
    $(".ajax_button").click(function () {
        $("p.illustrate").load("/assets/document/ajax.txt");
    });


    // ! serialize()         form elementlerinin deyerlerini URL paramdaki kimi string veziyyetde gosterir (firstName=Fuad&lastName=Babayev)
    // ! serializeArray()    eyni seydir sadece Array formatinda getirir 
    $(".submit").click(function () {
        $(".form_results").text($("form").serialize());
        console.log($("form").serialize());
    });
    $(".submitAll").click(function () {
        // $("form").serializeArray().each((index, item) => console.log(index, item));          Array.form qaytardiqi ucun forEach-a bu cur salmaq olmur evezinde
        $.each($("form").serializeArray(), function (index, item) {
            $(".form_results").append(`№${index}: ${item.name} ${item.value}<br>`);
            console.log(item)
        });
    });
}); 