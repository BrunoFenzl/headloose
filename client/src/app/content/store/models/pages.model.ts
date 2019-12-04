export interface PageModel {
  id: string;
  title: string;
  path: string;
  content: any[];
}

export interface PagesModel {
  data: PageModel[];
  loading: boolean;
  error: Error;
}
