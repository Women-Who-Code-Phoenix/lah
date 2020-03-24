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
```
git clone https://github.com/Women-Who-Code-Phoenix/lah.git
cd lah
yarn install
git checkout -b {{issue-type}}/{{issue-number}}
yarn serve run
```

Issue types include
- enhancemnt
- bug
- documentation

Issue numbers looks like `LAH-1`. If That isn't assigned to a ticket, use a 1-3 word description about what's being working on.
## Finished 
