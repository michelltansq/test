$(document).ready(function () {
    $("#idCountry").change(function () {
        var id = $(this).val();
        $.ajax({
            data: "id=" + id,
            type: "GET",
            url: "getCountryDetails.php",
            cache: false,
            dataType: "JSON",
            success: function (response) {
                console.log(response);
                var message = "<thead><tr><th>Population</th><th>Obese</th></tr></thead><tbody>";
                response.forEach(response => {
                message += "<tr><td>" + response.population + "</td>" + "<td>" + response.obese + "</td></tr>";
                });
                message += "</tbody>";
                $("#obeseTable").html(message);
            },
            error: function (obj, textStatus, errorThrown) {
                console.log("Error " + textStatus + ": " + errorThrown);
            }
        });
    });
});
