import { articeGetListCommentsInitialState, ArticeGetListCommentsType } from "utils/database/article/database.artice.index";

const initialStateArticeListComments: { id: number | null; type: string | null; comment: ArticeGetListCommentsType } = { id: null, type: null, comment: articeGetListCommentsInitialState };

export default initialStateArticeListComments;
