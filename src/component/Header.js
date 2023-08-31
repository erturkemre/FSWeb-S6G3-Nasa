import React from "react";

const Header = (props) => {
    const {date,changeHandler} = props

    return(
        <header>
            <image src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg" />
            <input type="date" name="tarih" value={date} onChange={changeHandler} />
        </header>
    )
}

export default Header;