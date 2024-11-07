// $(function () {} )                                           // Asagidaki ile eyni seydir qisa yazilis
$(document).ready(function () {                                 // Bezi yuklenmemis DOM elementlerinin error vermemesi ucun (sayt butun yuklenenden sonra acir)
    "use strict";



    $("Selector").click(function () {
        // ! $(Selector).action();
        $("*")                                                  // Universal Selector
        $(this)                                                 // Select self element
        $(":header, p, .class, #id")                            // Tag selector,Selects all Headers (h1...h6), paragraph, className and ID 
        $("[name='value']")                                     // Selects elements that have the specified attribute with a value exactly equal to a certain value.
        $("[name='value'][name2='value2']")                     // Selects elements that have the specified attributes with a value exactly equal to a certain value.
        $("[name!='value']")                                    // dont have the specified attribute
        $("[name^='value']")                                    // Beginning exactly with a given string.
        $("[name$='value']")                                    // Ending exactly with a given string.
        $("[name~='value']")                                    // Containing a given word
        $("p:contains(Hello)")                                  // P element that has given text
        $("p:not('contains(Hello)')")                           // P element that does not have given text
        $("p:not(#test)")                                       // P element that does not have id="test"
        $("div:has(p)")                                         // Div element that has p element inside
        $(this).hide();                                         // document.querySelector("button").style.display = "none"
        $("p").show();                                          // yuxaridaki ile eynidir display = "block"
        $("ul li:first").hide();                                //  1ci ul icindeki 1ci li taglarini silecek     
        $("ul li:first-child").hide();                          // butun ul icindeki 1ci li taglarini silecek    
        $("a[target]").hide();                                  // Attributesi target olan a taglerini silecek
        $("a[target='_blank']").hide();                         // Attributesi target='_blank' olan a taglerini silecek
        $("a[target !='_blank']").hide();                       // Attributesi target='_blank' olmayan a taglerini silecek
        $("tr:even").css("background-color", "red");            // butun cut tr taglarini qirmizi reng edir
        $("tr:even").css("background-color");                   // butun cut tr taglarinin background deyerini alir
    });



    let count = 0;
    $("input[method='event']").keypress(function () {
        count++;
        $("section#event_methods span").text(count).css({       // .text()  => innerText
            "display": "inline-flex",
            "justify-content": "center",
            "align-items": "center",
            "width": "100px",
            "background-color": "red",
            "color": "#ffffff"
        });
    });



    // Multiple Methods
    $("section#event_methods button.multiple_methods").on({
        "click": function () {
            $(this).css("background-color", "deepskyblue");
        },
        "dblclick": function () {
            $(this).css("color", "red");
        },
        "mouseenter": function () {
            $(this).css("border", "1px solid black").css("padding", "10px 20px");
        }
    });



    $("section#event_methods button.multiple_methods").on("mouseenter mouseleave", function () {            // Eyni anda iki method bas verdi
        alert("MouseEnter or MouseLeave Method happen");
    });


    // ! on() === bind() === live() === delegate()       off() === unbind() === die() === undelegate()     bunlardan sadece on(), off() islet digerleri qaldirildi
    $("Selector").click(function () {
        $("p").off('click');                                // Selector-a click olunanda Paragraph elementinin methodunu legv edir
    });



    $("div.inside").click("button", function () {                                   // Button located insde div.inside element
        alert("You just Clicked the button located in Div.inside element");
    });
    // Todo: OR
    $("div.inside").on("click", "button", function () {
        alert("You just Clicked the button located in Div.inside element");
    });



    $("p.one").one("click", function () {                                // One method only works 1 time
        alert("Works only 1 time that why try to use it with Animation");
        $(this).animate({                                                // Animate eger on ile isleyesdi her clickde bpyuyerdi (rengleri tanimir)
            fontSize: "+=10px",
            fontWeight: "+=300"
        })
    });




    let proxyObj = {
        firstName: "Fuad",
        age: 26,
        proxyFunc: function () {
            $("span.proxy_span").html(`Ad: <strong>${this.firstName}</strong> Yas: <strong>${this.age}</strong>`)      // .html() === innerHTML()
        }
    };
    $('button.proxy_button').click($.proxy(proxyObj, "proxyFunc"));           // ! $.proxy(Object, "Object.function")   Hazir ve ya movcud bir funksiyani ozunde isledir



    let width = $(window).width();
    let height = $(window).height();
    $("span.window_width").text("Width: " + width + "px");
    $("span.window_height").text("Height: " + height + "px");
    $(window).resize(function () {
        let width_resize = $(window).width();
        let height_resize = $(window).height();
        $("span.window_width").text("Width: " + width_resize + "px");
        $("span.window_height").text("Height: " + height_resize + "px");
    });



    $("button.trigger_button").click(function () {
        // $("input.trigger_input").trigger("click");                               // ! $("button.trigger_button") buna click olunanda $("input.trigger_input") bunun click methodunu ise sal
        $("input.trigger_input").trigger("select");                                 // Click olunanda diger element uzerinde method et
    });



    $("p.hover").hover(function () {                                                // Hover function is combination of MouseEnter
        $(this).css({ backgroundColor: "red" });
    }, function () {                                                                // and MouseLeave
        $(this).css({ backgroundColor: "white" });
    });



    $("span.foreach_span").each(function (index) {                                  // ForEach()
        $(this).hover(function (event) {
            $("span.foreach_span_indicator").text(`${index + 1}th span with "${event.target.innerText}" text`);
        });
    });



    // ! Event.type === Method name    Event.which === e.target.key
    $("input.type_which").on("click dblclick mouseenter mouseleave mouseout mousemove keypress keyup keydown", function (event) {
        $("span.type_which_indicator").html(`<br> Method: <strong>${event.type}</strong> <br> Pressed key: <strong>${event.which}</strong>`);
    });



    $("button.hide").click(function () {
        $("p.hide_show").hide();
        $("p.hide_show").hide("slow");
        $("p.hide_show").hide("fast");
        $("p.hide_show").hide(1000);
    });
    $("button.show").click(function () {
        $("p.hide_show").show(1500);
    });
    $("button.toggle").click(function () {
        $("p.hide_show").toggle();
    });
    // Todo: FadeTo-dan basqa butun fadeler display = "none/block"
    $("button.toggle").click(function () {
        $("p.hide_show").fadeIn();
    });
    $("button.toggle").click(function () {
        $("p.hide_show").fadeOut();
    });
    $("button.toggle").click(function () {
        $("p.hide_show").fadeTo(0, 0);                             // Ancaq bir istiqamete gedir opaity = "0" fadeTo(0, 0) time, opacity = 0
        $("p.hide_show").fadeTo("fast", 0.7);
    });
    $("button.toggle").click(function () {
        $("p.hide_show").fadeToggle();
    });



    // ! Callback Function
    $("button.callback_button").click(function () {
        $("p.callback").fadeOut(1000, function () {             // Second function called as Callback Function
            $(this).fadeIn(3000, function () {
                alert("CallBack Function is Completed");
            });
        });
    });



    // ! Slide & Animaiton
    $("#slide_button").click(function () {
        $("#slide_panel").slideToggle("slow");
        // $("#slide_panel").slideDown();
        // $("#slide_panel").slideUp();
    });
    $("#slide_stop_button").click(function () {
        $("#slide_panel").stop();
    });

    $(".animation_button").click(function () {
        $(".animation_box").animate({
            left: "250px",
            opacity: 0.7,
            fontSize: "24px",
            width: "+=50px",
            height: "300px",
            // height: "show",
            // height: "hide",
            // height: "toggle",
            backgroundColor: "lime"                                 // ! Colors do not work
        }, 1500)                                                    // ! Timing Function
            .delay(1500)                                            // ! Delay()
            .animate({                                              // ! Chaining
                left: "552px",
                opacity: 1,
                fontSize: "16px",
                width: "-=50px",
                height: "200px",
            }, "fast");
    });
    $(".animation_stop_button").click(function () {
        $(".animation_box").stop();                                 // ! Stop geriye qaytarir
        // $(".animation_box").clearQueue();                           // ! ClearQueue butun animationlari silir (davam eden animation bitine kimi davam edir)
        // $(".animation_box").finish();                               // ! Finish butun animationlari sonlandirir
    });



    $(".show_text").click(function () {
        $(".show_text_html").text("This is: " + $(".text_html").text());                // * Html etketlerini tanimir 
    });
    $(".show_html").click(function () {
        $(".show_text_html").text("This is: " + $(".text_html").html());
    });
    $(".show_val").click(function () {
        $(".show_text_html").text("This is: " + $(".form_val input:text").val());       // ! Val === value  BUTUN FORM elementlerinin deyerini qaytarir hemde yazdirir
    });
    $(".paste_val").click(function () {
        $(".paste_val_input").val($(".form_val input:text").val().trim());             // !.trim() verilen datanin sag sol bosluqlarini silir
        // $(".paste_val_input").val($.trim($(".form_val input:text").val()));             // !$.trim(data) verilen datanin sag sol bosluqlarini silir
    });


    // ! Attribute
    $(".show_attribute").click(function () {
        $(".display_attribute").text("Attr: " + $(".attribute").attr("href"));
    });
    $(".delete_attribute").click(function () {
        $(".attribute").removeAttr("href")
        $(".display_attribute").text("Removed Attr: " + $(".attribute").attr("href"));
    });

    $(".callback_button").click(function () {
        $(".callback_p").html(function (index, preValue) {                        // ! Callback functionslarda ilk deyer INDEX ikinci deyer Evvelki valuedir
            return "The previous text was: " + preValue + " with index number " + index + "</br> The last text is: <b>Hello World</b>";
        });
    });

    $(".change_attribute_button").click(function () {
        $(".change_attribute").attr("title", "Title succesfully changed");          // * Changing value of Attribute
        $(".change_attribute").attr({                                               // * Multiple Changing value of Attribute
            "title": "Title succesfully changed twice",
            "href": "javascript:void(0)"
        });
    });



    // ! Adding elements
    // todo: append()               elementin (inside) sonuna əlavə edir                    $(ELEMENT).append(TEXT)
    // todo: appendTo()             elementin (inside) sonuna HTML əlavə edir               $(TEXT).appendto(ELEMENT)  only Syntaxsis differs remains are SAME
    // todo: prepend()              elementin (inside) əvvəlinə əlavə edir
    // todo: prependTo()            elementin (inside) əvvəlinə HTML əlavə edir
    // todo: after()                elementin (sibling) sonuna əlavə edir
    // todo: insertAfter()          elementin (sibling) sonuna HTML əlavə edir
    // todo: before()               elementin (sibling) əvvəlinə əlavə edir
    // todo: insertBefore()         elementin (sibling) əvvəlinə HTML əlavə edir
    // todo: clone()                elementi kopyalayir ve evvelce metni koplayadiqi ucun ikinci hissede mekan olmalidir appendTo(), prependTo(), insertAfter(), insertBefore() ile isleyir
    $(".append_button").click(function () {
        $(".added_p").append(" <b>Appended text</b> ");
    });
    $(".appendTo_button").click(function () {
        $("<b>AppendedTo text</b>").appendTo(".added_p");
    });
    $(".prepend_button").click(function () {
        $(".added_p").prepend(" <b>Prepended text</b> ");
    });
    $(".after_button").click(function () {
        $(".added_p").after(" <b>After text</b> ");
    });
    $(".before_button").click(function () {
        $(".added_p").before(" <b>Before text</b> ");
    });
    $(".clone_after_button").click(function () {
        $(".added_p").clone().insertAfter(".added_p");
    });



    // ! Removing elements
    // todo: remove()       elementin (self) silir
    // todo: detach()       elementin (self) silir  (But it keeps all data and event handlers of the removed elements)
    // todo: empty()        elementin (inside, children) silir, (self) qalir
    $(".remove_button").click(function () {
        $(".removed_p").remove();
        // $(".removed_p").remove(".className, #id");
    });
    $(".empty_button").click(function () {
        $(".removed_p").empty();
    });

    // ! Wrap
    // todo: unwrap()                            her clickde elementin parentini silir
    // todo: wrap("<div class="a"></div>")       her clickde elemente () parentini elave edir (heresine ayri ayri parent elave edir)
    // todo: wrapAll("<div class="a"></div>")    her clickde elemente () parentini elave edir (hamisina birlikde tek parent elave edir)
    // todo: wrapInner("<b></b>")                her clickde elementin (inside) parent elave edir 
    $(".unwrap_button").click(function () {
        $(".wrap_p").unwrap();
    });
    $(".wrap_button").click(function () {
        $(".wrap_p").wrap("<div class='wrap_inner_inner_inner'></div>");
    });




    // ! Playing with CSS class elements
    // todo: addClass()       
    // todo: removeClass()
    // todo: toggleClass()
    // todo: hassClass()
    $(".add_class_button").click(function () {
        $(".css_classes h3").addClass("red");
        // $(".css_classes h3").addClass("red green blue");
    });
    $(".remove_class_button").click(function () {
        $(".css_classes h3").removeClass("red");
    });
    $(".toggle_class_button").click(function () {
        $(".css_classes h3").toggleClass("red");
    });
    //*OR
    $(".has_class_button").click(function () {
        if ($(".css_classes h3").hasClass("red")) {
            $(".css_classes h3").removeClass("red");
        } else {
            $(".css_classes h3").addClass("red");
        }
    });
    //* OR
    $(".ternary_class_button").click(function () {
        $(".css_classes h3").attr("class") ? $(".css_classes h3").removeClass("red") : $(".css_classes h3").addClass("red");
    });

    // todo: width()                                                width
    // todo: height()                                               height
    // todo: innerWidth()                                           width + padding            
    // todo: innerHeight()                                          height + padding
    // todo: outerWidth()                                           width + padding + border           
    // todo: outerHeight()                                          height + padding + border
    // todo: outerWidth(true)                                       width + padding + border + margin            
    // todo: outerHeight(true)                                      height + padding + border + margin
    // todo: offset();                                              Window-a gore{top: 1234.567, left: 1234.567} 
    // todo: offsetParent().css();                                  Elementin ana elementine deyisiklik etmek ucun
    // todo: position();                                            Parent-e gore{top: 1234.567, left: 1234.567} 
    $(".width_and_height_button").click(function () {
        let width = $(".width_and_height").width();
        let height = $(".width_and_height").height();
        let innerHeight = $(".width_and_height").innerHeight();
        let innerWidth = $(".width_and_height").innerWidth();
        let outerHeight = $(".width_and_height").outerHeight();
        let outerWidth = $(".width_and_height").outerWidth();
        let outerHeightTrue = $(".width_and_height").outerHeight(true);
        let outerWidthTrue = $(".width_and_height").outerWidth(true);
        let documentWidth = $(document).width();
        let documentHeight = $(document).height();
        let windowWidth = $(window).width();
        let windowHeight = $(window).height();
        let offset = $(".width_and_height").offset();
        let position = $(".width_and_height").position();
        console.log($(".width_and_height").prop())
        let text = `
            Width: <strong>${width}px</strong><br>
            Height: <strong>${height}px</strong><br>
            innerWidth: <strong>${innerWidth}px</strong><br>
            innerHeight: <strong>${innerHeight}px</strong><br>
            outerWidth: <strong>${outerWidth}px</strong><br>
            outerHeight: <strong>${outerHeight}px</strong><br>
            outerWidth(true): <strong>${outerWidthTrue}px</strong><br>
            outerHeight(true): <strong>${outerHeightTrue}px</strong><br>
            documentWidth: <strong>${documentWidth}px</strong><br>
            documentHeight: <strong>${documentHeight}px</strong><br>
            windowWidth: <strong>${windowWidth}px</strong><br>
            windowHeight: <strong>${windowHeight}px</strong><br>
            offset: {top: <strong>${offset.top}px</strong>, left: <strong>${offset.left}px</strong>}<br>
            position: {top: <strong>${position.top}px</strong>, left: <strong>${position.left}px</strong>}<br>`;
        $(".width_and_height_text").html(text);
    });


    // ! Prop Elemente properties elave etmek hemde evvelceden olan propertierini almaq ucun istifade olunur 
    $(".prop_button").click(function () {
        alert($(this).prop("title"));                                                                           // This is Button for Properties
        $(this).prop("title", "This is Updated Button for Properties");
        alert($(this).prop("title"));                                                                           // This is Updated Button for Properties
        $(".prop_div").prop("firstName", "Jquery");                                                             // firstName : "Jquery" prop(key: value) yaratdiq
        $(".prop_div").append("Hello, my name is " + $(".prop_div").prop("firstName") + "<br>");                // Div-in icine propu yazdiq
        $(".prop_div").removeProp("firstName");                                                                 // firstName : "Jquery" prop(key: value) sildik
        $(".prop_div").append("Hello, my name is " + $(".prop_div").prop("firstName") + "<br>");                // Div-in icine propu yazdiq sildiyimiz ucun UNDEFINED verdi
    });


    // ! Replace (eyni seylerdi sadece yazilir ferqi var)
    $(".replace .replace_all").click(function () {
        $("<h1>Hello Jquery</h1>").replaceAll(".replace p");
    });
    $(".replace .replace_with").click(function () {
        $(".replace p").replaceWith("<h1>Hello Jquery</h1>");
        $(".replace p").replaceWith(function () {
            return "<h1>" + $(".replace p").text() + "</h1>";
        });
    });

    // ! When ve Then eger $.ajax() teref Succesfully olarsa Succes functionu isleyecek olmasa ise digeri
    $.when($.ajax("../js/script.js")).then(Success, Error);
    function Succes(){
        $("div").text("File Succesfully Uploaded");
    }
    function Error(){
        $("div").text("File has not Found");
    }


    // ! Scroll
    $(".scroll_button").click(function () {
        let scrollTop = $(".scroll").scrollTop();
        let scrollLeft = $(".scroll").scrollLeft();
        $(".scroll_measure").html(`
            scrollTop: ${scrollTop}px<br>
            scrollLeft: ${scrollLeft}px`);
    });



    // ! Traversing (DOM tree-de butun parent, children, sibling elaqelendirmeleri ve ya gezinmeleri)
    // ! Anchestor
    // todo: parent()                                              elementin parentini gosterir
    // todo: parents()                                             elementin butun parentinilerini gosterir (<html> ulu babaya qeder)
    // todo: parentsUntil("<div class="section_one"></div>")       elementin butun parentinilerini gosterir (section_one-a qeder)
    // todo: closest()                                             elementin en yaxin ata elementini gosterir, parentsUntil-den ferqi tek element gostermesidir 
    // todo: offsetParent()                                        elementin ilk position absolute olan parent elementini gosterir
    // ! Descendants
    // todo: children()                                            elementin child elementini gosterir
    // todo: find()                                                elementin specific olaraq istediyimiz child elementini gosterir
    // todo: contents()                                            elementin child (content ile) elementini gosterir
    // ! Siblings
    // todo: siblings()                                            elementin butun siblingslerini gosterir
    // todo: next()                                                elementden sonraki ilk siblingi gosterir
    // todo: nextAll()                                             elementden sonraki butun siblingsleri gosterir
    // todo: nextUntil()                                           elementden sonra secilen elemente qeder butun siblingsleri gosterir
    // todo: prev()                                                elementden evvelki ilk siblingi gosterir           
    // todo: prevAll()                                             elementden evvelki butun siblingsleri gosterir
    // todo: prevUntil()                                           elementden evvel secilen elemente qeder butun siblingsleri gosterir
    // ! Filtering
    // todo: first()                                               coxlu sayda varsa eyni elementden ilkini getirir                                      
    // todo: last()                                                coxlu sayda varsa eyni elementden sonuncunu getirir  
    // todo: eq()                                                  coxlu sayda varsa eyni elementden indexine gore getirir  
    // todo: get()                                                 coxlu sayda varsa eyni elementden indexine gore getirir  
    // todo: index()                                               secilen elementin indexini gosterir 
    // todo: filter()                                              coxlu sayda varsa eyni elementden class, id, tagname, text-e gore getirir  
    // todo: not()                                                 coxlu sayda varsa eyni elementden class, id, tagname-ye gore olmuyani getirir (Filter metodunun eksidir)  
    // todo: add()                                                 $("h2").add("p").add("span").css("color", "red") H2-ye uyguladiqi css p ve span-a da uygulandi
    // todo: each()                                                javascript forEach() methodu ile eyni seydir ama jquery-de each(function(index, item, array)) olur NOT: (index, item)
    // todo: map()                                                 javascript map() methodu ile eyni seydir ama jquery-de map(function(item, index, array)) olur      NOT: (item, index)
    // todo: slice()                                               javascript slice() methodu ile eyni seydir
    // todo: end()                                                 bir elementle islerini bitirib diger elementle isler gormek isteyende bunu istifade et
    // todo: has()                                                 icinde hemin elementden olan elementleri gosterir  
    // todo: is()                                                  hemin elementin parent, child ya da sibling olduqunu ve yaxud basqa seyleri sert ile sorusanda TRUE & FALSE cavablar alir

    $(".t_button").click(function () {
        console.log(($(this).parent()));                           // {0: "a.t_a", prevObject: {0: "button.t_button"}}
        console.log(($(this).parents()));                          // {0: "a.t_a", 1: "li.t_li", 2: ul.t_ul, ... , 5: div.container, 6: body, 7: html, prevObject: {0: "button.t_button"}}
        console.log(($(this).parentsUntil("div.traversing")))      // Ilk gorduyu <div class='traversing'></div> qeder butun parents  {0: "a.t_a", 1: "li.t_li", 2: "ul.t_ul", 3: "div.t_list"}
        console.log(($(this).closest("ul.t_ul")))                  // Nested UL olsaydi ilk gorduyu ul parent olacaqdi {0: "ul.t_ul", length: 1, prevObject: {0: "button.t_button"}}
        $(this).parent().css({                                     // ! Ilk parent elementine CSS tedbiq etmek
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "200px",
            height: "200px",
            backgroundColor: "deepskyblue",
        });
        $(this).parents("ul").css({                                 // ! Ilk parent ul elementine CSS tedbiq etmek ve burada istediyimiz parent elementin adini yaza bilerik
            "list-style": "none",
            padding: "20px",
            backgroundColor: "yellow"
        });
    });

    $(".t_descendants").click(function () {
        console.log(($(this).children()));                                  // {0: "ul", length: 1, prevObject: {0: "div.t_descendants", length: 1}}
        console.log(($(this).children().children()));                       // {0: "li", length: 1, prevObject: {0: "ul", length: 1, prevObject: {0: "div.t_descendants", length: 1}}}
        console.log(($(this).children().children().children()));            // {0: "a", length: 1,  prevObject: {0: "li", length: 1, prevObject: {0: "ul", length: 1} ....}}
        $(this).children("ul").css({                                        // ! elementin 2 ve daha artiq children-i varsa specific olaraq ul elementine css tedbiq etdik
            "list-style": "none",
            padding: "20px",
            backgroundColor: "yellow"
        });
        $(this).find("a")                                                  // {0: "a", length: 1, prevObject: {0: "div.t_descendants", length: 1}}
            .html(`<b>Hello Jquery</b>`)                                   // Hemin secilen a taginie tetbiq edilir
            .css("color", "red");
        console.log($(this).contents())
    });

    $(".t_siblings .t_siblings_button").click(function () {
        console.log($(this).siblings());                             // {0:h1, 1:h2, ... 6:p, 7:ul, ... 12:span, length: 13, prevObject: {0: "button.t_siblings_button", length: 1}}
        console.log($(this).next());                                 // {0:p, length: 1, prevObject: {0: "button.t_siblings_button", length: 1}}
        console.log($(this).nextAll());                              // {0:p, 1:ul, 2:li, 3:article, 4:a, 5:img, 6:span, length: 7, prevObject: {0: "button.t_siblings_button", length: 1}}
        console.log($(this).nextUntil("article"));                   // {0:p, 1:ul, 2:li, length: 3, prevObject: {0: "button.t_siblings_button", length: 1}}
        console.log($(this).prev());                                 // {0:h6, length: 1, prevObject: {0: "button.t_siblings_button", length: 1}}
        console.log($(this).prevAll());                              // {0:h6, 1:h5, 2:h4, 3:h3, 4:h2, 5:h1, length: 6, prevObject: {0: "button.t_siblings_button", length: 1}}
        console.log($(this).prevUntil("h3"));                        // {0:h6, 1:h5, 2:h4, length: 3, prevObject: {0: "button.t_siblings_button", length: 1}}
        $(this).siblings('h4').html(`<b>Hello Jquery</b>`).css("color", "red");
    });

    let divs = $(".t_filtering div");
    divs.first().css("backgroundColor", "yellow");
    divs.last().css("backgroundColor", "red");
    divs.eq(1).css("backgroundColor", "deepskyblue");
    divs.filter(".filter_className, #filter_className").css("backgroundColor", "lime");
    divs.not(".filter_className, #filter_className").css("color", "white");
    divs.each(function (index, item) {
        console.log(index, item);
    });
    // divs.each((index, item) => console.log(index, item));             // ! Arrow Functions
    let array = [3, 6, 2, 5, 7];
    array.map((item, index, array) => console.log(`Index: ${index} => Item: ${item * item} => Array: ${array}`));
    console.log(array.slice());                                         // ! (5) [3, 6, 2, 5, 7] Shallow copy  
    console.log(array.slice(0));                                        // ! (5) [3, 6, 2, 5, 7] Shallow copy  
    console.log(array.slice(1));                                        // ! (4) [6, 2, 5, 7]    Index 1-den basla daxil et saga qeder
    console.log(array.slice(2));                                        // ! (3) [2, 5, 7]       Index 2-den basla daxil et saga qeder
    console.log(array.slice(1, 3));                                     // ! (2) [6, 2]          Index 1-den basla 3-e qeder daxil et saga qeder
    console.log(array.slice(-1));                                       // ! (1) [7]             Index en sondan 1ci basla daxil et saga qeder
    console.log(array.slice(-2));                                       // ! (2) [5, 7]          Index en sondan 2ci basla daxil et saga qeder
    console.log(array.slice(1, -2));                                    // ! (2) [6, 2]          Index 1-den basla daxil et en sondan 2ci-ye qder saga dogru

    divs.first().css("fontSize", "8px")
        .end()                                                           // Hemin element ucun isivi bitirib basqa element ucun davam etmek isteyende
        .last().css("fontSize", "50px")
        .end()
        .eq(2).css("fontWeight", 900);
    divs.has("span").css("textDecoration", "underline");
    console.log(divs.first().parent().is("div.t_filtering"));           // todo: true
    console.log(divs.first().parent().is("div.t_siblings"));            // todo: false

    $(".offset_button").click(function () {
        console.log($(".offsetParent p").offsetParent());
    });


    // ! Filter and Toggle 
    // todo: buradaki toggle() true/false cavab qaytarir
    $(".filterInput").on("keypress", function () {
        let find = $(this).val().toLowerCase();
        $(".filterDiv *").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(find) > -1);
        });
    });



    // ! data()             secilen elemente evvelce data elave edir  data(key, value) sonra ise oxuyur data(key)
    // ! removeData()       secilen elemente alve edilen datani silir data(key)
    $(".add_data").click(function () {
        $("#data").data("DATA", "Kurtlar Vadisi");
    });
    $(".remove_data").click(function () {
        $("#data").removeData("DATA");
    });
    $(".get_data").click(function () {
        alert($("#data").data("DATA"));
    });


    // ! length
    // ! toArray()
    console.log($("button").length);
    console.log($("button").toArray());


    // ! CreateElement with html() in Jquery
    $(".createElement_button").click(function () {
        $(".createElement").html(
            $("<h2></h2>",
                {
                    class: "createdClass",
                    id: "createdID",
                    text: "Hello, I am created Header 2",
                    "data-name": "Fuad",
                    css: {
                        backgroundColor: "red",
                        color: "white"
                    }
                }
            )
        );
    });


    // ! $.merge(array1, array2)                array2-ni array1-e birlesdirir    
    // ! $.grep(data, callback)                 data daxilinde bir nov slice etmek ucun istifade olunur
    let array1 = ["F", "u", "a", "d"];
    let array2 = ["B", "a", "b", "a", "y", "e", "v"];
    let arrayMerge = $.merge(array1, array2);
    console.log(arrayMerge);
    $("body").append(arrayMerge.join(" "));
    let arratGrep = $.grep(arrayMerge, function (item, index) {
        // return index < 4;
        return item != "a";
    });
    console.log(arratGrep)
});


// // ! $.noConflict()     $ === jQuery
// jQuery(function () {
//     jQuery(".noConflict").click(function () {
//         jQuery(".noConflict_text").text("Jquery work even if it has not $");
//     });
// });
// // * OR
// let Fuad = $.noConflict();
// Fuad(function () {
//     Fuad(".noConflict").click(function () {
//         Fuad(".noConflict_text").text("Jquery work even if it has not $");
//     });
// });