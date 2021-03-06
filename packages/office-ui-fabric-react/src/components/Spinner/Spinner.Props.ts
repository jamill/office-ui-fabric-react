import * as React from 'react';
import { Spinner } from './Spinner';

export interface ISpinnerProps extends React.Props<Spinner> {

  /**
   * @deprecated
   * Deprecated and will be removed at >= 2.0.0. Use SpinnerSize instead.
   */
  type?: SpinnerType;

  /**
  * The size of Spinner to render. { extraSmall, small, medium, large }
  * @default SpinnerType.medium
  */
  size?: SpinnerSize;

  /**
  * The label to show next to the Spinner.
  */
  label?: string;

  /**
   * Additional CSS class(es) to apply to the Spinner.
   */
  className?: string;
}

export enum SpinnerSize {
  /**
   * 12px Spinner diameter
   */
  xSmall = 0,

  /**
   * 16px Spinner diameter
   */
  small = 1,

  /**
   * 20px Spinner diameter
   */
  medium = 2,

  /**
   * 28px Spinner diameter
   */
  large = 3
}

/**
 * @deprecated
 * Deprecated and will be removed at >= 2.0.0. Use SpinnerSize instead.
 */
export enum SpinnerType {
  /**
   * Deprecated and will be removed at >= 2.0.0. Use SpinnerSize.medium instead.
   */
  normal = 0,

  /**
   * Deprecated and will be removed at >= 2.0.0. Use SpinnerSize.large instead.
   */
  large = 1
}
