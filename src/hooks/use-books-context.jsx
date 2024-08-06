import { useContext } from "react";
import { BookContext } from "../contexts/book";

export function useBooksContext(){
    return useContext(BookContext)
}