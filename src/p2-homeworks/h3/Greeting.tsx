import React, {ChangeEvent, KeyboardEvent} from 'react'
import SuperInputText from '../h4/common/c1-SuperInputText/SuperInputText';
import s from './Greeting.module.css'
import {ErrorType} from "./GreetingContainer";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (value: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: ErrorType // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            addUser();
        }
    }
    /*const inputClass = error.length !== 0 ? s.error : s.notError*/// need to fix with (?:)
    const changeActive = error.length > 0;

    return (
        <div className={s.input}>
            <div>
                <SuperInputText value={name}
                                 onChange={setNameCallback}
                                 error={error}
                                 onKeyPress={onKeyPressHandler}/>
            </div>
            <div>
                <SuperButton disabled={changeActive} onClick={addUser}>add</SuperButton>
                <span>{totalUsers}</span>
            </div>
            {/*<br/>*/}
            {/*<div className={s.errorField}>{error}</div>*/}
        </div>
    )
}

export default Greeting
