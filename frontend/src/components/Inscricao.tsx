import { useFormik, Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components'
import logo from '../assets/senai_logo.png'

interface Props {
    isOpened: Boolean
}
export default function Inscricao(props: Props) {
    const Form = styled.form`
        background-color: #ffffff;
        position: absolute;
        top: 50%;
        left: calc(50% - 200px);
        width: 400px;
        display: flex;
        flex-direction: column;
        padding: 16px;
        border: 1px solid; 

        input, select{
            margin: 0.5rem 0
        }
    `
    const schema = Yup.object().shape({
        'nome': Yup.string().min(1, 'muito curto o nome').required('por favor digite o nome'),
        'cpf': Yup.string().length(14, 'preencha corretamente o cpf').required("por favor digite o cpf"),
        'email': Yup.string().email('digite um email válido').required('por favor digite o email'),
        'celular': Yup.string().length(11, 'digite um numero válido').required('Por favor digite o numero do celular'),
        'especializacao': Yup.string().required('Por favor, escolha sua especialização!'),
        'casa': Yup.string().required('Por favor, escolha sua casa!'),
    })
    if (props.isOpened == false) return
    return <div>
        <Formik
            initialValues={{
                nome: '',
                cpf: '',
                email: '',
                celular: '',
                especializacao: '',
                casa: ''
            }}
            validationSchema={schema}
            onSubmit={values => {
                event?.preventDefault()
                // same shape as initial values
                console.log(values);
            }}
        >
            {({ errors, touched }) => (
                <Form >
                    <span onClick={()=> window.location.reload()} style={{textAlign: "end"}}>FECHAR</span>
                    <img src={logo} width={110} style={{margin: 'auto'}}/>
                    <h3 style={{fontSize: '18px', textAlign: 'center'}}>Formulário de Inscrição de Voluntário na Campanha MS Pela Vida</h3>
                    <Field name="nome" placeholder="digite nome" />
                    {errors.nome && touched.nome ? (
                        <div>{errors.nome}</div>
                    ) : null}
                    <Field name="cpf" placeholder="digite cpf" />
                    {errors.cpf && touched.cpf ? (
                        <div>{errors.cpf}</div>
                    ) : null}
                    <Field name="celular" placeholder="digite celular" />
                    {errors.celular && touched.celular ? (
                        <div>{errors.celular}</div>
                    ) : null}
                    <Field name="email" placeholder="digite email" />
                    {errors.email && touched.email ? (
                        <div>{errors.email}</div>
                    ) : null}
                    <Field as='select' name="casa" placeholder="casa">
                        {errors.casa && touched.casa ? (
                            <div>{errors.casa}</div>
                        ) : null}
                        <option value="">Selecione casa</option>
                        <option value="professor">Professor</option>
                        <option value="tecnico">Tecnico</option>
                        <option value="engenheiro">Engenheiro</option>
                    </Field>
                    <Field as="select" name="especializacao" type="especializacao" placeholder="especializacao">
                        <option value="">Selecione especializacao</option>

                        <option value="FIEMS">FIEMS</option>
                        <option value="SESI">SESI</option>
                        <option value="SENAI">SENAI</option>
                    </Field>
                    {errors.especializacao && touched.especializacao ? <div>{errors.especializacao}</div> : null}
                    <button type="submit" className='btn btn-primary' style={{ width: '80%', margin: 'auto' }}>Submit</button>
                </Form>
            )}
        </Formik>

    </div>
}