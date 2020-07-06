export enum AppTypes {
  ReactApp = "ReactApp",
  Library = "Library",
  UILibrary = "UILibrary",
}

export interface CommandArguments {
  name: string;
  type: AppTypes;
  authorName: string;
}

export interface AppTypeDependencies {
  [key: string]: {
    dependencies: string[];
    devDependencies: string[];
  };
}
