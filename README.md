# Tab URL Exporter

This Chrome extension allows you to easily gather URLs from your open tabs and windows, and copy or download them in various formats such as Markdown, HTML, Plain Text, JSON, XML, and CSV. Whether you're organizing information or preparing reports, this tool helps you quickly put the collected URLs to use, making your workflow more efficient and seamless.

## Installation

1. Clone this repository.
    ```sh
    git clone https://github.com/yourusername/tab-url-exporter.git
    ```
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" by clicking the toggle switch in the top right corner.
4. Click the "Load unpacked" button and select the cloned repository folder.

## Usage

1. After installing the extension, click the icon in the browser toolbar.
2. A popup will appear where you can select the export format.
3. Click the "Export All Windows" button to download URLs from all windows in the selected format.
4. Click the "Export Current Window" button to download URLs from the current window in the selected format.
5. Click the "Copy All Windows" button to copy URLs from all windows to the clipboard.
6. Click the "Copy Current Window" button to copy URLs from the current window to the clipboard.

## File Structure

- `background.js`: Background script for the extension.
- `getUrl.js`: Script containing functions to convert URLs to various formats.
- `icons/`: Icons used by the extension.
- `manifest.json`: Configuration file for the extension.
- `popup.html`: HTML file for the popup.
- `popup.js`: Script controlling the popup's behavior.
- `styles.css`: Stylesheet for the popup.

## Contributing

Bug reports and feature requests are welcome on the [Issues](https://github.com/yourusername/tab-url-exporter/issues) page. Pull requests are also appreciated.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
