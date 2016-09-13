# Installation

```
npm i --save d0wnl04d
```

# Usage

```
var d0wnl04d = require('d0wnl04d');

var object = {
  url: 'https://pbs.twimg.com/profile_images/624648641337290752/AAxgruLC.jpg',
  name: 'Profile.jpg'
}
d0wnl04d(object)
  .then((output) => {console.log(output);})
  .catch((err) => {console.log(err);})
```
