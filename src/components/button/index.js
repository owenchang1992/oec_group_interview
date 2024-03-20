import './button.css';
import { forwardRef } from 'react'

function Button(props, ref) {
  return (
    <button ref={ref} className="button" {...props}>
      {props.children}
    </button>
  );
}

export default forwardRef(Button);