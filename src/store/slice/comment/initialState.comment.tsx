import { articeGetListCommentsInitialState, ArticeGetListCommentsType } from "database/article/database.artice.index";

const initialStateArticeListComments: { id: number | null; type: string | null; comment: ArticeGetListCommentsType } = { id: null, type: null, comment: articeGetListCommentsInitialState };

export default initialStateArticeListComments;
