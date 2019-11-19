import React from "react";


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            textglobalTitle: ""
        };
    }

    componentDidMount() {
        console.log('Rendered Form')
    }

    componentDidUpdate() {
        console.log(this.state.title)
        console.log('Title changed')
    }

    render() {
        return (
            <React.Fragment>
                <h1>{this.state.textglobalTitle}</h1>
                <form>

                    <div>
                        <label htmlFor="title">{this.state.title}</label><br></br>
                        <input type="text" name="title" id="title" required  onChange={(e) => this.setState({title: e.target.value})}/>
                    </div>

                    <div>
                        <button  value="Validation" onClick={(e) => {
                            e.preventDefault();
                            this.setState({textglobalTitle: 'My form -'})
                             }}>Validation</button>
                    </div>
                 </form>
            </React.Fragment>
        );
    }
}

export default Form;
