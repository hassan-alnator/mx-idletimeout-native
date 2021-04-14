import { createElement, useState, useEffect, useRef } from "react";
import { View, PanResponder, Keyboard } from "react-native";
import { Alert } from './Alert';

export const IdleTracker = props => {
  const timerId = useRef(false);
  const warningTimerid = useRef(false);
  const [visible, setVisible] = useState(false);
  const [timeForInactivityInSecond, setTimeForInactivityInSecond] = useState(
    (props.minutes || 5) * 60 * 1000
  )

  useEffect(() => {
    
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        clearTimeout(timerId.current);
        clearTimeout(warningTimerid.current);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
         resetInactivityTimeout()
      }
    );
    
    return () => {
      clearTimeout(timerId.current);
      clearTimeout(warningTimerid.current);
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };

  }, []);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponderCapture: () => {
        // user starts touch
        resetInactivityTimeout()
      },
    })
  ).current

  const resetInactivityTimeout = () => {
    clearTimeout(timerId.current);
    clearTimeout(warningTimerid.current);

    timerId.current = setTimeout(() => {
      // action after user has been detected idle
      if (props.warnUser) {
        setVisible(true);
      }

      warningTimerid.current = setTimeout(() => {
        setVisible(false);
        props.onTimeOut();
        resetInactivityTimeout();

      }, (props.secondsAfterWarning || 5) * 1000);

    }, timeForInactivityInSecond)
  }


  

  return (
    <View style={{ flex: 1 }} {...panResponder.panHandlers}>
      {visible && <Alert text={props.warningText.value} onPress={() => setVisible(false)} buttonColor={props.buttonColor} /> }
      {props.content}
    </View>
  )
}
