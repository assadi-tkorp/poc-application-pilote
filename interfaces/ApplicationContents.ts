export type AppContentType = {
  id: string | number;
  name: string;
  packageName: string;
  versionName: number;
  icon?: string;
};

export type AppContentListType = Array<AppContentType>;
