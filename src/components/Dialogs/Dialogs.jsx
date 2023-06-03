import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';




function Dialogs(props) {
    let dialogElements = props.dialogsData.map((d => <DialogItem key={d.id} id={d.id} name={d.name} />))
    let messageElements = props.messagesData.map((m => <Message key={m.id} message = {m.message} />))
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__list}>
                {dialogElements}dsadad
            </div>

            <div className={s.messages}>
                {messageElements}
            </div>
        </div>

    );
}

export default Dialogs;