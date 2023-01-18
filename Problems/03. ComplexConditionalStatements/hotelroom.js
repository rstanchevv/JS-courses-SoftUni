function hotelRoom(input){
    let month = input[0];
    let countNights = Number(input[1]);

    let studioPrice = "";
    let appPrice = "";
    let resultStudio = "";
    let resultApp = "";
    let discountStudioPrice = "";
    let discountAppPrice = "";

    if (month === "May" || month === "October"){
        studioPrice = 50.00;
        appPrice = 65.00;
        resultStudio = (countNights * studioPrice).toFixed(2)
        resultApp = (countNights * appPrice).toFixed(2)
        if (countNights > 7 && countNights <= 14){
            discountStudioPrice = studioPrice * 0.95;
            resultStudio = (countNights * discountStudioPrice).toFixed(2);
        } else if (countNights > 14){
            discountStudioPrice = studioPrice * 0.70;
            discountAppPrice = appPrice * 0.90
            resultStudio = (countNights * discountStudioPrice).toFixed(2);
            resultApp = (countNights * discountAppPrice).toFixed(2);
        }
    } else if (month === "June" || month === "September"){
        studioPrice = 75.20;
        appPrice = 68.70;
        resultStudio = (countNights * studioPrice).toFixed(2)
        resultApp = (countNights * appPrice).toFixed(2)
        if (countNights > 14){
            discountStudioPrice = studioPrice * 0.80;
            discountAppPrice = appPrice * 0.90;
            resultStudio = (countNights * discountStudioPrice).toFixed(2);
            resultApp = (countNights * discountAppPrice).toFixed(2);
        }
    } else if (month === "July" || month === "August"){
        studioPrice = 76.00;
        appPrice = 77.00;
        resultStudio = (countNights * studioPrice).toFixed(2)
        resultApp = (countNights * appPrice).toFixed(2)
        if (countNights > 14){
            discountAppPrice = appPrice * 0.90
            resultApp = (countNights * discountAppPrice).toFixed(2);
        }
    }
    console.log(`Apartment: ${resultApp} lv.`)
    console.log(`Studio: ${resultStudio} lv.`)
}
hotelRoom(["June", "14"])