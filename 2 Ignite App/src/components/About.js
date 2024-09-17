import React from 'react'
import ProfileClass from './ProfileClass'
import ProfileFun from './ProfileFun'

const About = () => {
    return (
        <>
            About
            {/* class component */}
            <ProfileClass name="first" />
            <ProfileClass name="second" />

            {/* output : first render hote h fir comp remove hote h fir state update hoti h or  component re-render hota h

                    Constructor first
                    Render first
                    Constructor second
                    Render second
                    Component Will Unmount first
                    Component Will Unmount second
                    Component Did Mount first
                    Component Did Mount second
                    Render first
                    Render second
                    Component Did Update first
                    Component Did Update second 
            */}

            {/* functional component */}
            <ProfileFun />
        </>
    )
}

export default About