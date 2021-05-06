import React from 'react'
import s from './Message.module.css'

type MessageType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: MessageType) {
    return (
        <div className={s.main}>
            <div className={s.ava}>
                <img src={props.avatar}/>
            </div>
            <div className={s.field}>
                <div className={s.beak}>
                </div>
            </div>
            <div className={s.item}>
                <div className={s.name}>{props.name}</div>
                {props.message}
                <span className={s.time}>{props.time}</span>
            </div>
        </div>
    )
}

export default Message
