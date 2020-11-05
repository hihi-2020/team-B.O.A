import React from 'react';
import MouseTooltip from 'react-sticky-mouse-tooltip';

class Mouse extends React.Component {
  state = {
    isMouseTooltipVisible: false,
  };

  toggleMouseTooltip = () => {
    this.setState(prevState => ({ isMouseTooltipVisible: !prevState.isMouseTooltipVisible }));
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleMouseTooltip}>
          Toggle mouse tooltip
        </button>
        <MouseTooltip
          visible={this.state.isMouseTooltipVisible}
          offsetX={10}
          offsetY={10}
        >
          <span>Follow the cursor!</span>
        </MouseTooltip>
      </div>
    );
  }
}

export default Mouse