import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3'

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

export type ErrorType = '' | 'Enter your name!'

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<ErrorType>('Enter your name!') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        if (e.currentTarget.value.match(/[ #&?0123456789]/ig) !== null || e.currentTarget.value.length === 0) {
            setError('Enter your name!');
            setName(e.currentTarget.value);
        } else {
            setError(''); // need to fix
            setName(e.currentTarget.value);
        }
    }
    const addUser = () => {
        if (error.length === 0) {
            addUserCallback(name);
            alert(`Hello ${name}!`);
            setName('');
            setError('Enter your name!');// need to fix
        } else {
            alert('Enter correct your name!');
        }
    }

    const totalUsers = users.length; // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
