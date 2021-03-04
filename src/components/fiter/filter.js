import React from 'react';
import './filter.css';

const Filter = (props) => {

    const {setFilter, filter} = props;

    const changeFilter = (event) => {

        if (event.target['name'] === 'name') {
            setFilter({...filter, name: event.target.value})
        }

        if (event.target['name'] === 'last-name') {
            setFilter({...filter, lastname: event.target.value})
        }

        if (event.target['name'] === 'age') {
            setFilter({...filter, age: +event.target.value})
        }

        if (event.target['name'] === 'sex-f') {
            setFilter(prevState => {
                return {
                    ...prevState,
                    sex: {...prevState.sex, f: !prevState.sex.f}
                }
            })
        }

        if (event.target['name'] === 'sex-m') {
            setFilter(prevState => {
                return {
                    ...prevState,
                    sex: {...prevState.sex, m: !prevState.sex.m}
                }
            })
        }
    };

    return (
        <div className="filter">
            <div className="filter-item">
                <label htmlFor="name">Name:</label>
                <input
                    onChange={changeFilter}
                    type="text"
                    name="name"
                />
            </div>

            <div className="filter-item">

                <label htmlFor="">Lastname:</label>
                <input
                    onChange={changeFilter}
                    type="text"
                    name="last-name"/>
            </div>

            <div className="filter-item">
                <label htmlFor="">Age:</label>

                <input
                    onChange={changeFilter}
                    value={filter.age === 0 ? '' : filter.age}
                    min={0}
                    type="number"
                    name="age"/>
            </div>


            <div className="filter-item">

                <label htmlFor="">Sex: </label>
                <div className="filter-sex">
                    <div>
                        <label htmlFor="">Female:</label>
                        <div>
                            <input
                                name="sex-f"
                                onChange={changeFilter}
                                type="checkbox"
                                checked={filter.sex.f}
                            />
                        </div>
                    </div>

                    <div >
                        <label htmlFor="">Male:</label>
                        <div>
                            <input
                                name="sex-m"
                                onChange={changeFilter}
                                checked={filter.sex.m}
                                type="checkbox"
                            />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Filter;
