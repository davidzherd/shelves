import { Wrapper } from './Wrapper';
import { Text } from './Text';
import { Card } from './Card';
import { useEffect, useState } from 'react';
import { Input } from './Input';
import { calculateTotalPrice, getData, priceConfig } from '../assets/logic';
import { Grid } from './Grid';
import { Checkbox } from './Checkbox';
import { colors, colorsV2 } from '../assets/siteConfig';
import { TiDocumentText } from "react-icons/ti";

const PriceCalculator = () => {
    const [shelfProperties, setShelfProperties] = useState({length:0, depth:0});
    const [conseeled, setConseeled] = useState(false);
    const [error, setError] = useState(false);
    const [heavyDibble, setHeavyDibble] = useState(false);
    const [data, setData] = useState(false);
    const [maxDepth, setMaxDepth] = useState(27);
    const [price, setPrice] = useState({total:0, shelfPrice:0, installationPrice: 0, amountOfDibbles: 0});
  
    const handleConseeled = (event)=>{
      setConseeled(event.target.checked);
    }
    const handleCalculation = ()=>{
      if(shelfProperties.depth > 0 && shelfProperties.length > 0){
        const isHeavy = shelfProperties.depth < 19 ? false : true;
        const calculation = calculateTotalPrice(shelfProperties.length, shelfProperties.depth, conseeled, isHeavy);
        setPrice(calculation);
        setHeavyDibble(isHeavy)
      }else{
        return
      }
    }
    const handlePropertiesChange = (event, identifier)=>{
      if (identifier === "length"){
        setShelfProperties({...shelfProperties, length: parseInt(event.target.value)})
      }else if (identifier === "depth"){
        setShelfProperties({...shelfProperties, depth: parseInt(event.target.value)})
      }else{
        return
      }
    }
  
    useEffect(()=>{
      if (shelfProperties.depth <= maxDepth){
        setError(false);
        handleCalculation();
      }else{
        setError(true);
      }
    },[shelfProperties.depth, shelfProperties.length, conseeled, heavyDibble]);
  
    useEffect(()=>{
      if (!data){
        getData();
        setMaxDepth(priceConfig.max_depth);
        setData(true);
      }else{
        return
      }
    },[data]);
  
      return (
        <Wrapper style={{flexDirection:"column"}}>
          <Text style={{alignSelf:"center"}} size={2} color={colorsV2.textLight}>מחשבון מחירים</Text>
          <Card style={{alignSelf:"center", width:"95%", marginBlock:"1rem"}}>
            <Text style={{marginBottom:"0.5rem"}} color={colorsV2.textLight} weight={"500"} size={1.2} side="end">:פרטי הזמנה</Text>
            <div style={{display:"flex", alignItems:"center",justifyContent:"end", gap:"0.5rem"}}>
            <Input width="50%" style={{alignSelf:"end"}} color={colorsV2.accentBlue} required onChange={(event)=>handlePropertiesChange(event, "length")} type='number'/>
            <Text color={colorsV2.textDark} weight={"500"}>:אורך המדף (ס"מ)</Text>
            </div>
            <div style={{display:"flex", alignItems:"center",justifyContent:"end", gap:"0.5rem"}}>
            <Input width="50%" style={{alignSelf:"end"}} color={error? colorsV2.accentPink : colorsV2.accentBlue} required onChange={(event)=>handlePropertiesChange(event, "depth")} type='number'/>
            <Text color={colorsV2.textDark} weight={"500"}>:רוחב המדף (ס"מ)</Text>
            </div>
            <div style={{display:"flex", alignItems:"center",justifyContent:"end", gap:"0.5rem"}}>
              <Checkbox type='checkbox' onClick={(e)=>handleConseeled(e)} style={{scale:"1.5"}}/>
              <Text color={colorsV2.textDark} size={1.2}>:תלייה נסתרת</Text>
            </div>
            <Text color={colorsV2.textDark} weight={"500"} side="end">המחרים הינם משוערים ואינם מדוייקים*</Text>
            <Text color={colorsV2.textDark} weight={"500"} side="end">רוחב מדף מקסימאלי של {maxDepth} ס"מ*</Text>
            <Text color={colorsV2.textDark} weight={"500"} side="end">ביצוע הזמנה מתבצע בשיחה טלפונית*</Text>
          </Card>
          {error && <Text style={{marginInline:"1rem"}} color={colorsV2.accentPink} weight={"500"} side="end">אנא בדוק שהפרטים שהזנת נכונים ולא עוברים את המגבלות</Text>}
          {!error &&
           <Card style={{flexDirection: "column", gap: "0.8rem", width:"95%"}}>
            <Text style={{marginBottom:"1rem", display:"flex", alignItems:"center", justifyContent:"space-between"}} color={colorsV2.textLight} weight={"500"} size={1.2}><TiDocumentText style={{scale:"1.5"}} />חשבון</Text>
            <Text color={colors.navi} weight={"500"}><span style={{color: "limegreen", fontWeight:"400"}}>&#8362;{price.shelfPrice.toFixed(2)}</span> :מחיר עץ</Text>
            {conseeled && <Text color={colors.navi} weight={"500"}><span style={{color: colors.orange, fontWeight:"400"}}>{price.amountOfDibbles}</span> :כמות דיבלים</Text>}
            <div style={{alignSelf:"end"}}>
            {conseeled && <Text color={colors.navi} weight={"500"}><span style={{color: colors.orange, fontWeight:"400"}}>{heavyDibble? "כבדים" : "קלים"}</span></Text>}
            {conseeled && <Text color={colors.navi} weight={"500"}> :סוג דיבלים</Text>}
            </div>
            {conseeled && <Text color={colors.navi} weight={"500"}><span style={{color: "limegreen", fontWeight:"400"}}>&#8362;{price.installationPrice.toFixed(2)}</span> :מחיר תלייה נסתרת</Text>}
            <hr></hr>
            <Text color={colors.navi} weight={"500"} style={{marginTop:"0.3rem"}}><span style={{color: "limegreen", fontWeight:"400"}}>&#8362;{price.total.toFixed(2)}</span> :מחיר סופי </Text>
          </Card>}
        </Wrapper>
      )
    }
  

export default PriceCalculator
