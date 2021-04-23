let stage = 0
function sayNope(){
    $('#inner').html("<p>Nope. </p>");
}

$('#main_input').submit((e) => {
    e.preventDefault();

    let field = $('#input_field');
    let submitted = field.val();

    switch (stage) {
        case 0:
            if (submitted === "2421") {
                $('#image').attr('src', 'img/hlav2.jpg');
                $('#text').text("Součet:");
                field.val('');

                stage = 1;
            } else {
                sayNope();
            }
            break;
        case 1:
            if (submitted === "3089") {
                $('#image').remove();
                $('#text').text("50°06'08.0\"N 14°21'57.4\"E");
                field.remove();
            } else {
                sayNope();
            }
            break;
    }
});