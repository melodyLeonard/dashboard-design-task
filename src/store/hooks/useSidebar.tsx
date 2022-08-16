import { actions, useDispatch, useStore } from "../sidebar.reducer"


export const useSidebar = () => {
    const store = useStore();
    const dispatch = useDispatch();

    const toggleSidebar = () => {
        dispatch({type: actions.TOGGLE_SIDEBAR});
    }

    return {
        toggleSidebar,
        isOpen: store.isOpen,
        cache: store.cache
    }
}