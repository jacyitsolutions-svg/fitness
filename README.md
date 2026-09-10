# Plates: personal fitness log

An offline fitness tracker that installs on your Android phone like a normal app.
No account, no server, no internet needed after the first install. Your data stays on your phone.

## Install on Android (about 10 minutes, one time)

The app needs to be opened once from a web address so Chrome can install it. GitHub Pages hosts it for free.

1. Sign in or sign up at github.com (a computer is easiest for these first steps).
2. Create a new **public** repository, for example `plates`.
3. Choose **Add file → Upload files**, drag in every file from this folder
   (index.html, sw.js, manifest.webmanifest and the three icon PNGs), then **Commit changes**.
4. Go to **Settings → Pages**. Under "Build and deployment", pick **Deploy from a branch**,
   branch **main**, folder **/ (root)**, then **Save**.
5. Wait a minute or two. Your app will be at `https://YOUR-USERNAME.github.io/plates/`.
6. Open that address in **Chrome on your phone**, tap the **⋮** menu, then **Add to Home screen → Install**.

Plates now has its own icon and opens full screen. It works in airplane mode.

The code is public in the repository, but your workouts are not: they are saved only inside the app on your phone.

## Your data

- Everything is stored on the phone in the installed app's storage.
- Uninstalling the app or clearing Chrome's site data deletes it.
- Use **Home → settings icon (top right) → Export backup** now and then. Keep the .json file somewhere safe.
  **Import backup** restores it, including on a new phone.

## Updating the app

If you change index.html and upload it again, bump the version in sw.js (`plates-v1` → `plates-v2`).
The installed app picks up the new version after you open it, close it, and open it again.
