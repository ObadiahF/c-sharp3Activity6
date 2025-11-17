/*
    * Obadiah Fusco
    * Activety 4
    * CST-350
    * 10/26/25
*/

// Attach a click event handler to all tags with the game-button class
$(document).on("click", ".game-button", function (event) {
    // Prevent the default action of the click
    event.preventDefault();

    // Get the button and button ID
    const button = $(this);
    const buttonValue = button.val();;
    //// Show the user that the click handling is being done using AJAX
    //alert("The button click event is being handled by AJAX instead of the form submit. You clicked item " + buttonValue + ".");

    $.ajax({
        // Specify the type of request
        type: "POST",
        // Specify the URL to handle the request
        url: "/Button/HandlePartialPageButtonClick",
        // Specify the data to send
        data: {
            // Send the value of the clicked button
            buttonId: buttonValue
        },
        // Specify what to do when the request returns data
        success: function (partialPageHtml) {
            alert(partialPageHtml)
            button.replaceWith(partialPageHtml);
        },
         error: function(jqXHR, textStatus, errorThrown) {
             console.error(`AJAX error: ${errorThrown}`);
         }
    });
});


// Right Mouse click
$(document).ready(() => {
    $(document).on("contextmenu", ".game-button", function (e) {
        e.preventDefault();

        const buttonId = $(this).data("id");

        $.ajax({
            type: "GET",
            url: "/Button/GetRightClickModal",
            data: { buttonId: buttonId },

            success: function (modalHtml) {
                $("#button-info-modal").remove();
                $("body").append(modalHtml);
                const modal = new bootstrap.Modal(document.getElementById("button-info-modal"));
                modal.show();
            },

            error: function (xhr, status, error) {
                console.error("An error occurred: " + error);
            }
        });
    });
});
