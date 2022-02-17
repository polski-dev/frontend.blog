import { useState, useEffect } from "react";
import { RootState } from "store/store.index";
import { SliceTagType } from "types/types.tagState";
import { useSelector, useDispatch } from "react-redux";
import { addTagHome } from "store/slice/tag/store.slice.tag";

export default function useDispatchTagToStore() {
  const dispatch = useDispatch();
  const store = useSelector((state: RootState) => state);

  const updateTagHome = (tag: SliceTagType) => {
    if (!store.tag.home.data.length && !!tag?.data.length) setTimeout(() => dispatch(addTagHome({ home: tag })), 500);
  };

  return { dispatch, addTagHome, updateTagHome, store };
}
