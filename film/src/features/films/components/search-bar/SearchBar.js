import React, {Component} from 'react';
import {Formik} from 'formik';
import apiMovie  from '../../../../conf/api.movie';

export default class SearchBar extends Component {

    submit = (values, actions) => {

        const query = '?' + Object.keys(values)
                                .map(key => key + '=' + values[key]+ '&')
                                .join('');
        apiMovie.get('/search/movie' + query)
            .then( response => response.data.results)
            .then( moviesApi => {
                const movies = moviesApi.map(m => ({
                    img: 'https://images.tmdb.org/t/p/w500'+ m.poster_path,
                    title: m.title,
                    details: m.release_date + ' | ' + m.vote_average + '/10 (' + m.vote_count + ')',
                    description: m.overview
                }));
                this.props.updateMovies(movies);
                actions.setSubmitting(false);
            })
            .catch( err => console.log(err));
    }

    render() {
        return (
            <Formik
                onSubmit={this.submit}
                initialValues = {{query: '', language:'fr-FR'}}
            >
                {({ handleSubmit, handleChange, handleBlur, isSubmitting}) => 
                    (
                        <form className = "d-flex flex-row p-2 mr-2" onSubmit={handleSubmit}>
                        <input name ='query' className='flex-fill form-control' onChange={handleChange} onBlur={handleBlur}/>
                        <select className='form-control w-25' name="language" onChange={handleChange} onBlur={handleBlur}>
                            <option value="en-US">Anglais</option>
                            <option value="fr-FR">Francais</option>
                        </select>
                        <button type='submit' disabled={isSubmitting} className="btn btn-success btn-small">submit</button>
                        </form>
                    )
                }

            </Formik>
        )
    }
}

