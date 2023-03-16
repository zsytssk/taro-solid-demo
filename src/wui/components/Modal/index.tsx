import { getCurPageId } from '@/wui/taroUtils/utils';
import { View } from '@tarojs/components';
import { createMemo, For, JSXElement, onCleanup, untrack } from 'solid-js';
import { createStore } from 'solid-js/store';

type ModalItem = JSXElement;
const [modalMap, setModalMap] = createStore<{ [key: string]: ModalItem[] }>({});

/** 在所有的页面都显示的 loading */
export const SOW_IN_ALL_PAGE = 'SOW_IN_ALL_PAGE';
export function renderModal(node: ModalItem) {
  const pageId = getCurPageId();
  const pageList = untrack(() => modalMap[pageId]);
  if (!pageList) {
    setModalMap(pageId, [node]);
  } else {
    setModalMap(pageId, [...pageList, node]);
  }

  onCleanup(() => {
    setModalMap(pageId, list => list.filter(item => item !== node));
  });

  return null;
}

export function ModalManager() {
  const curPageId = getCurPageId();

  const modalList = createMemo(() => {
    if (!curPageId) {
      return [];
    }

    const showAllModals = modalMap[SOW_IN_ALL_PAGE] || [];
    const curPageModals = modalMap[curPageId] || [];
    return [...showAllModals, ...curPageModals];
  });

  return (
    <View>
      <For each={modalList()}>{item => item}</For>
    </View>
  );
}
