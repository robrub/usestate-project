import { useState } from "react";
import './components.css';

export const Declare = () => {
    /** useState ritorna un array */
    const messageStateIsAnArray = useState('');
    const messageStateFromArray = messageStateIsAnArray[0]; // Contains ''
    const setMessageStateFromArray = messageStateIsAnArray[1]; // It's a function
    
    /** Usando il destructuring è tutto più semplice e leggibile */
    const [messageStateDestructuring, setMessageStateDesctructuring] = useState('');

    /**
     * I valori iniziali vengono passati solo alla prima chiamata di useState,
     * Durante i render succesivi gli argomenti vengono ignorati.
     */
    const [messageState] = useState('Hello World!'); // Stringa
    const [listMessage] = useState([]); // Array
    const [expensiveMessage] = useState(() => expensiveComputation()); // Funzione che ritorna un valore



    return (
        <section className="section-part">
            <h3>Dichiarare una variabile di stato e inizializzarla</h3>
            <p>Le variabili di stato possono essere usate come tutte le altre variabili</p>
            <p>messageState: {messageState}</p>
            <p>lisMessage length: {listMessage.length}</p>
            <p>expensiveMessage: {expensiveMessage}</p>

        </section>
    );
};

const expensiveComputation = () => {
    return 'Expensive computation';
}

