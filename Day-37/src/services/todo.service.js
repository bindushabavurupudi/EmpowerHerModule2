import axios from "axios";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc
} from "firebase/firestore";
import { db } from "../firebase/firebase.config";

const todosRef = collection(db, "todos");

export const createTodo = (todo) => addDoc(todosRef, todo);

export const fetchTodos = async (uid) => {
  const snapshot = await getDocs(todosRef);
  return snapshot.docs
    .map(doc => ({ id: doc.id, ...doc.data() }))
    .filter(todo => todo.uid === uid);
};

export const updateTodo = (id, data) =>
  updateDoc(doc(db, "todos", id), data);

export const deleteTodo = (id) =>
  deleteDoc(doc(db, "todos", id));
