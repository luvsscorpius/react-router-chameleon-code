import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <div>
                <div>
                    <nav>
                        <ul>
                            <li><Link to="/vectors">Vector</Link></li>
                            <li><Link to="/photos">Photos</Link></li>
                            <li><Link to="/psd">PSD</Link></li>
                            <li><Link to="/videos">Videos</Link></li>
                        </ul>
                    </nav>
                </div>

                <button>+ Submit</button>
            </div>
        </header>
    )
}