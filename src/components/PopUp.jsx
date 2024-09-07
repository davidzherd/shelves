import styled from "styled-components";
import { Card } from "./Card";
import { Button } from "./Button";
import { colors } from "../assets/siteConfig";
import { Text } from "./Text";
import { useState } from "react";


const StyledPopUp = styled.div`
    height: 100vh;
    width: 100vw;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    position: absolute;
    top:0;
    left: 0;
`;
export const PopUp = ({ action })=>{
    const handleSelection = (selection)=>{
        setOpened((prev)=>!prev)
        action(selection)
    }
    const [opened, setOpened] = useState(true);
    if (opened){
        return <StyledPopUp>
        <Card style={{flexDirection: "column", gap: "2rem"}}>
        <Text color={colors.darkGreen} weight={"500"} size={2}>Be Aware!</Text>
        <div style={{display: "flex",flexDirection: "column", gap: "1rem"}}>
        <Text color={colors.navi} weight={"500"}>If the shelf is ment for heavy items, it should be taken into acount!</Text>
        <Text color={colors.navi} weight={"500"}>Do you want to place heavy items on the shelf or not?</Text>
        </div>
        <div style={{display: "flex", justifyContent: "space-between"}}>
          <Button onClick={()=>handleSelection(false)}>No, continue</Button>
          <Button onClick={()=>handleSelection(true)} selected>Yes, take it into account</Button>
        </div>
      </Card>
        </StyledPopUp>
    }else{
        return
    }
}