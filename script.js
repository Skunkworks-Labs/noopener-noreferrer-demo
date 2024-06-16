function runCode() {
    var code = document.getElementById('code').value;
    var iframe = document.getElementById('output');
    iframe.contentWindow.document.open();
    iframe.contentWindow.document.write(code);
    iframe.contentWindow.document.close();
}
