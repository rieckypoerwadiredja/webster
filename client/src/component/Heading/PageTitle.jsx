import React from "react";
import PropTypes from 'prop-types';

function PageTitle({text, highlighter}) {
    if(highlighter) {
        return(
            <h1 className="text-title-xs smX:text-title-sm text font-normal text-white">
                {text}
                <br />
                <span className="highlighter relative mt-1 py-2 inline-block bg-white/20 pr-[40px]"> {highlighter}</span>
            </h1>
        )
    }
    return(
        <h1 className="text-title-xs sm:title-sm text font-normal text-white">
            {text}
        </h1>
    )
}

PageTitle.propTypes = {
    text: PropTypes.string.isRequired,
    highlighter: PropTypes.string
}

export default PageTitle;