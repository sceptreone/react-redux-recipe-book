import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../context'

class Recipe extends Component {

    state = {
        showRecipeInfo: true
    };

    onDeleteClick = (id, dispatch) => {
        dispatch({type: 'DELETE_RECIPE', payload: id});
    }

    render() {
        const { id, name, ingredients, method } = this.props.recipe;
        const { showRecipeInfo } = this.state;

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card card-body mb-3">
                            <h4>{name} <i style={{ cursor:'pointer'}} onClick={() => this.setState({ showRecipeInfo: !this.state.showRecipeInfo }) } className="fa fa-sort-down"/>
                            <i className="fa fa-times" style={{ cursor:'pointer', float:'right', color:'red'}} onClick={this.onDeleteClick.bind(this, id, dispatch)} />
                            </h4>
                            {showRecipeInfo ? (<ul className="list-group">
                                <li className="list-group-item">Ingredients: {ingredients}</li>
                                <li className="list-group-item">Method: {method}</li>
                            </ul>) : null}
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired
}

export default Recipe;