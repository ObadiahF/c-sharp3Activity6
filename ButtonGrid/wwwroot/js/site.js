// Right Mouse click
$(document).ready(() => {
    $(document).on("contextmenu", ".game-button", function (e) {
        e.preventDefault();

        const buttonId = $(this).data("id");e

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
