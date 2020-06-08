import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteRecipe } from '../../actions/recipeActions';

class Recipe extends Component {

    state = {
        showRecipeInfo: true
    };

    onDeleteClick = id => {
        this.props.deleteRecipe(id);
    }

    render() {
        const { id, name, ingredients, method } = this.props.recipe;
        const { showRecipeInfo } = this.state;
 
        return (
            <div className="card card-body mb-3">
                <h4>{name} <i style={{ cursor:'pointer'}} onClick={() => this.setState({ showRecipeInfo: !this.state.showRecipeInfo }) } className="fa fa-sort-down"/>
                <i className="fa fa-times" style={{ cursor:'pointer', float:'right', color:'red'}} onClick={this.onDeleteClick.bind(this, id)} />
                </h4>
                {showRecipeInfo ? (<ul className="list-group">
                    <li className="list-group-item">Ingredients: {ingredients}</li>
                    <li className="list-group-item">Method: {method}</li>
                </ul>) : null}
            </div>
        )
    }
}

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
    deleteRecipe: PropTypes.func.isRequired
}

export default connect(null, { deleteRecipe })(Recipe);