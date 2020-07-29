import React from 'react';
import logo from './logo.svg';
import './App.css';

function DataItem(props) {
  return (
    <table cellSpacing={0} cellPadding={0} border={0} style={{margin: '0 15px 5px 0', display: 'inline'}}><tbody><tr>
      <td style={{paddingRight: '5px'}}>
        <a href={props.link} style={{display: 'inline-block'}}>
          <img src={"sigs/" + props.img} alt={props.imgalt} style={{border: 'none'}} />
        </a>
      </td>
      <td>
        <span style={{font: '14px Verdana'}}>
          <a href={props.link} style={{textDecoration: 'none', color: '#000000'}}>
            <span>{props.value}</span>
          </a>
        </span>
      </td>
    </tr></tbody></table>
  );
}

class DynamicContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Peyman Owladi',
      jobtitle: 'CTO',
      mobile: '07763842654',
      linkedin: 'peymanity',
    };
  }

  render() {
    return (
      <div className="Dynamic content">
        <h3>Input</h3>
        <label htmlFor="name">Name: </label><input id="name" onChange={(e) => this.setState({name: e.target.value})} value={this.state.name} /><br />
        <label htmlFor="jobtitle">Job Title: </label><input id="jobtitle" onChange={(e) => this.setState({jobtitle: e.target.value})} value={this.state.jobtitle} /><br />
        <label htmlFor="mobile">Mobile number (optional): </label><input id="mobile" onChange={(e) => this.setState({mobile: e.target.value})} value={this.state.mobile} /><br />
        <label htmlFor="linkedin">LinkedIn (optional): </label><input id="linkedin" onChange={(e) => this.setState({linkedin: e.target.value})} value={this.state.linkedin} /><br />
        <h3>Output</h3>
        <p>&nbsp;</p>
        <table width="100%" cellSpacing={0} cellPadding={0} border={0}><tbody><tr>
          <td style={{verticalAlign: 'top', padding: '0 10px 0 5px', textAlign: 'center', width: '90px', minWidth:'50px', maxWidth:'90px'}} width="90">
            <a style={{display: 'inline-block'}} href={"https://linkedin.com/in/" + this.state.linkedin}>
              <img style={{border: 'none', width: '100%'}} width="100%" src="sigs/peyman.png" />
            </a>
            <a style={{display: 'inline-block'}} href="https://learningwithparents.com">
              <img style={{border: 'none', marginTop: '15px', width: '75%'}} width="75%" src="sigs/lwp-logo.png" />
            </a>
          </td>
          <td style={{borderLeft: 'solid #000000 2px'}} width={12}>
          </td>
          <td style={{verticalAlign: 'top', textAlign: 'left', color: '#000000', fontSize: '14px', fontFamily: 'Verdana'}}>
            <table cellSpacing={0} cellPadding={0} border={0} style={{margin: 0, display: 'inline'}}><tbody>
              <tr><td style={{padding: '0 0 10px 0', lineHeight: '20px'}}>
                <span style={{marginRight: '5px', color: '#f28e00', fontSize: '16px', fontFamily: 'Verdana'}}><b>{this.state.name}</b></span>
                <br />
                <span style={{marginRight: '5px', color: '#000000', fontSize: '14px', fontFamily: 'Verdana'}}>{this.state.jobtitle}</span>
                <br />
                <span style={{marginRight: '5px', color: '#000000', fontSize: '14px', fontFamily: 'Verdana'}}><b>Learning with Parents</b></span>
              </td></tr>
              <tr><td style={{lineHeight: '20px', padding: '0 0 20px 0'}}>
                <DataItem link={"tel:" + this.state.mobile.replace(/^0/, "+44")} img="mobile.png" imgalt="mobile" value={this.state.mobile} />
                <DataItem link={"https://linkedin.com/in/" + this.state.linkedin} img="linkedin.png" imgalt="LinkedIn" value={this.state.linkedin} />
              </td></tr>
              <tr><td style={{lineHeight: '20px', padding: '0 0 5px 0'}}>
                <DataItem link="https://learningwithparents.com" img="web.png" imgalt="Site" value="learningwithparents.com" />
                <DataItem link="https://mathswithparents.com" img="web.png" imgalt="Site" value="mathswithparents.com" />
                <br />
                <DataItem link="https://twitter.com/Learn_Parents" img="twitter.png" imgalt="Twitter" value="Learn_Parents" />
                <DataItem link="https://twitter.com/Maths_Parents" img="twitter.png" imgalt="Twitter" value="Maths_Parents" />
                <DataItem link="https://facebook.com/MathswithParents" img="facebook.png" imgalt="Facebook" value="MathsWithParents" />
              </td></tr>
              <tr><td style={{padding: '0', lineHeight: '15px'}}>
                <span style={{color: '#aaaaaa', fontSize: '12px', fontFamily: 'Verdana', marginTop: '5px'}}>Learning with Parents, Newminster House, Bristol, BS1 1LT
                <br />
                A registered charity (CIO), charity number <a href="http://apps.charitycommission.gov.uk/Showcharity/RegisterOfCharities/CharityFramework.aspx?RegisteredCharityNumber=1189812&SubsidiaryNumber=0" style={{textDecoration: 'underline', color: '#aaaaaa'}}>1189812</a>
                </span>
              </td></tr>
            </tbody></table>
          </td>
        </tr></tbody></table>
        <p>&nbsp;</p>
      </div>
    );
  }
}


function App() {
  return (
    <div>
      <DynamicContent />
    </div>
  );
}

export default App;
