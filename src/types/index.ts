import { Dispatch } from "react";

export const BLACK = "BLACK";
export const WHITE = "WHITE";

export type ThemeStateType = {
  ui: string;
  bg: string;
  ft: string;
}

export type blackThemeActionType = {
  type: typeof BLACK;
}

export type whiteThemeActionType = {
  type: typeof WHITE;
}

export type ThemeActionType = blackThemeActionType | whiteThemeActionType;

export type ThemeContextType = {
  toggle: boolean,
  setToggle: (toggle: boolean) => void;
state: ThemeStateType;
  dispatch: Dispatch<ThemeActionType>;
}

