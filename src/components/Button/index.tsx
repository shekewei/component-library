import React, { useState, useEffect } from 'react'
import classNames from 'classnames'

export enum ButtonSize {
  Large = 'lg',
  Small = 'sm'
}
export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Warning = 'warning',
  Link = 'link'
}

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children: React.ReactNode,
  href?: string
}
const Button: React.FC<BaseButtonProps> = (props) => {
  const {
    btnType = 'default',
    disabled = false,
    size = 'normal',
    children,
    href
  } = props

  //hs-btn hs-btn-normal hs-btn-lg hs-btn-sm
  const classes = classNames('hs-btn', {
    [`hs-btn-${btnType}`]: btnType,
    [`hs-btn-${size}`]: size,
    'hs-btn-disabled': (btnType === ButtonType.Link) && disabled
  })
  if (btnType === ButtonType.Link && href) {
    return (
      <a
        className={classes}
        href={href}
      >
        {children}
      </a>
    )
  } else {
    return (
      <button
        className={classes}
        disabled={disabled}
      >
        {children}
      </button>
    )
  }
}

export default Button