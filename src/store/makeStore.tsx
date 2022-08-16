import { actions } from './sidebar.reducer';
import { 
    createContext, 
    useContext, 
    ReactNode, 
    useState, 
    Dispatch, 
    useReducer,
    useEffect
 } from "react";


interface IOptions {
    persist?: boolean;
}

interface IStore<T> {
    name: string;
    initialState: T;
    reducer: (state: any, action: any) => any;
    options?: IOptions;
}
export const makeStore = ({name, initialState, reducer, options: {persist = false} = {}}: IStore<any>) => {
    const storeContext = createContext<any>(initialState);
    const dispatchContext = createContext<Dispatch<any>>(() => null)

    const Provider = ({children}: {children: ReactNode}) => {
        const [store, dispatch] = useReducer(reducer, initialState);
        const [initialized, setInitialized] = useState<boolean>(false);

        const initializeState = async () => {
            if (persist) {
                const persistedState = await localStorage.getItem(name);
                if (persistedState) {
                    dispatch({type: actions.LOADED_CACHE, payload: JSON.parse(persistedState)});
                }
            }
            setInitialized(true);
        }

        useEffect(() => {
            if (persist) {
                if(initialized){
                    localStorage.setItem(name, JSON.stringify(store));
                }
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [store]);

        useEffect(() => {
            initializeState()
        },[])
        

        return(
            <dispatchContext.Provider value={dispatch}>
                <storeContext.Provider value={store}>
                    {children}
                </storeContext.Provider>
            </dispatchContext.Provider>
        )
    }

    const useStore = () => useContext(storeContext);
    const useDispatch = () => useContext(dispatchContext);

    if(!useStore || !useDispatch) {
        throw new Error('Can not call hook outside of provider');
    }

    return {
        Provider,
        useStore,
        useDispatch,
        Consumer: storeContext.Consumer,
    }
}