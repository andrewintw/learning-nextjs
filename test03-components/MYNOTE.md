```
[21:54:52 test03] $ sudo npm install -g create-next-app

added 1 package, and audited 2 packages in 3s

found 0 vulnerabilities
[21:55:04 test03] $ ls -l /usr/lib/node_modules/                            
total 16
drwxr-xr-x 4 root root 4096 Nov  7 11:11 corepack
drwxr-xr-x 3 root root 4096 Nov  9 21:55 create-next-app
drwxr-xr-x 7 root root 4096 Nov  7 11:11 npm
drwxr-xr-x 6 root root 4096 Nov  8 13:19 pm2
[21:55:13 test03] $ 
[21:55:13 test03] $ ls -al
total 8
drwxrwxr-x 2 andrew andrew 4096 Nov  9 21:51 .
drwxrwxr-x 5 andrew andrew 4096 Nov  9 21:51 ..
```

```
[21:55:38 test03] $ cd ..
[21:55:49 learning-nextjs] $ rmdir test03/
[21:55:58 learning-nextjs] $ npx create-next-app test03
✔ Would you like to use TypeScript with this project? … No / Yes
✔ Would you like to use ESLint with this project? … No / Yes
Creating a new Next.js app in /home/andrew/ws/learning-nextjs/test03.

Using npm.

Installing dependencies:
- react
- react-dom
- next


added 19 packages, and audited 20 packages in 7s

2 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

Initializing project with template: default 

Initialized a git repository.

Success! Created test03 at /home/andrew/ws/learning-nextjs/test03

[21:56:13 learning-nextjs] $ tree -L 2 test03/
test03/
|-- README.md
|-- next.config.js
|-- node_modules
|   |-- @next
|   |-- @swc
|   |-- caniuse-lite
|   |-- client-only
|   |-- js-tokens
|   |-- loose-envify
|   |-- nanoid
|   |-- next
|   |-- picocolors
|   |-- postcss
|   |-- react
|   |-- react-dom
|   |-- scheduler
|   |-- source-map-js
|   |-- styled-jsx
|   |-- tslib
|   `-- use-sync-external-store
|-- package-lock.json
|-- package.json
|-- pages
|   |-- _app.js
|   |-- api
|   `-- index.js
|-- public
|   |-- favicon.ico
|   `-- vercel.svg
`-- styles
    |-- Home.module.css
    `-- globals.css

22 directories, 10 files

```

```
[21:58:18 (main) test03] $ ls
README.md  next.config.js  node_modules  package-lock.json  package.json  pages  public  styles
[21:58:19 (main) test03] $ cd pages/
[21:58:22 (main) pages] $ ls -al
total 20
drwxrwxr-x 3 andrew andrew 4096 Nov  9 21:56 .
drwxrwxr-x 7 andrew andrew 4096 Nov  9 21:56 ..
-rw-r--r-- 1 andrew andrew  137 Nov  9 21:55 _app.js
drwxrwxr-x 2 andrew andrew 4096 Nov  9 21:56 api
-rw-r--r-- 1 andrew andrew 2296 Nov  9 21:55 index.js
[21:58:23 (main) pages] $ touch tzutung.js
[21:58:36 (main) pages] $ ls -l
total 12
-rw-r--r-- 1 andrew andrew  137 Nov  9 21:55 _app.js
drwxrwxr-x 2 andrew andrew 4096 Nov  9 21:56 api
-rw-r--r-- 1 andrew andrew 2296 Nov  9 21:55 index.js
-rw-rw-r-- 1 andrew andrew    0 Nov  9 21:58 tzutung.js
```


```
[22:01:40 (main) pages] $ cat tzutung.js 
function TzuTung() {
	return (
		<button>紫彤</button>
	)
}

export default TzuTung
```


```
[22:02:12 (main) test03] $ npm run dev

> test03@0.1.0 dev
> next dev

