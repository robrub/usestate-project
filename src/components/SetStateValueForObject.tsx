import { useState } from "react";
import './components.css';

export const SetStateValueForObject = () => {

    const [messageObj, setMessageObj] = useState({ message: '', id: 1 });

    return (
        <section className="section-part">
            <h3>Aggiornare una variabile di stato di tipo Object</h3>
            <div>
                <p>Questo metodo non funziona.........</p>
                <input
                    type="text"
                    value={messageObj.message}
                    placeholder="Enter a message"
                    onChange={e => {
                        // Modifico la proprietà della variabile di stato messageObj.
                        // Purtroppo (o per fortuna) le variabili di stato sono IMMUTABILI e quindi 
                        // non viene recepito l'aggiornamento della proprietà .messagge e quindi non funziona.
                        messageObj.message = e.target.value;
                        setMessageObj(messageObj); // Doesn't work
                    }}
                />
                <p>
                    <strong>Id: {messageObj.id} - Message: {messageObj.message}</strong>
                </p>
            </div>
            <div style={{ borderTop: '1px solid' } /** stili CSS inline in React */}>
                <p>Per aggiornare una proprietà di un oggetto occorre creare un nuovo oggetto perchè React quando controlla se la variabile di stato ha subito delle variazioni con Object.is() che cono verifica la variazione di tutte le proprietà ma solo se l'oggetto è un oggetto diverso.</p>
                <p>Per questo motivo occorre creare un nuovo oggetto (o farne una copia) e poi passarla alla funzione set di modifica dello stato.</p>
                <input
                    type="text"
                    value={messageObj.message}
                    placeholder="Enter a message"
                    onChange={e => {
                        // Creo una nuova copia dell'oggetto con i nuovi valori da passare a setMessageObj
                        const newMessageObj = { message: e.target.value, id: messageObj.id };
                        setMessageObj(newMessageObj);
                    }}
                />
                <p>
                    <strong>Id: {messageObj.id} - Message: {messageObj.message}</strong>
                </p>
            </div>
            <div style={{ borderTop: '1px solid' } /** stili CSS inline in React */}>
                <p>Esiste un modo più semplice ed elegante per creare un nuovo oggetto.</p>
                <p>E' possibile usare lo spread operator e fare una copia dell'oggetto (shallow copy) usando la tecnica di accedere allo stato precedente.</p>
                <p>Questo metodo risulta molto utile quando l'oggetto ha molte proprietà.</p>
                <input
                    type="text"
                    value={messageObj.message}
                    placeholder="Enter a message"
                    onChange={e => {
                        const val = e.target.value;
                        /**
                         * prevState è il valore precedente dell'oggetto.
                         * ...prevState estrapola tutte le proprietà dell'oggetto che ci permette di fare una "copia".
                         * A questo punto passandogli "message: val" tutte le proprietà originali rimangono invariate mentre messagge viene sovrascritto con il nuovo valore.
                         */
                        setMessageObj(prevState => {
                            return { ...prevState, message: val }
                        });
                    }}
                />
                <p>
                    <strong>Id: {messageObj.id} - Message: {messageObj.message}</strong>
                </p>
            </div>
        </section>
    );
};
