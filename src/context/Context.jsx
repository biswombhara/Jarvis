import { createContext, useState } from "react";
import run from "../config/Gemini";

export const Context = createContext();


const ContextProvider = (props) => {

    const [input, setInput] = useState("");
    const [recentPrompts, setRecentPrompts] = useState("");
    const [results, setResults] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    function TypingEffect(idx, nextWord){
        setTimeout(function(){
            setResultData(prev=>prev+nextWord);
        }, 15*idx)
    }

    function newChat(){
        setResults(false);
    }

    const search = async(input) =>{
        setResultData("");
        setLoading(true);
        setResults(true);
        setRecentPrompts(input);
        const response = await run(input);
        console.log(response)
        let res1 = response.split("**");
        let newResponse1 = "";
        for(let i = 0; i<res1.length; i++){
            if(i === 0){
                console.log(res1)
                let res2 =  res1[0].split("");
                if( res2[0]=="#" && res2[1]=="#" ){
                    let x = res1[0].replace("#"," ")
                    let y = x.replace("#"," ")
                    newResponse1 += "<h1>" + y + "</h1>";
                    if(newResponse1){
                        newResponse1 += "<br>";                    
                    }
                }else{
                    newResponse1 += res1[0];
                }
            }
            else if(i%2 !== 1){
                newResponse1 += res1[i];
            }else{                
                newResponse1 += "<b>"+res1[i]+"</b>";
            }
        }        
        let newResponse3 = newResponse1.replaceAll("\n","<br>");
        let newResponse4 = newResponse3.replaceAll("   ","&nbsp");
        let newResponse4a = newResponse4.replaceAll("   ","&nbsp");
        let newResponse4b = newResponse4a.replaceAll("   ","&nbsp");
        let newResponse4c = newResponse4b.replaceAll("   ","&nbsp");
        let newResponse5 = newResponse4c.split("```").join("<br>");
        let newResponse6 = newResponse5.split("`").join(`&nbsp`);
        let newResponse3Array = newResponse6.split(" ");
        for(let i=0; i<newResponse3Array.length ; i++){
            TypingEffect(i, newResponse3Array[i]+" ")
        }
        
        setLoading(false);
        setInput("");
    }

    
let cardI=0
    

    const contextValue = {
        search, resultData, loading, results, input, setInput, recentPrompts, newChat, cardI
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;