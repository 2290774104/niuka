import { Message } from 'element-ui';

export const copyText = (text: string) => {
  navigator.clipboard.writeText(text);
  Message.success('复制成功');
};
