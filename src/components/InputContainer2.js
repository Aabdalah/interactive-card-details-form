import Input from "./Input";
import Label from "./Label";

export default function InputContainer2({id,id2,type,placeholder,placeholder2,inputText}){
    return(
        <div className="input-container2">
            <Label id={id} inputText={inputText}/>
            <Input id={id} type={type} placeholder={placeholder}/>
            <Input id={id2} type={type} placeholder={placeholder2}/>
        </div>
    )
}