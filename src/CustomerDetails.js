import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import axios from 'axios'

//This Component is a child Component of Customers Component
export default class CustomerDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  //Function which is called when the component loads for the first time
  componentDidMount() {
    this.getCustomerDetails(this.props.val)
  }

  //Function which is called whenver the component is updated
  componentDidUpdate(prevProps) {

    //get Customer Details only if props has changed
    if (this.props.val !== prevProps.val) {
      this.getCustomerDetails(this.props.val)
    }
  }

  //Function to Load the customerdetails data from json.
  getCustomerDetails(id) {
    axios.get('assets/samplejson/customer' + id + '.json').then(response => {
      this.setState({customerDetails: response})
    })
  };

  render() {
    if (!this.state.customerDetails)
      
      return (<p>Loading Data</p>)
    return (<div className="customerdetails">


      <Panel bsStyle="info" className="centeralign">
        <Panel.Heading>
          <Panel.Title componentClass="h3">{this.state.customerDetails.data.title}</Panel.Title>
        </Panel.Heading>
        <Panel.Body>

          <p>{this.state.customerDetails.data.name}</p>
          <p>
            <a href={`mailto:${this.state.customerDetails.data.email}`}>{this.state.customerDetails.data.email}</a>
          </p>
          <p>
            <a href={this.state.customerDetails.data.linkedin}>{this.state.customerDetails.data.linkedin}</a>
          </p>
          <p>

          <a
            href="https://drive.google.com/file/d/1qmjgoDiGu-MElhmRjcxegR4O_JRQv-5z/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            >{this.state.customerDetails.data.resume}
          </a>
          </p>

          <p>{this.state.customerDetails.data.phone}</p>
          <p>{this.state.customerDetails.data.city}</p>
          <p>{this.state.customerDetails.data.state}</p>
          <p>{this.state.customerDetails.data.country}</p>
          <p>{this.state.customerDetails.data.organization}</p>
          <p>{this.state.customerDetails.data.jobProfile}</p>

          {/* Split Additional Info into Paragraphs */}
          <div className="format-text">
    <p
      dangerouslySetInnerHTML={{
        __html: this.state.customerDetails.data.additionalInfo,
      }}
    ></p>
  </div>

          {/* Displaying the profile image */}
<img
    src={this.state.customerDetails.data.aiTicTacToe} // Assuming 'picture' is a property in the data
    alt={``}
    style={{
      maxWidth: "110px",
      marginBottom: "10px",
    }}
    />
<p>
    <a
      href={"https://jonathanctran.github.io/ai-tic-tac-toe"} // Assuming 'link' is a property in the data
      target="_blank"
      rel="noopener noreferrer"
    >
      {this.state.customerDetails.data.aiTicTacToeLink}
    </a>
  </p>
    
        </Panel.Body>
      </Panel>

      
    </div>)
  }
}
