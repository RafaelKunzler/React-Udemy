import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { collection, query, orderBy, onSnapshot, where } from "firebase/firestore";

export const useFetchDocuments = (docCollection, search = null, uid = null) => {
    
    const [ document, setDocuments ] = useState(null)
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    // deal with memory leak
    const [cancelled, setCancelled] = useState(false);

    useEffect(() => {

        async function loadDate() {
            if(cancelled) return

            setLoading(true)

            const colletionRef = await collection(db, docCollection)
        }

    }, [docCollection, search, uid, cancelled])

    
}