import './global.css';
import Navbar from './components/Navbar';
import { Wrapper } from './components/Wrapper';
import { colors } from './assets/siteConfig';
import { Text } from './components/Text';
import { Card } from './components/Card';
import { useEffect, useState } from 'react';
import { Input } from './components/Input';
import { Button } from './components/Button';
import { calculateTotalPrice, getData, priceConfig } from './assets/logic';
import { Grid } from './components/Grid';
import { Checkbox } from './components/Checkbox';
function App() {
const [shelfProperties, setShelfProperties] = useState({length:0, depth:0});
const [conseeled, setConseeled] = useState(false);
const [error, setError] = useState(false);
const [lightDibble, setLightDibble] = useState(false);
const [heavyDibble, setHeavyDibble] = useState(false);
const [data, setData] = useState(false);
const [maxDepth, setMaxDepth] = useState(27);
const [price, setPrice] = useState({total:0, shelfPrice:0, installationPrice: 0, amountOfDibbles: 0});
const handleConseeled = (event)=>{
  setConseeled(event.target.checked);
}
const handleLightDibble = ()=>{
  setLightDibble((prev)=>!prev);
  setHeavyDibble(lightDibble);
}
const handleHeavyDibble = ()=>{
  setHeavyDibble((prev)=>!prev);
  setLightDibble(heavyDibble);
}
const handleCalculation = ()=>{
  if(shelfProperties.depth > 0 && shelfProperties.length > 0){
  const calculation = calculateTotalPrice(shelfProperties.length, shelfProperties.depth, conseeled, heavyDibble);
  setPrice(calculation);
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
},[shelfProperties, lightDibble, heavyDibble, conseeled]);
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
    <>
    <Navbar/>
    <Wrapper background={"transparent"}>
      <div style={{marginTop: "4rem"}}>
        <Text size={4} shadow color={colors.lightGreen}>SHELF PRICE CALCULATOR</Text>
        <Card>
          <Grid $columnsTemplate = {"1fr 1fr"}>
          <Text color={colors.navi} weight={"500"}>Shelf Length (cm):</Text>
          <Input required onChange={(event)=>setShelfProperties({...shelfProperties, length: parseInt(event.target.value)})} type='number'/>
          <Text color={colors.navi} weight={"500"}>Shelf Depth (cm):</Text>
          <Input color={error? "red" : colors.darkGreen} required onChange={(event)=>setShelfProperties({...shelfProperties, depth: parseInt(event.target.value)})} type='number'/>
          <Text color={colors.darkGreen} size={1.5}>Conseeled Support:</Text>
          <Checkbox type='checkbox' onClick={(e)=>handleConseeled(e)}/>
          {conseeled && shelfProperties.depth < 16 ? <Button selected = {lightDibble} onClick={handleLightDibble}>Light Dibbles</Button> : null}
          {conseeled ? <Button selected = {heavyDibble} onClick ={handleHeavyDibble}>Heavy Dibbles</Button> : null}
          {conseeled && !lightDibble && !heavyDibble ? <Text color="#FF6969" weight={"500"}>Please select dibble type</Text>: null}
          {conseeled && <Text color={colors.orange} weight="700">&#9733; It's recommended to use: {shelfProperties.depth < 15 ? "light" : "heavy"} dibbles.</Text>}
          {error && <Text color={"red"} weight={"500"}>Please check your parameters, there seems to be a problem!</Text>}
          </Grid>
        </Card>
        {!error && <Card style={{flexDirection: "column", gap: "0.5rem"}}>
          <Text color={colors.darkGreen} weight={"500"} size={2}>Final Bill:</Text>
          <Text color={colors.navi} weight={"500"}>Shelf price: <span style={{color: "limegreen"}}>{price.shelfPrice.toFixed(2)}&#8362;</span></Text>
          {conseeled && <Text color={colors.navi} weight={"500"}>Amount of dibbles: <span style={{color: colors.orange}}>{price.amountOfDibbles}</span></Text>}
          {conseeled && <Text color={colors.navi} weight={"500"}>Type of dibbles: <span style={{color: colors.orange}}>{heavyDibble? "Heavy" : "Light"}</span></Text>}
          {conseeled && <Text color={colors.navi} weight={"500"}>installation price: <span style={{color: "limegreen"}}>{price.installationPrice.toFixed(2)}&#8362;</span></Text>}
          <Text color={colors.navi} weight={"500"}>Total price: <span style={{color: "limegreen"}}>{price.total.toFixed(2)}&#8362;</span></Text>
        </Card>}
      </div>
    </Wrapper>
    </>
  )
}

export default App
