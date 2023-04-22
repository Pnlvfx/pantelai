const UIpolicyText = ({ children, spacingClass }: ChildrenProps & { spacingClass: string }) => {
  return (
    <div className="ui-block ui-block--text">
      <div className={spacingClass}>
        <div className="pnl-container">
          <div className="cols-container">
            <div className="w-12-cols md:w-6-cols relative f-body-1">
              <div className="ui-richtext">
                <div>{children}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UIpolicyText;
