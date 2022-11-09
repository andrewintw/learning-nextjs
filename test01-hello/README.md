

```
[21:02:02 test01] $ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (test01) 
version: (1.0.0) 
description: 
entry point: (index.js) 
test command: 
git repository: 
keywords: 
author: 
license: (ISC) 
About to write to /home/andrew/ws/learning-nextjs/test01/package.json:

{
  "name": "test01",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}


Is this OK? (yes) yes
```

```
[21:02:48 test01] $ npm install react react-dom next

added 19 packages, and audited 20 packages in 3m

2 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

[21:07:06 test01] $ ls -l
total 32
drwxrwxr-x 20 andrew andrew  4096 Nov  9 21:06 node_modules
-rw-rw-r--  1 andrew andrew 23889 Nov  9 21:06 package-lock.json
-rw-rw-r--  1 andrew andrew   301 Nov  9 21:06 package.json
[21:07:07 test01] $ vi package.json 
[21:09:04 test01] $ cat package.json 
{
  "name": "test01",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev":   "next",
    "build": "next build",
    "start": "next start"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "next": "^13.0.2",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
}
```

```
[21:13:42 pages] $ cat index.js 
function index() {
	return (
		<div>Hello Next.js</div>
	)
}

export default index
[21:13:45 pages] $ npm run dev

> test01@1.0.0 dev
> next

ready - started server on 0.0.0.0:3000, url: http://localhost:3000
event - compiled client and server successfully in 752 ms (140 modules)
wait  - compiling /_error (client and server)...
event - compiled client and server successfully in 146 ms (141 modules)
```
