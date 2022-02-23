import { RootState } from "store/store.index";
import { TagWithOnlyTitleType } from "database/database.restAPI.index";
import { useSelector, useDispatch } from "react-redux";
import { addTagHome } from "store/slice/tag/store.slice.tag";

export default function useDispatchTagToStore() {
  const dispatch = useDispatch();
  const store = useSelector((state: RootState) => state);

  const updateTagHome = (data: TagWithOnlyTitleType) => {
    if (!store.tag.home.data.length && !!data.data.tag.data.length) setTimeout(() => dispatch(addTagHome({ home: data.data.tag })), 500);
  };

  return { dispatch, addTagHome, updateTagHome, store };
}
