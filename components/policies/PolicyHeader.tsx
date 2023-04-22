interface PolicyHeaderProps {
  title: 'Privacy policy' | 'Term of use';
}

const PolicyHeader = ({ title }: PolicyHeaderProps) => {
  return (
    <>
      <div className="pnl-container">
        <div className="pt-40">
          <div className="cols-container">
            <div className="w-6-cols lg:w-8-cols">
              <h1 className="text-[2.625rem] md:text-[3.4375rem] leading-[110%] md:pr-40 lg:pr-44">{title}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-spacing-7">
        <div className="pnl-container">
          <div className="border-t border-white pt-2">
            <div className="cols-container">
              <div className="w-6-cols md:w-2-cols relative">
                <div className="lg:absolute top-0 left-0 right-0">
                  <span className="block text-[16px] font-bold leading-[130%]">Updated</span>
                  <span className="block mt-[2px] f-body-1">April 19, 2023</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PolicyHeader;
