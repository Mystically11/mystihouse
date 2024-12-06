function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
      console.log('copied!');
    }).catch(function(error) {
      console.error('not copied.. error: ', error);
    });
}

function getBirthday() {
    const today = new Date();
    const year = today.getFullYear();
    const birthday = new Date(year, 7, 31);
    const birthdayStatic = new Date('2008-08-31');
    
    let oldFreak = year - birthdayStatic.getFullYear() + 1;

    if (today < birthday) {
        oldFreak--;
    }
    const daysUntil = Math.ceil((new Date(year + 1, 7, 31) - today) / (1000 * 60 * 60 * 24));

    switch (daysUntil) {
        case 0 | 365:
            return `It's my birthday! i'm ${Math.floor(oldFreak)} now`; 
        default:
            return `i'll be ${Math.floor(oldFreak)} in ${daysUntil} days`;
    }
}
