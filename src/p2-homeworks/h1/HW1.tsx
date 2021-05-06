import React from 'react'
import AlternativeMessage from "./AlternativeMessage";
import Message from "./Message";

const messageData = {
    avatar: 'https://www.blast.hk/data/avatars/o/416/416604.jpg?1601372111',
    name: 'Tommy Angelo',
    message: 'I think it\'s important to keep a balance in things. Yeah, balance, that\'s the right word. Cause the guy who wants too much risks losing absolutely everything. Of course, the one who wants too little from life might not get anything at all.',
    time: '16:34',
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            <AlternativeMessage/>
            <hr/>
        </div>
    )
}

export default HW1
