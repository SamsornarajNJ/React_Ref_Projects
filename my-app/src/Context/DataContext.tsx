import { createContext, useState } from "react";

//Interface of DataContext
interface ContextInterFace {
    user: string;
    setUser: React.Dispatch<React.SetStateAction<string>>;
}

//Initialize context
const DataContext = createContext<ContextInterFace>({user: '', setUser: () => {}});

export const Provider = ({children}:{children:React.ReactNode}) => {
    //const user ="sam1234";
    const [user, setUser] = useState('sam')
    
    return (
        <DataContext.Provider value={{user, setUser}}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;