 const shareButton = document.querySelectorAll('.tile-share-button')
 const shareWeb= document.querySelector('.share-button')

console.log(shareButton);
 async function copyTest(e) {
e.preventDefault()
 const link =this.getAttribute('link')
 console.log(link);
 try {
    await navigator.clipboard.writeText(link)
    alert("Copied to clipboard "+link)
 } catch (err) {
   console.error(err);
 }
}

 function copylink(e) {
  e.preventDefault()
  const weblink = this.getAttribute('links')
  console.log(weblink);
  try {
      navigator.clipboard.writeText(weblink)
    alert("Copied Website Link "+weblink)
  } catch (err) {
    console.error(err);
  }
}

 shareButton.forEach(shareButton => shareButton.addEventListener('click',copyTest));


 shareWeb.addEventListener('click',copylink);
