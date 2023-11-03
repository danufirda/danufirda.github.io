(async function() {
    const divs = $('div.inner');
    for (let i = 0; i < divs.length; i++) {
      $(divs[i]).find('img').addClass('shaking-image');
      await new Promise(resolve => setTimeout(resolve, 2000));
      $(divs[i]).find('img').removeClass('shaking-image');
    }
})();