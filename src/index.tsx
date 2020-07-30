import { NativeModules } from 'react-native';

type FilipetaType = {
  multiply(a: number, b: number): Promise<number>;
};

const { Filipeta } = NativeModules;

export default Filipeta as FilipetaType;
