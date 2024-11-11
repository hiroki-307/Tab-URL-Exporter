document
  .getElementById("export-all--btn")
  .addEventListener("click", async () => {
    // 開いているすべてのタブを取得
    const tabs = await chrome.tabs.query({});
    const urls = tabs.map((tab) => tab.url); // URLだけを取得

    // データの生成
    const format = document.getElementById("format-select").value;
    const formattedText = formatURLs(urls, format);
    const fileExtension = getFileExtension(format);

    const fileType = getBlobType(format);

    const blob = new Blob([formattedText], { type: fileType });
    const url = URL.createObjectURL(blob);

    const filename = "all_urls" + "." + fileExtension;

    // ダウンロードを開始
    chrome.downloads.download({
      url: url,
      filename: filename,
      saveAs: true,
    });
  });

document
  .getElementById("export-window--btn")
  .addEventListener("click", async () => {
    // 現在のウィンドウ内のすべてのタブを取得
    const tabs = await chrome.tabs.query({ currentWindow: true });
    const urls = tabs.map((tab) => tab.url); // URLだけを取得

    // データの生成
    const format = document.getElementById("format-select").value;
    const formattedText = formatURLs(urls, format);
    const fileExtension = getFileExtension(format);

    const fileType = getBlobType(format);

    const blob = new Blob([formattedText], { type: fileType });
    const url = URL.createObjectURL(blob);

    const filename = "window_urls" + "." + fileExtension;

    // ダウンロードを開始
    chrome.downloads.download({
      url: url,
      filename: filename,
      saveAs: true,
    });
  });

document.getElementById("copy-all-btn").addEventListener("click", async () => {
  try {
    // 開いているすべてのタブを取得
    const tabs = await chrome.tabs.query({});
    const urls = tabs.map((tab) => tab.url); // URLだけを取得

    const format = document.getElementById("format-select").value;
    const formattedText = formatURLs(urls, format);

    // クリップボードにコピー
    await navigator.clipboard.writeText(formattedText);

    // コピー成功メッセージを表示
    document.getElementById("status").innerText = "URLs copied to clipboard!";
  } catch (error) {
    console.error("Failed to copy URLs: ", error);
    document.getElementById("status").innerText = "Failed to copy URLs.";
  }
});

document
  .getElementById("copy-window-btn")
  .addEventListener("click", async () => {
    try {
      // 現在のウィンドウ内のすべてのタブを取得
      const tabs = await chrome.tabs.query({ currentWindow: true });
      const urls = tabs.map((tab) => tab.url); // URLだけを取得

      //   urlをフォーマット
      const format = document.getElementById("format-select").value;
      const formattedText = formatURLs(urls, format);

      // クリップボードにコピー
      await navigator.clipboard.writeText(formattedText);

      // コピー成功メッセージを表示
      document.getElementById("status").innerText = "URLs copied to clipboard!";
    } catch (error) {
      console.error("Failed to copy URLs: ", error);
      document.getElementById("status").innerText = "Failed to copy URLs.";
    }
  });
