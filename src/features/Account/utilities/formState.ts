export function formState(): any {
    return {
        username: {
            value: '',
            validation: {
                required: true,
                minLength: 1,
                maxLength: 18
            },
            valid: false,
            touched: false,
            errorMessage: 'Username has to be from 1 to 18 characters'
        },
        email: {
            value: '',
            validation: {
                required: true,
                isEmail: true
            },
            valid: false,
            touched: false,
            errorMessage: 'Please, provide valid email'
        },
        password: {
            value: '',
            validation: {
                required: true,
                minLength: 6,
                maxLength: 50
            },
            valid: false,
            touched: false,
            errorMessage: 'Password has to be from 6 to 50 characters'
        }
    };
}