ready - started server on 0.0.0.0:3000, url: http://localhost:3000
event - compiled client and server successfully in 4.2s (154 modules)
wait  - compiling / (client and server)...
event - compiled client and server successfully in 1041 ms (183 modules)
wait  - compiling /tzutung (client and server)...
event - compiled client and server successfully in 183 ms (186 modules)

---

open: http://47.242.33.153:3000/tzutung
```

```
[22:09:51 (main) pages] $ ls -l
total 16
-rw-r--r-- 1 andrew andrew  137 Nov  9 21:55 _app.js
drwxrwxr-x 2 andrew andrew 4096 Nov  9 21:56 api
-rw-r--r-- 1 andrew andrew 2296 Nov  9 21:55 index.js
-rw-rw-r-- 1 andrew andrew   99 Nov  9 22:06 tzutung.js
[22:09:55 (main) pages] $ mkdir blog
[22:10:00 (main) pages] $ cd blog/
[22:10:02 (main) blog] $ vi myblog.js
[22:10:41 (main) blog] $ cat myblog.js 
export default ()=><div>Test Blog!!</div>
[22:11:15 (main) blog] $ # open: http://47.242.33.153:3000/blog/myblog
```

```
[22:16:32 (main) test03] $ ls -l
total 52
-rw-r--r--  1 andrew andrew  1581 Nov  9 21:55 README.md
-rw-r--r--  1 andrew andrew   118 Nov  9 21:55 next.config.js
drwxrwxr-x 20 andrew andrew  4096 Nov  9 21:56 node_modules
-rw-rw-r--  1 andrew andrew 23862 Nov  9 21:56 package-lock.json
-rw-rw-r--  1 andrew andrew   281 Nov  9 21:56 package.json
drwxrwxr-x  4 andrew andrew  4096 Nov  9 22:16 pages
drwxrwxr-x  2 andrew andrew  4096 Nov  9 21:56 public
drwxrwxr-x  2 andrew andrew  4096 Nov  9 21:56 styles
[22:16:33 (main) test03] $ mkdir components
[22:17:08 (main) test03] $ cd components/
[22:17:11 (main) components] $ vi mycomp.js
[22:18:25 (main) components] $ cat mycomp.js
export default ({children})=><button>{children}</button>
{/* "children" is a keyword, don't change */}
[22:18:28 (main) components] $ cd ..
[22:18:33 (main) test03] $ ls -l
total 56
-rw-r--r--  1 andrew andrew  1581 Nov  9 21:55 README.md
drwxrwxr-x  2 andrew andrew  4096 Nov  9 22:18 components
-rw-r--r--  1 andrew andrew   118 Nov  9 21:55 next.config.js
drwxrwxr-x 20 andrew andrew  4096 Nov  9 21:56 node_modules
-rw-rw-r--  1 andrew andrew 23862 Nov  9 21:56 package-lock.json
-rw-rw-r--  1 andrew andrew   281 Nov  9 21:56 package.json
drwxrwxr-x  4 andrew andrew  4096 Nov  9 22:16 pages
drwxrwxr-x  2 andrew andrew  4096 Nov  9 21:56 public
drwxrwxr-x  2 andrew andrew  4096 Nov  9 21:56 styles

[22:18:35 (main) test03] $ cd pages/
[22:18:42 (main) pages] $ ls
_app.js  api  blog  index.js  tzutung.js
[22:18:43 (main) pages] $ vi comptest.js
[22:23:42 (main) pages] $ ls ../components/mycomp.js ^C
[22:25:53 (main) pages] $ vi comptest.js
[22:26:07 (main) pages] $ cat comptest.js
import MyComp from '../components/mycomp'

function comptest() {
	return (<MyComp>帕斯堤貨幣</MyComp>)
}

export default comptest
[22:26:08 (main) pages] $ 
[22:26:51 (main) pages] $ 
[22:26:52 (main) pages] $ ls
_app.js  api  blog  comptest.js  index.js  tzutung.js

open: http://47.242.33.153:3000/comptest

```

