import React from 'react';

class NavBar extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand">
                <a className="navbar-brand" href="#/">Formidos</a>
                <form className="form-inline my-2 my-lg-0 float-ri">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
        )
    }
}

export default NavBar;