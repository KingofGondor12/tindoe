import { Field, Control, Input } from 'reactbulma'
import axios from 'axios'

{
  onLoginChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onLoginSubmit = (event) => {
    
  }
}

<form onChange={this.onLoginChange}>
  <Field groupedCentered>
    <Control>
      <Input placeholder="Email Address" className="email"/>
    </Control>
    <Control>
      <Input placeholder="Password" className="password"/>
    </Control>
    <Control>
      <Button primary onclick="onLoginSubmit" onClick={this.onLoginSubmit}>
        Log in
      </Button>
    </Control>
  </Field>
</form>
