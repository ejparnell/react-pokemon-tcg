import styled from 'styled-components'

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const SubmitButton = styled.input`
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.lightSecondary};
    border: none;
    border-radius: 5px;
    padding: 0.5rem;
    margin-top: 1rem;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
        background-color: ${props => props.theme.darkSecondary};
    }
    font: inherit;
`

const Input = styled.input`
    margin: 0.5rem 0;
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid ${props => props.theme.primary};
`

export function AuthForm({ handleChange, handleSubmit, formData, signUpAction }) {
    return (
        <Form onSubmit={handleSubmit}>
            <label htmlFor='username'>Username</label>
            <Input
                type='text'
                id='username'
                name='username'
                value={formData.username}
                onChange={handleChange}
            />
            <label htmlFor='password'>Password</label>
            <Input
                type='password'
                id='password'
                name='password'
                value={formData.password}
                onChange={handleChange}
            />
            {signUpAction && (<>
                <label htmlFor='passwordConf'>Confirm Password</label>
                <Input
                    type='password'
                    id='passwordConf'
                    name='passwordConf'
                    value={formData.passwordConf}
                    onChange={handleChange}
                />
            </>
            )}
            <SubmitButton type='submit' value={signUpAction ? 'Sign Up' : 'Sign In'} />
        </Form>
    )
}