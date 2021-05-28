let stage = 0
function sayNope(){
    $('#wrapper').html("<p>Nope. </p>");
}

$('#main_input').submit((e) => {
    e.preventDefault();

    let field = $('#input_field');
    let submitted = field.val();
    let image = $('#image');

    switch (stage) {
        case 0:
            if (submitted === "2421") {
                image.hide();
                $('#text').text("Jak musí Áňa vykrmit Matěje, aby se pod ním 3m dlouhé prkno " +
                    "o šířce 0.5m a výšce 40mm prohnulo o 21.6mm. Modul pružnosti prkna je 11GPa. Uvažujte prkno " +
                    "podepřené jako prostý nosník a tíhové zrychlení zaokrouhlené na celá čísla. " +
                    "Vlastní tíhu prkna zanedbejte. " +
                    "Kód je přesný výsledek v kilogramech napsaný bez desetinné čárky.");
                field.val('');
                stage = 1;
            } else {
                sayNope();
            }
            break;
        case 1:
            if (submitted === "11264") {
                image.show();
                image.attr('src', 'img/hlav2.jpg');
                $('#text').text("Součet:");
                field.val('');
                stage = 2;
            } else {
                sayNope();
            }
            break;
        case 2:
            if (submitted === "3089"){
                image.hide();
                $('#text').text("Kuchařka v Lomech u Kunžaku byla paní _____. Odpověď napište malými písmeny " +
                    "bez háčků a čárek. ");
                field.val('');
                stage = 3;
            } else {
                sayNope();
            }
            break;
        case 3:
            if (submitted === "cachodska" || submitted === "cachotska") {
                image.remove();
                $('#text').text("50°06'08.0\"N 14°21'57.4\"E");
                $('#clickable').remove();
                field.remove();
            } else {
                sayNope();
            }
            break;

    }
});