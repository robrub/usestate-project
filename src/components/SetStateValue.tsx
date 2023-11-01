import { useState } from "react";
import './components.css';

export const SetStateValue = () => {

    const [message, setMessage] = useState('');


    return (
        <section className="section-part">
            <h3>Aggiornare una variabile di stato</h3>
            <p>
                Un esempio di utilizzo di una text box per aggiornare la variabile di stato.
            </p>
            <div>
                <input
                    type="text"
                    value={message}
                    placeholder="Enter a message"
                    onChange={e => setMessage(e.target.value)}
                />
                <p>
                    Questo è il valore della variabile dopo l'ultimo onChange: <strong> {message}</strong>
                </p>
            </div>
            <div style={{borderTop: '1px solid'} /** stili CSS inline in React */}>                
                <p>setMessage non sovrascrive il valore ma si comporta in questo modo:
                    <ul>
                        <li>Accoda l'operazione di aggiornamento</li>
                        <li>Si verifica il nuovo render</li>
                        <li>Restituisce il valore più recente conosciuto della variabile</li>
                    </ul>
                </p>
                <p>E' possibile che in molti casi occorra aggiornare la variabile di stato in base al valore precedente.</p>
                <p>In questi casi è possibile accedere al valore precedente indicando un funzione. All'interno di questa funzione eseguo la logica di aggiornamento avendo a disposizione il valore precedente.</p>
                <input
                    type="text"
                    value={message}
                    placeholder="Enter some letters"
                    onChange={e => {
                        const val = e.target.value;
                        setMessage(prev => prev + val)
                    }}
                />
                <p>
                    <strong>{message}</strong>
                </p>
            </div>
        </section>
    );
};
