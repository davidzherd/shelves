import { Wrapper } from './Wrapper';
import { Text } from './Text';
import { Card } from './Card';
import { useEffect, useState } from 'react';
import { Input } from './Input';
import { calculateTotalPrice, getData, priceConfig } from '../assets/logic';
import { Grid } from './Grid';
import { Checkbox } from './Checkbox';
import { colors } from '../assets/siteConfig';
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
          <Wrapper background={"transparent"}>
            <div style={{marginTop: "4rem", width:"min(90%, 800px)", display:"flex", flexDirection:"column"}}>
              <Text style={{alignSelf:"center"}} size={3} color={colors.lightGreen}>SHELF PRICE CALCULATOR</Text>
              <Card style={{flexDirection:"column"}}>
              <Text style={{marginBottom:"1rem"}} color={colors.darkGreen} weight={"500"} size={2}>Order Details:</Text>
                <Grid $columnsTemplate = {"1fr 1fr"}>
                <Text color={colors.navi} weight={"500"}>Shelf Length (cm):</Text>
                <Input required onChange={(event)=>handlePropertiesChange(event, "length")} type='number'/>
                <Text color={colors.navi} weight={"500"}>Shelf Depth (cm):</Text>
                <Input color={error? "red" : colors.darkGreen} required onChange={(event)=>handlePropertiesChange(event, "depth")} type='number'/>
                <Text color={colors.darkGreen} size={1.5}>Conseeled Support:</Text>
                <Checkbox type='checkbox' onClick={(e)=>handleConseeled(e)}/>
                </Grid>
              </Card>
              {error && <Text color={"red"} weight={"500"}>Please check your parameters, there seems to be a problem!</Text>}
              {!error && <Card style={{flexDirection: "column", gap: "0.8rem"}}>
                <Text style={{marginBottom:"1rem", display:"flex", alignItems:"center", justifyContent:"space-between"}} color={colors.darkGreen} weight={"500"} size={2}>Final Bill:<TiDocumentText style={{scale:"1.5"}} /></Text>
                <Text color={colors.navi} weight={"500"}>Wood price: <span style={{color: "limegreen", fontWeight:"400"}}>{price.shelfPrice.toFixed(2)}&#8362;</span></Text>
                {conseeled && <Text color={colors.navi} weight={"500"}>Amount of dibbles: <span style={{color: colors.orange, fontWeight:"400"}}>{price.amountOfDibbles}</span></Text>}
                {conseeled && <Text color={colors.navi} weight={"500"}>Type of dibbles: <span style={{color: colors.orange, fontWeight:"400"}}>{heavyDibble? "Heavy" : "Light"}</span></Text>}
                {conseeled && <Text color={colors.navi} weight={"500"}>Conseelment price: <span style={{color: "limegreen", fontWeight:"400"}}>{price.installationPrice.toFixed(2)}&#8362;</span></Text>}
                <hr></hr>
                <Text color={colors.navi} weight={"500"} style={{marginTop:"0.3rem"}}>Total price: <span style={{color: "limegreen", fontWeight:"500"}}>{price.total.toFixed(2)}&#8362;</span></Text>
              </Card>}
            </div>
          </Wrapper>
      )
    }
  

export default PriceCalculator
