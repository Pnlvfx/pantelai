const UIpolicyHead = ({ title }: { title: string }) => {
  return (
    <div className="ui-block">
      <div className="mt-spacing-7">
        <div className="pnl-container">
          <div className="cols-container">
            <div className="md:w-6-cols">
              <h2 className="f-heading-3">{title}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UIpolicyHead;
