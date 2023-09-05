'use client'
import React from 'react'

type Props = {
  className?: string
}
export default function TrayIcon(props: Props) {
  const { className } = props
  return (
    <svg
      width="18"
      className={className}
      height="14"
      viewBox="0 0 18 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16.5538 10.148H1.44613C1.16541 10.148 0.901089 10.0176 0.732813 9.79273C0.563757 9.56784 0.511831 9.27775 0.591087 9.00796C1.41333 6.21326 3.59076 4.0007 6.36125 3.12691C6.35696 3.06991 6.35462 3.01291 6.35462 2.95473C6.35462 1.49609 7.54113 0.30957 8.99978 0.30957C10.4584 0.30957 11.6449 1.49609 11.6449 2.95512C11.6449 3.01291 11.6422 3.0703 11.6387 3.1273C14.4104 4.0007 16.5866 6.21483 17.4089 9.00874C17.4885 9.27814 17.4354 9.56745 17.2679 9.79195C17.0996 10.0176 16.8345 10.148 16.5538 10.148ZM9.00017 1.96929C8.51799 1.96929 8.11546 2.31794 8.03112 2.77553C8.34932 2.74078 8.67338 2.72243 9.00017 2.72243C9.32696 2.72243 9.65102 2.74078 9.96883 2.77553C9.8845 2.31755 9.48235 1.96929 9.00017 1.96929Z" />
      <path d="M1.24506 11.2104H16.7553C17.4428 11.2104 18 11.7628 18 12.4504C18 13.1387 17.4424 13.6908 16.7553 13.6908H1.24506C0.556731 13.6908 0.000366415 13.1387 0.000366415 12.4504C-2.26845e-05 11.7628 0.55712 11.2104 1.24506 11.2104Z" />
    </svg>
  )
}
