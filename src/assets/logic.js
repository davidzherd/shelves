export let priceConfig = {
    heavyDibblePrice: 40,
    lightDibblePrice: 30,
    heavyDibbleDistance: 25,
    lightDibbleDistance: 25,
    woodPrice:{level1_14cm: 1, level2_14cm: 1.2, level3_14cm: 1.5, level4_14cm: 1.75, level1_27cm: 1.4,
        level2_27cm: 1.68, level3_27cm: 2.1, level4_27cm: 2.45}, max_depth: 27

};
export const getData = async()=>{
    const request = await fetch("https://x8ki-letl-twmt.n7.xano.io/api:sQvFNZLW/daniel_pricing");
    const rawData = await request.json();
    const data = rawData[0];
    console.log(data);
    const newConfig = {heavyDibblePrice: parseFloat(data.heavy_dibble_price_10), lightDibblePrice: parseFloat(data.light_dibble_price), heavyDibbleDistance: parseFloat(data.heavy_10_dibble_distance), lightDibbleDistance: parseFloat(data.light_dibble_distance), woodPrice:{level1_14cm: parseFloat(data.wood_price.level1_14cm), level2_14cm: parseFloat(data.wood_price.level2_14cm), level3_14cm: parseFloat(data.wood_price.level3_14cm), level4_14cm: parseFloat(data.wood_price.level4_14cm), level1_27cm: parseFloat(data.wood_price.level1_27cm), level2_27cm: parseFloat(data.wood_price.level2_27cm), level3_27cm: parseFloat(data.wood_price.level3_27cm), level4_27cm: parseFloat(data.wood_price.level4_27cm)}, max_depth: data.max_depth };
    priceConfig = {...newConfig};
}
export const getAuth = async(email, password)=>{
    const request = await fetch(`https://x8ki-letl-twmt.n7.xano.io/api:sQvFNZLW/auth/login?email=${email}&password=${password}`,{method: "post"});
    const authToken = await request.json();
    return authToken.authToken;
}
export const validateAuth = async(token)=>{
    const request = await fetch("https://x8ki-letl-twmt.n7.xano.io/api:sQvFNZLW/auth/me",{headers:{
        'Authorization': ('Bearer ' + token)
    }});
    const valid = request.status;
    return valid;
}

export const calculateTotalPrice = (shelfLength, shelfDepth, conseeledInstallation, isHeavyDibble) =>{
const shelfPrice = calculateShelfPrice(shelfLength, shelfDepth);
if (typeof(shelfPrice) != "number"){
    return shelfPrice;
}
let installationDetails = {price:0, dibbles:0};
if (conseeledInstallation){
    const installationDetailsCalc = calculateInstallationPrice(isHeavyDibble, shelfLength, shelfDepth);
    if (installationDetailsCalc.dibbles >= 2){
        installationDetails = {...installationDetailsCalc}
    }else{
        installationDetailsCalc.dibbles = 2
        installationDetails = {...installationDetailsCalc}
    }
}
return {total:(shelfPrice + installationDetails.price), shelfPrice: shelfPrice, installationPrice: installationDetails.price, amountOfDibbles: installationDetails.dibbles};
};
const calculateInstallationPrice = (isHeavyDibble, length, shelfDepth) =>{
    console.log(`heavy: ${isHeavyDibble}, heavy distance: ${priceConfig.heavyDibbleDistance}, light distance: ${priceConfig.lightDibbleDistance}`)
    let price =0;
    
    return isHeavyDibble ? {price:(Math.round(length/priceConfig.heavyDibbleDistance) * priceConfig.heavyDibblePrice + price), dibbles:Math.round(length/priceConfig.heavyDibbleDistance)} : {price:(Math.round(length/priceConfig.lightDibbleDistance) * priceConfig.lightDibblePrice + price), dibbles: Math.round(length/priceConfig.lightDibbleDistance)};
}
const calculateShelfPrice = (shelfLength, shelfDepth)=>{
    let price = 0;
    
    if (shelfDepth < 15){
        if (shelfLength <= 100){
            price = shelfLength * priceConfig.woodPrice.level1_14cm;
            }else if (shelfLength > 100 && shelfLength <= 150){
            price = 100 * priceConfig.woodPrice.level1_14cm + (shelfLength-100) * priceConfig.woodPrice.level2_14cm;
            }
            else if (shelfLength > 150 && shelfLength <= 200){
            price = 100 * priceConfig.woodPrice.level1_14cm + 50 * priceConfig.woodPrice.level2_14cm + (shelfLength-150) * priceConfig.woodPrice.level3_14cm;
            }
            else{
            price = 100 * priceConfig.woodPrice.level1_14cm + 50 * priceConfig.woodPrice.level2_14cm + 50 * priceConfig.woodPrice.level3_14cm + (shelfLength-200) *priceConfig.woodPrice.level4_14cm;
            }
    }
    else if (shelfDepth >= 15){
        if (shelfLength <= 100){
            price = shelfLength * priceConfig.woodPrice.level1_27cm;
            }else if (shelfLength > 100 && shelfLength <= 150){
            price = 100 * priceConfig.woodPrice.level1_27cm + (shelfLength-100) * priceConfig.woodPrice.level2_27cm;
            }
            else if (shelfLength > 150 && shelfLength <= 200){
            price = 100 * priceConfig.woodPrice.level1_27cm + 50 * priceConfig.woodPrice.level2_27cm + (shelfLength-150)  * priceConfig.woodPrice.level3_27cm;
            }
            else{
            price = 100 * priceConfig.woodPrice.level1_27cm + 50 * priceConfig.woodPrice.level2_27cm + 50  * priceConfig.woodPrice.level3_27cm + (shelfLength-200) * priceConfig.woodPrice.level4_27cm;
            }
    }
    else{
        return "inapropriate parameter input."
    }
    if (shelfDepth <14 || (shelfDepth > 14 && shelfDepth < 27)){
        price = price + 30;
    }
    return price;
}