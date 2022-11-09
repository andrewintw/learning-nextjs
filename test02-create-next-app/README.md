```
[21:25:48 learning-nextjs] $ mkdir test02
[21:25:55 learning-nextjs] $ cd test02/
[21:29:33 test02] $ npm install create-next-app

added 1 package, and audited 2 packages in 638ms

found 0 vulnerabilities
```

```
[21:30:04 test02] $ npx create-next-app mytest
✔ Would you like to use TypeScript with this project? … No / Yes
✔ Would you like to use ESLint with this project? … No / Yes
Creating a new Next.js app in /home/andrew/ws/learning-nextjs/test02/mytest.

Using npm.

Installing dependencies:
- react
- react-dom
- next


added 19 packages, and audited 20 packages in 10s

2 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

Initializing project with template: default 

Initialized a git repository.

Success! Created mytest at /home/andrew/ws/learning-nextjs/test02/mytest


[21:30:51 test02] $ tree -a -L 3
.
|-- mytest
|   |-- .git
|   |   |-- COMMIT_EDITMSG
|   |   |-- HEAD
|   |   |-- branches
|   |   |-- config
|   |   |-- description
|   |   |-- hooks
|   |   |-- index
|   |   |-- info
|   |   |-- logs
|   |   |-- objects
|   |   `-- refs
|   |-- .gitignore
|   |-- README.md
|   |-- next.config.js
|   |-- node_modules
|   |   |-- .bin
|   |   |-- .package-lock.json
|   |   |-- @next
|   |   |-- @swc
|   |   |-- caniuse-lite
|   |   |-- client-only
|   |   |-- js-tokens
|   |   |-- loose-envify
|   |   |-- nanoid
|   |   |-- next
|   |   |-- picocolors
|   |   |-- postcss
|   |   |-- react
|   |   |-- react-dom
|   |   |-- scheduler
|   |   |-- source-map-js
|   |   |-- styled-jsx
|   |   |-- tslib
|   |   `-- use-sync-external-store
|   |-- package-lock.json
|   |-- package.json
|   |-- pages
|   |   |-- _app.js
|   |   |-- api
|   |   `-- index.js
|   |-- public
|   |   |-- favicon.ico
|   |   `-- vercel.svg
|   `-- styles
|       |-- Home.module.css
|       `-- globals.css
|-- node_modules
|   |-- .bin
|   |   `-- create-next-app -> ../create-next-app/dist/index.js
|   |-- .package-lock.json
|   `-- create-next-app
|       |-- README.md
|       |-- dist
|       `-- package.json
|-- package-lock.json
`-- package.json

35 directories, 23 files

```


```
[21:32:09 test02] $ cd mytest/
[21:32:14 (main) mytest] $ ls -l
total 52
-rw-rw-r--  1 andrew andrew  1581 Nov  9 21:29 README.md
-rw-rw-r--  1 andrew andrew   118 Nov  9 21:29 next.config.js
drwxrwxr-x 20 andrew andrew  4096 Nov  9 21:30 node_modules
-rw-rw-r--  1 andrew andrew 23862 Nov  9 21:30 package-lock.json
-rw-rw-r--  1 andrew andrew   281 Nov  9 21:30 package.json
drwxrwxr-x  3 andrew andrew  4096 Nov  9 21:30 pages
drwxrwxr-x  2 andrew andrew  4096 Nov  9 21:30 public
drwxrwxr-x  2 andrew andrew  4096 Nov  9 21:30 styles
[21:32:19 (main) mytest] $ cat package.json 
{
  "name": "mytest",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "13.0.2",
    "react": "18.2.0",
    "react-dom": "18.2.0"
  }
}
[21:32:23 (main) mytest] $ npm run dev

> mytest@0.1.0 dev
> next dev

ready - started server on 0.0.0.0:3000, url: http://localhost:3000
event - compiled client and server successfully in 4.1s (154 modules)
wait  - compiling / (client and server)...
event - compiled client and server successfully in 1119 ms (183 modules)
	
```
