function runCode() {
    var code = document.getElementById('code').value;
    var iframe = document.getElementById('output');
    try {
        // Sanitize the code to prevent XSS attacks
        code = sanitizeHTML(code);
        
        // Clear the iframe
        iframe.contentWindow.document.open();
        iframe.contentWindow.document.write('');
        iframe.contentWindow.document.close();
        
        // Measure execution time
        var startTime = performance.now();
        
        // Write the sanitized code to the iframe
        iframe.contentWindow.document.open();
        iframe.contentWindow.document.write(code);
        iframe.contentWindow.document.close();
        
        var endTime = performance.now();
        var executionTime = (endTime - startTime).toFixed(2);
        displayMessage(`Code executed in ${executionTime} ms`, 'success');
    } catch (error) {
        displayMessage(`Error: ${error.message}`, 'error');
    }
}

function sanitizeHTML(str) {
    var temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
}

function displayMessage(message, type) {
    var messageBox = document.getElementById('message');
    messageBox.textContent = message;
    messageBox.className = type; // Assuming you have defined styles for .success and .error
    messageBox.style.display = 'block';
    setTimeout(() => {
        messageBox.style.display = 'none';
    }, 5000);
}

// Syntax highlighting setup (using a library like Prism.js or similar)
// Include the library and its CSS in your HTML file
// Example: Prism.highlightAll();
document.addEventListener('DOMContentLoaded', () => {
    Prism.highlightAll();
});
