import { Popover, PopoverContent } from "@carbon/react";

function Popover() {
  return (
    <div>
      <Popover open caret dropShadow highContrast={false} align="left">
        <div className="popover-trigger">
          <Checkbox />
        </div>
        <PopoverContent>
          <div className="popover-example-content">
            <p className="popover-title">Available storage</p>
            <p className="popover-details">
              This server has 150 GB of block storage remaining.
            </p>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default Popover;
