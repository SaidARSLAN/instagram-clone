import { createContext } from "react";



const GlobalContext = createContext();


export function Provider ({children}) {


    const sendPostData = (imgPath,comments,hashtags) => {
        console.log(imgPath,comments,hashtags);
    }


    return (
        <GlobalContext.Provider value={{sendPostData}}>
            {children}
        </GlobalContext.Provider>
    )
}




export default GlobalContext