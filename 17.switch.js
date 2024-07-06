//++++++++++++++++++++++++++++++++ Switch Case +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
    Syntax:-

    switch (key) {
        case value:
            
            break;

        default:
            break;
    }

*/
//Value can be any type


let month = 4
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    default:
        console.log("Other Month");
        break;
}
//Note: If we don't put break statement it will run all the below codes from where the case is matched except default case.


month = "feb"
switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("February");
        break;
    case "mar":
        console.log("March");
        break;
    case "apr":
        console.log("April");
        break;
    default:
        console.log("Other Month");
        break;
}