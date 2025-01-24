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
          
          <p>{this.state.customerDetails.data.phone}</p>
          <p>{this.state.customerDetails.data.city}</p>
          <p>{this.state.customerDetails.data.state}</p>

          <p>
            <a href={`mailto:${this.state.customerDetails.data.email}`}>{this.state.customerDetails.data.email}</a>
          </p>
          <p>
          <a
            href="https://www.linkedin.com/in/jonathanctran/"
            target="_blank"
            rel="noopener noreferrer"
            >{this.state.customerDetails.data.linkedIn}
          </a>
          </p>

          <p>
          <a
            href="https://drive.google.com/file/d/1-2_pNvzUJ2DfILLSO6nSxaknI5kEDOWd/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            >{this.state.customerDetails.data.resume}
          </a>
          </p>

          
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


  <img
  src={this.state.customerDetails.data.memeGenerator}
  alt={``}
  style={{
    maxWidth: "200px",
    marginBottom: "10px",
  }}
/>

<p>
  <a
    href={"https://jonathanctran.github.io/meme-generator-demo/"}
    target="_blank"
    rel="noopener noreferrer"
  >
    {this.state.customerDetails.data.memeGeneratorLink}
  </a>
</p>

<hr />

<img
  src={this.state.customerDetails.data.ipynbLoader}
  alt={``}
  style={{
    maxWidth: "300px",
    marginBottom: "10px",
  }}
/>

<p>
  <a
    href={"https://jonathanctran.github.io/interactive-python-notebook-loader/"}
    target="_blank"
    rel="noopener noreferrer"
  >
    {this.state.customerDetails.data.ipynbLoaderLink}
  </a>
</p>

<hr />

<img
  src={this.state.customerDetails.data.aiTicTacToe}
  alt={``}
  style={{
    maxWidth: "200px",
    marginBottom: "10px",
  }}
/>

<p>
  <a
    href={"https://jonathanctran.github.io/ai-tic-tac-toe/"}
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
