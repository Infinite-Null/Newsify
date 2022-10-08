import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Nav extends Component {
    render() {
        return (
            <div className="m-4 ">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/Newsify">Top Headline</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Business">Business</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Entertainment">Entertainment</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Health">Health</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Science">Science</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Sports">Sports</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Technology">Technology</Link>
                    </li>
                </ul>
            </div>
        )
    }
}
