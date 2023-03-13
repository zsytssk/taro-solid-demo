// global.d.ts
declare module '@tarojs/components' {
  import { JSXElement } from 'solid-js';
  export * from '@tarojs/components/types/index';
  import {
    PickerSelectorProps,
    PickerMultiSelectorProps,
    PickerTimeProps,
    PickerDateProps,
    PickerRegionProps,
  } from '@tarojs/components/types/Picker';
  // 下面示例是react的定义，vue下可能有所不同,原理是一样的
  import {
    ViewProps,
    IconProps,
    ProgressProps,
    RichTextProps,
    TextProps,
    ButtonProps,
    CheckboxProps,
    CheckboxGroupProps,
    FormProps,
    InputProps,
    LabelProps,
    PickerViewProps,
    PickerViewColumnProps,
    RadioProps,
    RadioGroupProps,
    SliderProps,
    SwitchProps,
    CoverImageProps,
    TextareaProps,
    CoverViewProps,
    MovableAreaProps,
    MovableViewProps,
    ScrollViewProps,
    SwiperProps,
    SwiperItemProps,
    NavigatorProps,
    AudioProps,
    CameraProps,
    ImageProps,
    LivePlayerProps,
    VideoProps,
    CanvasProps,
    AdProps,
    WebViewProps,
    BlockProps,
    MapProps,
    SlotProps,
    CustomWrapperProps,
  } from '@tarojs/components';

  type Props<T> =
    | Omit<T, 'ref' | 'className' | 'children'>
    | {
        /** class 名 */
        class?: string;
        /** 子元素 */
        children?: JSXElement;
        classList?: { [key: string]: boolean };
        ref?: JSXElement | ((node: JSXElement) => void);
      };
  type Components<T> = (props: Props<T>) => JSXElement;

  /** View元素 */
  export const View: Components<ViewProps>;
  export const Icon: Components<IconProps>;
  export const Progress: Components<ProgressProps>;
  export const RichText: Components<RichTextProps>;
  export const Text: Components<TextProps>;
  export const Button: Components<ButtonProps>;
  export const Checkbox: Components<CheckboxProps>;
  export const CheckboxGroup: Components<CheckboxGroupProps>;
  export const Form: Components<FormProps>;
  export const Input: Components<InputProps>;
  export const Label: Components<LabelProps>;
  export const Picker: Components<
    | PickerSelectorProps
    | PickerMultiSelectorProps
    | PickerTimeProps
    | PickerDateProps
    | PickerRegionProps
  >;
  export const PickerView: Components<PickerViewProps>;
  export const PickerViewColumn: Components<PickerViewColumnProps>;
  export const Radio: Components<RadioProps>;
  export const RadioGroup: Components<RadioGroupProps>;
  export const Slider: Components<SliderProps>;
  export const Switch: Components<SwitchProps>;
  export const CoverImage: Components<CoverImageProps>;
  export const Textarea: Components<TextareaProps>;
  export const CoverView: Components<CoverViewProps>;
  export const MovableArea: Components<MovableAreaProps>;
  export const MovableView: Components<MovableViewProps>;
  export const ScrollView: Components<ScrollViewProps>;
  export const Swiper: Components<SwiperProps>;
  export const SwiperItem: Components<SwiperItemProps>;
  export const Navigator: Components<NavigatorProps>;
  export const Audio: Components<AudioProps>;
  export const Camera: Components<CameraProps>;
  export const Image: Components<ImageProps>;
  export const LivePlayer: Components<LivePlayerProps>;
  export const Video: Components<VideoProps>;
  export const Canvas: Components<CanvasProps>;
  export const Ad: Components<AdProps>;
  export const WebView: Components<WebViewProps>;
  export const Block: Components<BlockProps>;
  export const Map: Components<MapProps>;
  export const Slot: Components<SlotProps>;
  export const CustomWrapper: Components<CustomWrapperProps>;
}
