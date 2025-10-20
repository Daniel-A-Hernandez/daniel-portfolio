const dialog = document.getElementById('dialog');
document.getElementById('openDialog').addEventListener('click', e => {
  e.preventDefault();
  dialog.showModal();
});
document.getElementById('closeDialog').addEventListener('click', () => dialog.close());