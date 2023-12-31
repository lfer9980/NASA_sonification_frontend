import React from 'react'

import "../styles/VideoInput.scss";

function VideoInput(props) {

    const { width, height, source } = props;

    return (
        <div className='video_input'>
            {source && (
                <video
                    className="VideoInput_video"
                    width="100%"
                    height={height}
                    controls
                    src={source}
                />
            )}
        </div>
    )
}

export { VideoInput };