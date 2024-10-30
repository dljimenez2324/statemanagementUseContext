import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";

interface CounterStore {
    counter: number;
    max: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
}

const useCounterStore = create<CounterStore>(set => ({
    counter: 0,
    max: 5,
    increment: () => set(store => ({counter: store.counter + 1})),
    decrement: () => set(store => ({counter: store.counter - 1})),
    reset: () => set(() => ({max: 10}))
}));

// if you want to use devtools, install npm i simple-zustand-devtools  for the dev tools  then   npm i -D @types/node  to have access to process
// then include
if(process.env.NODE_ENV === 'development')

    mountStoreDevtool('Counter Store', useCounterStore);


export default useCounterStore;