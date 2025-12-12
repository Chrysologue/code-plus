import { useRef } from "react"

export default function FocusInput(){

    const ref = useRef(null)


    return(
        <>
            <input type="text" ref={ref}/>
            <button onClick={e => {
                ref.current.focus()
            }}>Focus Input</button>
        </>
    )
}