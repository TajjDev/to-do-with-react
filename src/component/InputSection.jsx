export default function InputSection(props){
    return(
        <>
        <div className="input">
        <label htmlFor="task" ><h3>Enter Your Task</h3></label>
        <input type="text" placeholder="I want to...." value={props.value} name="task" id="task" onChange={props.change}/>
        <button type="button" onClick={props.btnFunc}>ADD</button>
        {props.children}
        </div>
        </>
    )
}