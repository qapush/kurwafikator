import { Component } from "react";
import './form.css'

class Form extends Component
 {

    state = {
        input: '' 
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        this.setState({
            input: e.target.value
        })

        const result = this.state.input.split();

        this.props.onSubmit(result)
        
        
    }

    onInput = (e) => {
        
        this.setState({
            input: e.target.value
        })

    }

    render(){

        const { input } = this.state;
        return(
            <>
                <form
                    onSubmit={ this.onSubmit }
                >
                    <textarea 
                        name="" 
                        id="" 
                        cols="30" 
                        rows="10"
                        value={ input }
                        onChange={ this.onInput }
                        
                    > 
                    </textarea>
                    <button 
                        type="submit"
                    >
                        Kurwafikacja
                    </button>
                </form>
            </>
        )
    }
  }

  export default Form;