# File Path npm
Welcome to File Path!

# Step 1: Setup
Run in terminal: npm install filepathjs OR npm i filepathjs
<br>
Create <i>index.js</i> file
<br>
Add <code>const file = require("filepathjs");</code>

# Step 2: Getting file path
Add <code>console.log(file.new("index.js"));</code> This logs the full file path from your device

# Step 3: Setting default root
Before <code>console.log(file.new("index.js"));</code> add <code>file.root = "my-folder";</code> Now, it will look for <i>index.js</i> in the folder <i>my-folder</i>

# Step 4: Using with Express
Run in terminal: npm install express OR npm i express
<br>
Write in <i>index.js</i>:<br><code>const express = require("express");</code><br><code>const app = express();</code><br><code>const file = require("file-path");</code><br><br><code>app.get("/", (req, res) => {
‎ ‎ ‎ ‎ res.sendFile(file.new("index.js"));
})</code><br><br><code>app.listen(3000)</code>

# file.new
Parameters: (fileName)
<br>
Returns the full file path from your device
<br>
<code>console.log(file.new("index.js"));</code>

# file.root
Parameters: (foldername)
Setting the default root for <code>file.new = folderName</code>
<br>
If you write <code>file.root("my-folder");</code><br><code>console.log(file.new("index.js"));</code> <i>Then it will return the full file path of my-folder/index.js</i>

# file.this
No parameters
<br>
Returns the current file path
<br>
<code>console.log(file.this);</code>

# file.router (with Express)
<code>file.router.(get, post, put or delete)(fileName, path)</code> Returns a file to the client