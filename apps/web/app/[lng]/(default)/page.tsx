import { RenderContent } from '~/app/components/RenderContent';
import { sdk } from '~/sdk';

async function getContent(url: string) {
  return sdk.commerce.getContent({ url });
}

export default async function Page() {
  const url = 'home-page';
  const content = await getContent(url);

  return (
    <>
      {content && (
        <div className="cms-content">
          {content?.map(({ fields }, index) => (
            <RenderContent content={fields.content} key={`${fields.component}-${index}`} />
          ))}
        </div>
      )}
    </>
  );
}
