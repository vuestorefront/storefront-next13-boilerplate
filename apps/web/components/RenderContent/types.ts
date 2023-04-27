type EntryFields<TFields> = Array<{
  fields: TFields;
}>;

export interface DynamicContentPage {
  component: string;
  content: EntryFields<any>;
  name: string;
  url: string;
}

export interface RenderContentProps {
  content: DynamicContentPage['content'];
}
