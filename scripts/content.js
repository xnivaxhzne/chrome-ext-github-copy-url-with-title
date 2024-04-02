function getMetaInfo() {
  const url = window.location.href;
  const titleEl = document.querySelector(".markdown-title");
  const title = titleEl?.innerText;

  if (!url || !title) return;

  return {
    url,
    title
  };
}

function getTitleEl() {
  const titleEl = document.querySelector("h1.gh-header-title");
  return titleEl;
}

function createCopyButton() {
  const copyBtn = document.createElement("button");
  copyBtn.innerText = "Copy";

  const typicalBtnClassName = "Button--secondary Button--small Button ml-5";

  copyBtn.className = typicalBtnClassName;

  return copyBtn;
}

function attachCopyURLFunction(el, { title, url }) {
  el.addEventListener("click", () => {
    const htmlString = `<a href="${url}">${title}</a>`;

    const htmlItem = new ClipboardItem({
      "text/html": new Blob([htmlString], { type: "text/html" }),
      "text/plain": new Blob([url], { type: "text/plain" })
    });

    navigator.clipboard.write([htmlItem]);
  });
}

function attachStylesForTitleEl(el) {
  el.style.display = "flex";
  el.style.alignItems = "center";
}

function main() {
  const metaInfo = getMetaInfo();
  if (!metaInfo) return;

  const titleEl = getTitleEl();
  if (!titleEl) return;

  const copyBtn = createCopyButton();

  attachCopyURLFunction(copyBtn, metaInfo);

  attachStylesForTitleEl(titleEl);

  titleEl.appendChild(copyBtn);
}

main();
