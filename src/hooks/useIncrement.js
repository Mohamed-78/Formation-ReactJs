import { useState } from "react";

export function useIncrement(initialValue = 0){
    const [state, setState] = useState(initialValue)
    return{
        count: state,
        increment: () => setState(v => v+1),
        decrement: () => setState(v => v-1)
    }
}