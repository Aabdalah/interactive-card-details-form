import InputContainer from "./InputContainer";
import InputContainer2 from "./InputContainer2";
import Input from "./Input";
export default function Form(){
    return(
        <form action="#">
            <InputContainer inputText="CARDHOLDER NAME" Type="text" id="name" placeholder="e.g. Jane Appleseed"/>
            <InputContainer inputText="CARD NUMBER" Type="text" id="number" placeholder="e.g. 1234 5678 9123 000"/>
            <div>
                <InputContainer2  inputText="EXP.DATE (MM/YY)" Type="text" id="month" id2="year" placeholder="MM" placeholder2="YY"/>
                <InputContainer inputText="CVC" Type="text" id="cvc" placeholder="e.g. 123"/>
            </div>
            <Input type="submit" id="submit" value="Confirm"/>
        </form>
    )
}