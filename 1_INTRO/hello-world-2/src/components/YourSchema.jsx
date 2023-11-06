import { Schema } from 'rsuite';

const { StringType, BooleanType } = Schema.Types;

const YourSchema = Schema.Model({
  repeteTodoAno: BooleanType().isRequired('Este campo é obrigatório'),
  ano: StringType().when('repeteTodoAno', {
    is: false,
    then: StringType().isRequired('Por favor, insira o ano.')
  })
});

export default YourSchema;
