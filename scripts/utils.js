function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
      console.log('copied Smiley face');
    }).catch(function(error) {
      console.error('not copied Sad face, error: ', error);
    });
  }