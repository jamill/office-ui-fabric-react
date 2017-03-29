/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:enable:no-unused-variable */
import {
  BaseComponent,
  autobind,
  css,
  divProperties,
  getNativeProps
} from '../../Utilities';
import { ITooltipHostProps } from './TooltipHost.Props';
import { Tooltip } from './Tooltip';
import { TooltipDelay } from './Tooltip.Props';
import styles from './Tooltip.scss';

export class TooltipHost extends BaseComponent<ITooltipHostProps, any> {

  public static defaultProps = {
    delay: TooltipDelay.medium
  };

  // The wrapping div that gets the hover events
  private _tooltipHost: HTMLElement;

  // Constructor
  constructor(props: ITooltipHostProps) {
    super(props);

    this.state = {
      isTooltipVisible: false,
    };
  }

  // Render
  public render() {
    let { content, children, directionalHint, delay, layerHostId } = this.props;
    let { isTooltipVisible } = this.state;
    return (
      <div
        className={ css('ms-TooltipHost', styles.host) }
        ref={ this._resolveRef('_tooltipHost') }
        { ...{ onFocusCapture: this._onTooltipMouseEnter } }
        { ...{ onBlurCapture: this._onTooltipMouseLeave } }
        onMouseEnter={ this._onTooltipMouseEnter }
        onMouseLeave={ this._onTooltipMouseLeave }
      >
        { children }
        { isTooltipVisible ? (
          <Tooltip
            delay={ delay }
            content={ content }
            targetElement={ this._tooltipHost }
            directionalHint={ directionalHint }
            calloutProps={ { onDismiss: this._onTooltipCallOutDismiss, layerHostId: layerHostId} }
            { ...getNativeProps(this.props, divProperties) }
          >
          </Tooltip>
        ) : (null) }
      </div>
    );
  }

  // Show Tooltip
  @autobind
  private _onTooltipMouseEnter(ev: any) {
    this.setState({
      isTooltipVisible: true
    });
  }

  // Hide Tooltip
  @autobind
  private _onTooltipMouseLeave(ev: any) {
    this.setState({
      isTooltipVisible: false
    });
  }

  // Hide Tooltip
  @autobind
  private _onTooltipCallOutDismiss() {
    this.setState({
      isTooltipVisible: false
    });
  }
}