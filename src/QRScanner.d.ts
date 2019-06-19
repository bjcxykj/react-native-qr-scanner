import React, { PureComponent } from 'react';
import { ViewStyle, ImageURISource, ImageRequireSource } from 'react-native';
interface ScanRes {
  data: any,
  bounds: any[]
}
interface QRscannerProps {
  isRepeatScan: boolean,
  onRead(ScanRes):void,
  maskColor: string,
  borderColor: string,
  cornerColor: string,
  borderWidth: number,
  conerBorderWidth: number,
  conerBorderHorizontalLength: number,
  conerBorderVerticalLength: number,
  rectHeight: number,
  rectWidth: number,
  isCornerOffset: boolean, //边角是否偏移
  cornerOffsetSize: number,
  bottomHeight: number,
  scanBarAnimateTime: number,
  scanBarColor: string,
  scanBarImage: ImageRequireSource|ImageURISource,
  scanBarHeight: number,
  scanBarMargin: number,
  hintText: string,
  hintTextStyle: object,
  hintTextPosition: number,
  renderTopView: Function,
  renderBottomView: Function,
  isShowScanBar: boolean,
  topViewStyle: ViewStyle,
  bottomViewStyle: ViewStyle,
  flashMode: boolean,
  finderX: number,
  finderY: number,
  translucent: boolean
}
export default class QRScanner extends PureComponent <QRscannerProps>{}