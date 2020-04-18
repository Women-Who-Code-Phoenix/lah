# Life At Home

## Connect to Firebase
In main.js, this needs to be updated (request access to the WWC - Phoenix Firbase console or setup your own firestore):

```
const config = {
  apiKey: "{key}",
  authDomain: "{projectId}.firebaseapp.com",
  databaseURL: "https://{projectId}.firebaseio.com",
  projectId: "{projectId}",
  storageBucket: "{projectId}.appspot."
}
```

## Pulling down for the first time
**
```
git clone https://github.com/Women-Who-Code-Phoenix/lah.git
cd lah
yarn install
git checkout -b {{issue-type}}/{{brief-description}}
```

Update your main.js file before continuing.

```
git update-index --assume-unchanged ./src/main.js
yarn serve
```

**
Issue types include
- enhancemnt
- feature
- bug
- documentation

Use a 1-3 word description about what's being working on.

A branch name should look something like ```enhancement/about-us```.


Be sure to create Pull Request. At least one person is required to approve the PR before it gets merged into development.
