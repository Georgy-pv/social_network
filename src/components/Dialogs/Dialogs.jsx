import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';




function Dialogs(props) {
    let dialogElements = props.dialogsPage.dialogsData.map((d => <DialogItem key={d.id} id={d.id} name={d.name} />))
    let messageElements = props.dialogsPage.messagesData.map((m => <Message isYou={m.isYou} key={m.id} message = {m.message} />))
    
    let newMessageRef = React.createRef();
    
    let sendMessage = () => {
        props.addMessage();
    };

    let onMassageChange = () => {
        let newText = newMessageRef.current.value;
        props.updateNewMessageChange(newText)
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__list}>
                {dialogElements}
            </div>

            <div className={s.messages}>
                {messageElements}
                <div className={s.messages__new}>
                    <textarea onChange={onMassageChange} value={props.dialogsPage.newMessageText} ref={newMessageRef} className={s['messages__new-text']} placeholder="Введите текст" name="" id="" cols="30" rows="10"></textarea>
                    <button onClick={sendMessage} className={s['messages__new-btn']}>Отправить</button>
                </div>
            </div>
        </div>

    );
}

export default Dialogs;