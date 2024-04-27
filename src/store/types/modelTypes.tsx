export interface Word {
  symbol: string;
  meaning: string;
  pronunciation: string;
  latinbased: string;
  group: string;
}

export interface Group {
  name: string;
  content: Word[];
  version: number;
}

export interface MenuItem {
  name: string;
  subtitle: string;
  content: string;
  isLargeContent: boolean;
  isExperimental: boolean;
}

export interface Menu {
  name: string;
  content: MenuItem[];
}

export interface Config {
  language: string;
  menu: Menu[];
}

export interface WordState {
  pending: boolean;
  groups: Group[];
  error: string | null;
}

export interface MenuState {
  pending: boolean;
  menuOptions: Menu[];
  error: string | null;
}

export interface VerbGroupsState {
  pending: boolean;
  groups: Group[];
  error: string | null;
}
