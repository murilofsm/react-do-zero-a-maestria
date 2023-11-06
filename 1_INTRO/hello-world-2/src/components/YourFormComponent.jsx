import { Form, FormGroup, ControlLabel, Checkbox, FormControl, HelpBlock } from 'rsuite';
import { useState } from 'react';
import YourSchema from './YourSchema'; // Importe o schema que você criou

const YourFormComponent = () => {
  const [formValue, setFormValue] = useState({
    repeteTodoAno: false,
    ano: ''
  });

  const [formError, setFormError] = useState({});

  const handleChange = formValue => {
    const { formError } = YourSchema.check(formValue);
    setFormValue(formValue);
    setFormError(formError);
  };

  return (
    <Form
      model={YourSchema}
      formValue={formValue}
      formError={formError}
      onChange={handleChange}
    >
      <FormGroup>
        <ControlLabel>Repete Todo Ano</ControlLabel>
        <Checkbox name="repeteTodoAno" />
      </FormGroup>
      {formValue.repeteTodoAno === false && (
        <FormGroup>
          <ControlLabel>Ano</ControlLabel>
          <FormControl name="ano" />
          {formError.ano && <HelpBlock>{formError.ano}</HelpBlock>}
        </FormGroup>
      )}
    </Form>
  );
};

export default YourFormComponent;
