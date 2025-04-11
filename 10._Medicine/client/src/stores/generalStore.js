import { readable } from "svelte/store";

export const BASE_URL = readable(import.meta.env.VITE_BASE_URL || "http://localhost:8080");