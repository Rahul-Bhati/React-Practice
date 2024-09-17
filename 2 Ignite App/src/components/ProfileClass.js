import React from 'react'

class ProfileClass extends React.Component {
    constructor(props) {
        super(props);
        // initial state
        this.state = {
            name: "Class"
        }

        console.log("Constructor " + this.props.name)
    }

    // it called only once when component is mounted/rendered
    componentDidMount() {
        this.setState({
            name: "Class Component"
        })
        console.log("Component Did Mount " + this.props.name)

        // this.timer = setInterval(() => console.log("setInterval"), 2000);

        // we can fetch or api call here bcs it is called after componet render

        // jab bhi me extra setInterval jesi chiz chla dete h to unhe clear krna hota h kyoki React SPA h jisme pange change nhi hote/reload.
        // to  setInterval stop nhi hota h balki compo change hone per bhi call hoga or jitni bar hum diff compo visit krge iski speed bad jayegi matlab multiple setInterval bg m chalu ho jayege
        // ese band krne k liye m willMount ka use krte h jab bhi compo remove/change ho to hum interval clear kr denge
    }

    // it called when component is updated or re-rendered (state or props changed)
    componentDidUpdate() {
        console.log("Component Did Update " + this.props.name);
        // 
    }

    // it called when component is unmounted/removed or component is changed
    componentWillUnmount() {
        console.log("Component Will Unmount " + this.props.name);
        // clearInterval
        clearInterval(this.timer);

    }

    render() {
        console.log("Render " + this.props.name)
        return (
            <h1> Profile {this.state.name} : {this.props.name}</h1 >
        )
    }
}

export default ProfileClass;