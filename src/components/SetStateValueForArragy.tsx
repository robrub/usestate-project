import { useState } from "react";
import './components.css';

type MessageType = {
    id: number;
    message: string;
}

export const SetStateValueForArray = () => {
    const [message, setMessage] = useState("");
    const [messageList, setMessageList] = useState<MessageType[]>([]);

    return (
        <section className="section-part">
            <h3>Aggiornare una variabile di stato di tipo Array</h3>
            <div>
                <input
                    type="text"
                    value={message}
                    placeholder="Enter a message"
                    onChange={e => {
                        setMessage(e.target.value);
                    }}
                />
                <input
                    type="button"
                    value="Add"
                    onClick={e => {
                        setMessageList([
                            ...messageList,
                            {
                                // Use the current size as ID (needed to iterate the list later)
                                id: messageList.length + 1,
                                message: message
                            }
                        ]);
                        setMessage(""); // Clear the text box
                    }}
                />
                <ul>
                    {messageList.map(currentMessageElement => (
                        <li key={currentMessageElement.id}>{currentMessageElement.message}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
};
