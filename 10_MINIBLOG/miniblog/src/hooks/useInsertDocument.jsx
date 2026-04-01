// Esse hook é responsável por inserir um documento em uma coleção do Firestore. Ele utiliza o useReducer para gerenciar os estados de loading, error e inserted document, e o useState para lidar com o cancelamento da operação em caso de desmontagem do componente.
import { useState, useEffect, useReducer } from "react";

// firebase imports
import { db } from "../firebase/config";

// reducer para lidar com os estados de loading, documents e error
import { collection, addDoc, Timestamp } from "firebase/firestore";

// estado inicial do reducer
const initialState = {
	loading: null,
	error: null,
};

// reducer para lidar com os estados de loading, documents e error
const insertReducer = (state, action) => {
	switch (action.type) {
		case "LOADING":
			return { loading: true, error: null };
		case "INSERTED_DOC":
			return { loading: false, error: null };
		case "ERROR":
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

// custom hook para inserir documentos
export const useInsertDocument = (docCollection) => {
	const [response, dispatch] = useReducer(insertReducer, initialState);

	// deal with memory leak
	const [cancelled, setCancelled] = useState(false);

	// função para evitar dispatch se o componente for desmontado
	const checkCancelBeforeDispatch = (action) => {
		if (!cancelled) {
			dispatch(action);
		}
	};

	// função para inserir um documento na coleção
	const insertDocument = async (document) => {
		checkCancelBeforeDispatch({ type: "LOADING" });

		try {
			const newDocument = { ...document, createdAt: Timestamp.now() };

			const insertedDocument = await addDoc(
				collection(db, docCollection),
				newDocument,
			);

			checkCancelBeforeDispatch({
				type: "INSERTED_DOC",
				payload: insertedDocument,
			});
		} catch (error) {
			checkCancelBeforeDispatch({
				type: "ERROR",
				payload: error.message,
			});
		}
	};

	// cleanup function para evitar memory leak
	useEffect(() => {
		return () => setCancelled(true);
	}, []);

	return { insertDocument, response };
};
