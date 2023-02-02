export class Plasm {
  public select(classe: string) {
    let selected = document.querySelectorAll(`${classe}`);
    function active(index: number) {
      selected.forEach((item) => {
        item.classList.remove('selected');
      });
      selected[index].classList.add('selected');
    }

    selected.forEach((item, index) => {
      item.addEventListener('click', () => {
        active(index);
      });
    });
  }
}
