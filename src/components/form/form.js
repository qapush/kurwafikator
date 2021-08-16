import { Component } from "react";
import './form.css'

export default class Form extends Component{

    state = {
        input: '',
        level: this.props.lvl
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.input)
    }

    onInput = (e) => {
        
        this.setState({
            input: e.target.value
        })
    }

    onLevelChange = (e) => {
        this.props.onLevelChange(e.target.value);
        this.setState({
            level:e.target.value
        })
    }

    render(){

        const { input, level } = this.state;
        return(
            <>
                <div className="form">
                    <form
                        onSubmit={ this.onSubmit }
                    >
                        <select 
                            value={ level }
                            onChange={ this.onLevelChange }
                        >
                            <option value="5">Podkurwiony</option>
                            <option value="4">Wkurwiony</option>
                            <option value="3">Megawkurw</option>
                        </select>
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
                </div>
            </>
        )
    }
  }
