import { getCurPageId } from '@/wui/taroUtils/utils';
import { View } from '@tarojs/components';
import { createMemo, For, JSXElement, onCleanup } from 'solid-js';
import { createStore } from 'solid-js/store';

type ModalItem = JSXElement;
const [modalMap, setModalMap] = createStore<{ [key: string]: ModalItem[] }>({});

/** 在所有的页面都显示的 loading */
export const SOW_IN_ALL_PAGE = 'SOW_IN_ALL_PAGE';
export function renderModal(node: ModalItem) {
  const pageId = getCurPageId();
  if (!modalMap[pageId]) {
    setModalMap(pageId, () => [node]);
  } else {
    setModalMap(pageId, list => [...list, node]);
  }
  onCleanup(() => {
    removeModal(node, pageId);
  });

  return null;
}
export function removeModal(node: ModalItem, pageId: string) {
  let pageItems = modalMap[pageId];
  if (!pageItems?.length) {
    return;
  }
  setModalMap(pageId, list => list.filter(item => item !== node));
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
