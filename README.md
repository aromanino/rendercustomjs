rendercustomjs
===========

# A simple middleware to dinamically render javascript files starting from ejs templates

A simple middleware based on ejs engine template that combines data and ejs template to produce dinamically javascript.
This lets you to create and render javascript file created with a dinamically content.

[![NPM](https://nodei.co/npm/rendercustomjs.png?downloads=true&downloadRank=true&stars=true)![NPM](https://nodei.co/npm-dl/rendercustomjs.png?months=6&height=3)](https://nodei.co/npm/rendercustomjs/)

# Install

```bash
  npm install rendercustomjs --save
```

# Usage:

## require it:

```js
const rendercustomjs = require( "rendercustomjs" );
```

## Use it as middleware in your route:

```js
const rendercustomjs = require( "rendercustomjs" );

// your standard routes
router.get('/',function(req,res,next){
    res.render("htmlPage",{text:"Hello Word!!"});
});

// you route to serve javascript dinamically
router.get('/js',rendercustomjs,function(req,res,next){
    var customId="YOUR_LOGIC";
    res.render("jsPage",{url:"http://localhost:3000/" + customID });
});

```


## How to create your dinamically javascript file:

### Step 1:  Create your javascript file as ejs file:

Go to in your project directory where you want to save your javascript files. I create it in views folder of my express project.
```bash
// cd your_view_javascript_Folder
cd myproject/views  
```

Create a ejs file where write your javascript code.
```bash
vim jsPage.ejs  
```
Insert in your file the `<script>` and  `</script>` tag as bellow: 
```js
<script type="text/javascript">
  
  // you logic must be placed here
  
</script>

```
Your code must be put inside `<script>` and  `</script>` tag. 

Now  insert your dinamically javascript code using ejs tags as bellow:
```js
<script type="text/javascript">
 
 jQuery.ajax({
        url: <%= url %>,
        type: "GET",
        success: function(data, textStatus, xhr){
            console.log(data);
        },
        error: function(xhr, status){
            console.log(xhr);
        }
});

</script>
```


License - "MIT License"
-----------------------

MIT License

Copyright (c) 2016 aromanino

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


Author
------
CRS4 Microservice Core Team ([cmc.smartenv@crs4.it](mailto:cmc.smartenv@crs4.it))

Contributors
------
Alessandro Romanino ([a.romanino@gmail.com](mailto:a.romanino@gmail.com))<br>
Guido Porruvecchio ([guido.porruvecchio@gmail.com](mailto:guido.porruvecchio@gmail.com))
