function like(id, likes) {
  // console.log("l'id: " + id);
  // console.log("le nombres de likes : " + likes);
  const articlePhotographer = document.querySelector(
    `article[data-id="${id}"]`
  );
  const likesPhotographer = articlePhotographer.querySelector(
    `span.likes-photographer`
  );

  if (likes == likesPhotographer.innerHTML) {
    likesPhotographer.textContent++;
  } else {
    likesPhotographer.textContent--;
  }

}
