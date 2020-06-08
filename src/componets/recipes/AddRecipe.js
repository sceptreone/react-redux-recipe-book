import React, { Component } from 'react';
import  { v4 as uuidv4 } from 'uuid';
import TextInputGroup from '../layout/TextInputGroup';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addRecipe } from '../../actions/recipeActions';


class AddRecipe extends Component {

    state = {
        name: '',
        ingredients: '',
        method: '',
        errors: {}
    };

    onSubmit = e => {
        e.preventDefault();

        const { name, ingredients, method } = this.state;

        if(name === ''){
            this.setState({errors: { name: 'Name is required'}});
            return;
        }

        if(ingredients === ''){
            this.setState({errors: { ingredients: 'Ingredients is required'}});
            return;
        }

        if(method === ''){
            this.setState({errors: { method: 'Method is required'}});
            return;
        }

        const newRecipe = {
            id: uuidv4(),
            name,
            ingredients,
            method
        };

        this.props.addRecipe(newRecipe);

        this.setState({
            name: '',
            ingredients: '',
            method: '',
            errors: {}
        });
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { name, ingredients, method, errors } = this.state;
        
        return (
            <div className="card mb-3">
                <div className="card-header">Add Recipe</div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <TextInputGroup 
                            label="Name"
                            name="name"
                            placeholder="Enter Name"
                            value={name}
                            onChange={this.onChange}
                            error={errors.name}
                        />
                        <TextInputGroup 
                            label="Ingredients"
                            name="ingredients"
                            placeholder="Enter Ingredients"
                            value={ingredients}
                            onChange={this.onChange}
                            error={errors.ingredients}
                        />
                        <TextInputGroup 
                            label="Method"
                            name="method"
                            placeholder="Enter Method"
                            value={method}
                            onChange={this.onChange}
                            error={errors.method}
                        />  
                        <input className="btn btn-light btn-block" type="submit" value="Add Recipe"/>
                    </form>
                </div>
            </div>
        )
    }
}

AddRecipe.propTypes = {
    addRecipe: PropTypes.func.isRequired
}

export default connect(null, { addRecipe })(AddRecipe);