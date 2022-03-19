export const scrollTo = (targetId, event) => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView();
    }
};