import Input from "./Input";
import Label from "./Label";
export default function InputContainer({id,type,placeholder,inputText}){
    return(
        <div className="input-container">
            <Label id={id} inputText={inputText}/>
            <Input type={type} id={id} placeholder={placeholder}/>
        </div>
    )
}