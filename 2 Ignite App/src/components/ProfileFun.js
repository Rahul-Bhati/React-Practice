import React, { useEffect } from 'react'

const ProfileFun = () => {

    useEffect(() => { // (prevProps) => {
        //prevProps are optional and has some specific uses. Compare with what happens with the lifecycle functions.
        //Custom function content….
        console.log("Component Did Mount functional")
        timer = setInterval(() => console.log("functional setInterval"), 2000);

        // we can fetch or api call here bcs it is called after componet render

        // jab bhi me extra setInterval jesi chiz chla dete h to unhe clear krna hota h kyoki React SPA h jisme pange change nhi hote/reload.
        // to  setInterval stop nhi hota h balki compo change hone per bhi call hoga or jitni bar hum diff compo visit krge iski speed bad jayegi matlab multiple setInterval bg m chalu ho jayege
        // ese band krne k liye m willMount ka use krte h jab bhi compo remove/change ho to hum interval clear kr denge

        return () => {
            // Code to run when the component is unmounted or when dependencies change
            // It helps in avoiding memory leaks and unexpected behavior
            console.log("Component Will Unmount functional")
            clearInterval(timer);
        }
    }, [])
    return (
        <h1> Profile functional Component</h1 >
    )
}

export default ProfileFun