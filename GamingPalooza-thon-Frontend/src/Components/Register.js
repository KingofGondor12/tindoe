import { Field, Control, Input } from 'reactbulma'

<form>
  <Field groupedCentered>
    <Control>
      <Input placeholder="First Name" value="firstName" />
    </Control>
    <Control>
      <Input placeholder="Last Name" value="lastName" />
    </Control>
    <Control>
      <Input placeholder="Email Adress" value="email" />
    </Control>
    <Control>
      <Input placeholder="Password" value="password" />
    </Control>
    <Control>
      <Button primary>
        Register
      </Button>
    </Control>
  </Field>
</form>
