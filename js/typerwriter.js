new TypeIt(".introduction", {
    speed: 200,
    loop: true,
  })
  .type('Crochê', {delay: 900})
  .delete(6)
  .type('Tricô', {delay:500})
  .delete(5)
  .type('Merda', { delay: 900})
  .delete(5)
  .go();