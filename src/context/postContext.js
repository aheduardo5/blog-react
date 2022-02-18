import { createContext } from 'react'
import { usePost } from '../hooks/usePost';

export const postContext = createContext({
    addPostHandler: () => {},
    addCommentHandler: () => {},
    posts: [{}],
    deleteHandler: () => undefined


});

export const PostContextProvider = ({children}) => {
    const contextValue = usePost();

    return(
        <postContext.Provider value={contextValue}>
            {children}
        </postContext.Provider>
    )
}