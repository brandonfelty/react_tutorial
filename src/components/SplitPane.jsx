import React, {
  createRef,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react';
import SplitPaneContext from '../contexts/SplitPaneContext';

const SplitPane = ({ children, ...props }) => {
  const [clientHeight, setClientHeight] = useState(null);
  const [clientWidth, setClientWidth] = useState(null);
  const yDividerPos = useRef(null);
  const xDividerPos = useRef(null);

  const onMouseHoldDown = (e) => {
    yDividerPos.current = e.clientY;
    xDividerPos.current = e.clientX;
  };

  const onMouseHoldUp  = (e) => {
    yDividerPos.current = null;
    xDividerPos.current = null;
  };

  

};

export default SplitPane;