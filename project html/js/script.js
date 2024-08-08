
$(document).ready(function(){
    {
        /**JQuery to load the pages */
        $("#head").load("./meta.html");
        $("#header").load("./header.html");
        $("#footer").load("./footer.html");
    }
});

/*styling contact form inputs using jQuery*/
/*using the key press and key down properties */

/**j query for first name input */
$("#fname").keydown(function(){
$(this).css('background-color','#64686A');
$(this).css('color','white');
});

$("#fname").keyup(function(){
    $(this).css('background-color','#7B8A81');
    $(this).css('color','white');
    });


/**Jquery for last name input */
    $("#lname").keydown(function(){
        $(this).css('background-color','#64686A');
        $(this).css('color','white');
        });
        
        $("#lname").keyup(function(){
            $(this).css('background-color','#7B8A81');
            $(this).css('color','white');
            });

/**j Query for the lat name input */
            $("#contact").keydown(function(){
                $(this).css('background-color','#64686A');
                $(this).css('color','white');
                });
                
                $("#contact").keyup(function(){
                    $(this).css('background-color','#7B8A81');
                    $(this).css('color','white');
                    });
/**JQuery for the mail addres input */
                    $("#mail").keydown(function(){
                        $(this).css('background-color','#64686A');
                        $(this).css('color','white');
                        });
                        
                        $("#mail").keyup(function(){
                            $(this).css('background-color','#7B8A81');
                            $(this).css('color','white');
                            });

/**jQuery for the text area*/
                            $("#write").keydown(function(){
                                $(this).css('background-color','#64686A');
                                $(this).css('color','white');
                                });

                                $("#write").keyup(function(){
                                    $(this).css('background-color','#7B8A81');
                                    $(this).css('color','white');
                                    });

/**JQuery for hover effect the the submit buttons */
    $(".btnsmall").hover(function(){
        $(this).css('background-color','white');
        $(this).css('color','black');
    },
    function(){
        $(this).css('background-color','black');
        $(this).css('color','white');
    });

/**jqry to hide the description when click once on the description */
    $("#hide").click(function(){
        $("#hideto").hide();
    });
    /**JQuery to show the description when dblclicked
     */
    $("#hide").dblclick(function(){
        $("#hideto").show();
    });

    /**J query to show alert box wheen dbl clicked in the send button in contact form */
    $(".dbl").dblclick(function(){
        alert("Please fill the Whole form ,you are redirecting to the home page. Wait for few seconds otherwise click the home button at the top ");
    });
    /**showing alert box when mouse down on button  */
    $(".alert1").mouseup(function(){
        alert("You have become the member of our community");
    });