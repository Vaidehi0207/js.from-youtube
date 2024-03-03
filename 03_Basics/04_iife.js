//IMMEDIATELY INVOKED FUNCTION EXPRESSION

(function chai() {
    console.log(`DB Connected`);
}) ();

(function more() {
    console.log(`DB Connected two`);
}) ();

( (name) => {
    console.log(`DB Connected two ${name}`);
}) ("Vaidehi")