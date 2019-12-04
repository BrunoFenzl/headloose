export interface PageModel {
  id: string;
  title: string;
  path: string;
  content: any[];
}

export interface PagesModel {
  entities: { [id: number]: PageModel };
  loading: boolean;
  error: Error;
}
