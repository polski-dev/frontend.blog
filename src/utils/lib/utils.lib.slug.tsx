import { kebabCase, deburr } from "lodash";

export const slugFromTitle = (title: string) => kebabCase(deburr(title.toLowerCase()));
