import React, { Component } from 'react';
import Recipe from './Recipe'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { GET_RECIPES } from '../../actions/types'

class Recipes extends Component {

    componentDidMount() {
        this.props.getRecipes();
    }

    render() {
        const { recipes } = this.props;
        return(
            <React.Fragment>
                <h1 className="display-4 mb-2"><span className="text-info">Recipe Book</span></h1>
                {recipes.map(recipe => 
                    <Recipe key={recipe.id} recipe={recipe}/>
                )}
            </React.Fragment>
        )
    }
}

Recipes.propTypes = {
    recipes: PropTypes.array.isRequired,
    getRecipes: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    recipes: state.recipe.recipes
})

const mapDispatchToProps = (dispatch) => ({
    getRecipes: () => dispatch({type: GET_RECIPES})
});

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);