# Protea Dome Glamping — Website

## Folder structure

```
dome/
  index.html      ← the website
  server.js       ← Node.js dev server (no npm install needed)
  images/         ← put your images here
    hero.jpg
    interior.jpg
    farm.jpg
    valley.jpg
    horses.jpg
    art.jpg
```

---

## Step 1 — Download images from the Wix site

Open each URL below in your browser, right-click the image → **Save image as**,
save into the `images/` folder with the filename shown.

| Save as       | URL |
|---------------|-----|
| hero.jpg      | https://static.wixstatic.com/media/44d2a4_75bbb032840746f7b61ee0685340fbee~mv2.jpg |
| interior.jpg  | https://static.wixstatic.com/media/44d2a4_eaebb3e6780e428db178a18e3d771458~mv2.jpg |
| farm.jpg      | https://static.wixstatic.com/media/44d2a4_566c802d6b8b47ed8973cc5bc32bcdcc~mv2.jpg |
| valley.jpg    | https://static.wixstatic.com/media/44d2a4_a9bb233b38f941a7928bff6e6b31b75f~mv2.jpg |
| horses.jpg    | https://static.wixstatic.com/media/44d2a4_7605a626305d48aba20ffb5df68cbe1d~mv2.jpeg |
| art.jpg       | https://static.wixstatic.com/media/44d2a4_8bd3646908a243599ab00b35bb55f83a~mv2.jpeg |

---

## Step 2 — Start the server

```
node server.js
```

Then open http://localhost:3000 in your browser.

Optional — use a different port:
```
node server.js 8080
```

---

## Notes

- No npm install required — server.js uses only Node built-ins.
- You can add more images to the `images/` folder and reference them in `index.html`.
- To deploy live: upload the entire `dome/` folder to any static host
  (Netlify drag-and-drop, GitHub Pages, Cloudflare Pages, etc.)

  ## Github
  https://github.com/deanlennox/dome
  
