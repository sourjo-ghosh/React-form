/**
 * To get data from Form
 * 1. e.target.[name of the input field].value
 * 2. use form action and formData in the action handler. formData.get[name of input field name]
 * 3. Controlled components. one per each input field. use state to get the value of the input field and update the state   on  change. use full control to dynamically handle error and validation.
 * 4. handle all controlled input fields in one object on state
 * 5. const [formData, setFormData] = useState({name: '', email: ''})
 * 6. uncontrolled using useRef('')
 * */

