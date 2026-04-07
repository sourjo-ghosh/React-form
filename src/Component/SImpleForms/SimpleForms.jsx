const SimpleForms = ()=>{
    const handleSubmit = (e)=>{
        if(e.target.name.value === "" || e.target.email.value === ""){
            alert("Please fill in all the fields")
            return
        }
        e.preventDefault()
        // console.log("Form submitted", e.target)
        console.log(e.target.name.value)
        console.log(e.target.email.value)
        e.target.name.value = ""
        e.target.email.value = ""
        
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Enter your name" />
                <br />
                <input type="email" name="email" placeholder="Enter your email" />
                <br />
                <input id="form-submit" type="submit" value="Submit" />
            </form>
        </div>
    )
}


export default SimpleForms 
