import React from "react";
import { DraggableCore } from "react-draggable";
import debounce from "lodash.debounce";
import $ from "cash-dom";
import classNames from "classnames/bind";
import style from "./ResizePanel.module.css";

const cx = classNames.bind(style);

class ResizePanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { size: 0 };

    this.contentRef = React.createRef();
    this.wrapperRef = React.createRef();
    this.validateSize = debounce(this.validateSize, 100).bind(this);
  }

  isHorizontal = () => this.props.direction === "w" || this.props.direction === "e";

  componentDidMount() {
    const content = this.contentRef.current;
    const actualContent = content.children[0];
    let initialSize = this.isHorizontal()
      ? $(actualContent).outerWidth(true)
      : $(actualContent).outerHeight(true);

    // Initialize the size value based on the content's current size
    this.setState({ size: initialSize });
    this.validateSize();
  }

  validateSize() {
    const isHorizontal = this.isHorizontal();
    const content = this.contentRef.current;
    const wrapper = this.wrapperRef.current;
    const actualContent = content.children[0];
    let containerParent = wrapper.parentElement;

    let minSize = isHorizontal
      ? actualContent.scrollWidth
      : actualContent.scrollHeight;

    let margins = isHorizontal
      ? $(actualContent).outerWidth(true) - $(actualContent).outerWidth()
      : $(actualContent).outerHeight(true) - $(actualContent).outerHeight();
    minSize += margins;

    if (this.state.size !== minSize) {
      this.setState({ size: minSize });
    } else {
      let overflow = isHorizontal
        ? containerParent.scrollWidth - containerParent.clientWidth
        : containerParent.scrollHeight - containerParent.clientHeight;

      if (overflow) {
        this.setState({
          size: isHorizontal
            ? actualContent.clientWidth - overflow
            : actualContent.clientHeight - overflow
        });
      }
    }
  }

  handleDrag = (e, ui) => {
    const { direction } = this.props;
    const factor = direction === "e" || direction === "s" ? -1 : 1;

    let delta = this.isHorizontal() ? ui.deltaX : ui.deltaY;
    this.setState((prevState) => ({ size: Math.max(10, prevState.size - delta * factor) }));
  };

  handleDragEnd = () => {
    this.validateSize();
  };

  render() {
    const dragHandlers = {
      onDrag: this.handleDrag,
      onStop: this.handleDragEnd
    };
    const { direction, containerClass: userContainerClass, handleClass: userHandleClass, borderClass: userBorderClass, style: userStyle } = this.props;
    const isHorizontal = this.isHorizontal();

    let containerClass = cx({
      ContainerHorizontal: isHorizontal,
      ContainerVertical: !isHorizontal
    });

    if (userContainerClass) {
      containerClass += ` ${userContainerClass}`;
    }

    let containerStyle = { ...userStyle } || {};
    if (this.state.size !== 0) {
      containerStyle.flexGrow = 0;
      containerStyle[isHorizontal ? "width" : "height"] = "auto";
    }

    let handleClasses = userHandleClass || cx({
      ResizeHandleHorizontal: isHorizontal,
      ResizeHandleVertical: !isHorizontal
    });

    let resizeBarClasses = userBorderClass || cx({
      ResizeBarHorizontal: isHorizontal,
      ResizeBarVertical: !isHorizontal
    });

    let contentStyle = isHorizontal
      ? { width: this.state.size + "px" }
      : { height: this.state.size + "px" };
    let contentClassName = cx("ResizeContent", {
      ResizeContentHorizontal: isHorizontal,
      ResizeContentVertical: !isHorizontal
    });

    const childrenCount = React.Children.count(this.props.children);

    let content = (
      <div
        key="content"
        ref={this.contentRef}
        className={contentClassName}
        style={contentStyle}
      >
        {childrenCount === 1 ? React.Children.only(this.props.children) : (
          <div>
            {this.props.children}
          </div>
        )}
      </div>
    );

    let handle = (
      <DraggableCore key="handle" {...dragHandlers}>
        <div className={resizeBarClasses}>
          <div className={handleClasses}>
            <span />
          </div>
        </div>
      </DraggableCore>
    );

    // Insert the handle at the beginning of the content if our direction is west or north
    if (direction === "w" || direction === "n") {
      content = [handle, content];
    } else {
      content = [content, handle];
    }

    return (
      <div
        ref={this.wrapperRef}
        className={containerClass}
        style={containerStyle}
      >
        {content}
      </div>
    );
  }
}

export default ResizePanel;
