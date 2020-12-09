import Clipboard from 'clipboard';
export default {
    clipboardSuccess(){
      (this as any).$toast('复制成功');
    },

    clipboardError() {
      (this as any).$toast('复制失败');
    },

  handleClipboard(text: any, event : any, onSuccess : any, onError : any) {
    event = event || {};
    const clipboard = new Clipboard(event.target, {
      text: () => text
    });
    clipboard.on('success', () => {
      // onSuccess ? onSuccess() : clipboardSuccess();
      // clipboard.off('error');
      // clipboard.off('success');
      clipboard.destroy();
    });
    clipboard.on('error', () => {
      // onError ? onError() : clipboardError();
      // clipboard.off('error');
      // clipboard.off('success');
      clipboard.destroy();
    });
    // clipboard.onClick(event);
  }
};
