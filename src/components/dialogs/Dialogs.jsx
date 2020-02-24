import React from 'react';
import s from './Dialogs.module.scss';
import DialogItem from './dialogItem/DialogItem';
import Message from './message/Message';
import NewPost from './../profile/myPost/newPost/NewPost';


const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = props.state.messages.map(m => <Message message={m.message} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <NewPost />
                </div>
            </div>
        </div>

    );
}

export default Dialogs;