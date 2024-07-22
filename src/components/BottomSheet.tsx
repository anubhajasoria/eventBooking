import React, { useRef, useEffect } from "react";
import { Dimensions, View } from "react-native";
import { Modalize } from "react-native-modalize";

const CustomBottomSheet = ({
  visible,
  HeaderComponent,
  ScrollableComponent,
  FooterComponent,
  onClose,
  childrenStyles,
  modal_height,
  alwaysOpen = false,
}) => {
  const bottomsheet = useRef();
  const DEVICE_HEIGHT = Dimensions.get("screen").height;
  useEffect(() => {
    if (visible) {
      bottomsheet.current?.open();
    } else {
      bottomsheet.current?.close();
    }
  }, [visible]);

  return (
    <Modalize
      ref={bottomsheet}
      // adjustToContentHeight
      // alwaysOpen={alwaysOpen ? DEVICE_HEIGHT * 0.54 : 0}
      HeaderComponent={HeaderComponent}
      onClose={onClose}
      childrenStyle={childrenStyles}
      FooterComponent={FooterComponent}
      modalHeight={modal_height ? modal_height : DEVICE_HEIGHT * 0.6}
      // snapPoint={DEVICE_HEIGHT * 0.54}
      overlayStyle={{ backgroundColor: "rgba(0,0,0,0)" }}
      modalStyle={{
        backgroundColor: "white",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
      }}
      // handleStyle={{ backgroundColor: "red" }}
    >
      {ScrollableComponent}
    </Modalize>
  );
};

export default CustomBottomSheet;
