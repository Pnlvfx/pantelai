export interface Product {
  title: string;
  description: string;
  url: string;
}

const Product = ({ description, url, title }: Product) => {
  return (
    <>
      <h1 className="text-[2.625rem] md:text-[3.4375rem] leading-[110%] pointer-events-auto">
        {description}
      </h1>
      <ul className="mt-12 mr-[60px] flex flex-row flex-wrap items-center md:mr-0 pointer-events-auto">
        <li className="mr-4 shrink-0 relative mb-[10px]">
          <a
            rel="noopener"
            target="_blank"
            href={url}
            className="relative inline-block"
          >
            <span className="flex items-center">
              <span className="underline underline-offset-4 text-[16px] leading-[130%]">
                {title}
              </span>
            </span>
          </a>
        </li>
      </ul>
    </>
  );
};

export default Product;
