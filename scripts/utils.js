function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
      console.log('copied Smiley face');
    }).catch(function(error) {
      console.error('not copied Sad face, error: ', error);
    });
}

function getBirthday() {
    const today = new Date();
    const year = today.getFullYear();
    const birthday = new Date(year, 7, 31);
    const birthdayStatic = new Date('2008-08-31');
    
    let targetDate;

    if (today > birthday) {
        targetDate = new Date(year + 1, 7, 31);
    } else {
        targetDate = birthday;
    }

    const diff = targetDate - today;
    const daysUntil = Math.ceil(diff / (1000 * 60 * 60 * 24));

    const oldFreak = (birthday - birthdayStatic) / (1000 * 60 * 60 * 24 * 365.25);

    switch (daysUntil) {
        case 0 | 365:
            return `IT'S MY BIRTHDAY! wow i am ${Math.floor(oldFreak + 1)} now`; 
        case 1:
            return `wow that is in ${daysUntil} day..`;
        default:
            return `i Will be ${Math.floor(oldFreak + 1)} in ${daysUntil} days`;
    }
}

